import os
import json
import re
import google.generativeai as genai
from flask import Flask, request, jsonify
from flask_cors import CORS
import fitz  # PyMuPDF
from werkzeug.utils import secure_filename
import traceback

# Configure Flask app
app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}}, supports_credentials=True)

app.secret_key = os.getenv("FLASK_SECRET_KEY", "your-secret-key")  
app.config['UPLOAD_FOLDER'] = 'uploads'
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024  
ALLOWED_EXTENSIONS = {'pdf'}


os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)

# Configure Google Gemini API
GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY", "your-gemini-api-key")  # Use environment variable
genai.configure(api_key=GOOGLE_API_KEY)
model = genai.GenerativeModel('gemini-1.5-flash')  # Updated to a more recent model

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

def clean_pdf_text(text):
    """Clean PDF text by removing PDF structure artifacts"""
    text = re.sub(r'\d+ \d+ obj', '', text)
    text = re.sub(r'endobj', '', text)
    text = re.sub(r'stream[\s\S]*?endstream', '', text)
    text = re.sub(r'/[A-Za-z]+\s+[^\s]+', '', text)
    patterns_to_remove = [
        r'<<.*?>>', 
        r'endobj',
        r'\[\d+ \d+ \d+ \d+\]',
        r'/Type\s*/[A-Za-z]+',
        r'/[A-Za-z]+\s*\d+\s*\d+\s*R',
        r'\d+\s*\d+\s*R',
        r'xref',
        r'trailer'
    ]
    for pattern in patterns_to_remove:
        text = re.sub(pattern, '', text)
    text = re.sub(r'\s+', ' ', text)
    cleaned_lines = []
    for line in text.split('\n'):
        line = line.strip()
        if len(line) > 5 and not re.match(r'^[\d\s.]+$', line):
            cleaned_lines.append(line)
    return '\n'.join(cleaned_lines)

def extract_text_from_pdf(pdf_path):
    """Extract text content from a PDF file using PyMuPDF (fitz)"""
    try:
        print(f"Attempting to extract text from: {pdf_path}")
        if not os.path.exists(pdf_path):
            print(f"Error: File does not exist at {pdf_path}")
            return None
        raw_text = ""
        with fitz.open(pdf_path) as doc:
            for page_num, page in enumerate(doc):
                page_text = page.get_text()
                if not page_text.strip():
                    page_text = page.get_text("html")
                    page_text = re.sub(r'<[^>]+>', '', page_text)
                if not page_text.strip():
                    page_text = page.get_text("text", flags=fitz.TEXT_PRESERVE_LIGATURES | fitz.TEXT_PRESERVE_WHITESPACE)
                raw_text += f"\n--- Page {page_num+1} ---\n{page_text}"
        cleaned_text = clean_pdf_text(raw_text)
        cleaned_file_path = os.path.join(app.config['UPLOAD_FOLDER'], 'cleaned_text.txt')
        with open(cleaned_file_path, 'w', encoding='utf-8') as f:
            f.write(cleaned_text)
        print(f"Saved cleaned text to: {cleaned_file_path}")
        if len(cleaned_text.strip()) < 10:
            print("Warning: Very little text extracted from PDF")
            return "Could not extract meaningful text from PDF."
        return cleaned_text
    except Exception as e:
        print(f"Error extracting text from PDF: {e}")
        traceback.print_exc()
        return None

def analyze_resume(resume_text):
    """Make API call to Gemini to extract structured info from resume"""
    prompt = f"""
    Analyze the following resume and extract these key components:
    - Skills (technical and soft skills)
    - Work experience (company names, roles, dates, responsibilities)
    - Education (degrees, institutions, dates)
    - Certifications (if any)
    - Projects (if any)
    - Predict the professional domain (e.g., Full Stack Developer, Data Scientist, DevOps Engineer, etc.)
    
    Return the results in a structured JSON format with these keys: skills, work_experience, education, certifications, projects, domain.
    
    Resume:
    {resume_text}
    """
    try:
        response = model.generate_content(prompt)
        content = response.text
        try:
            return json.loads(content)
        except json.JSONDecodeError:
            json_pattern = r'```json(.*?)```'
            match = re.search(json_pattern, content, re.DOTALL)
            if match:
                json_content = match.group(1).strip()
                return json.loads(json_content)
            else:
                json_pattern = r'({.*})'
                match = re.search(json_pattern, content, re.DOTALL)
                if match:
                    json_content = match.group(1).strip()
                    return json.loads(json_content)
                else:
                    return {"error": "Could not parse JSON from response", "raw_response": content}
    except Exception as e:
        print(f"Error calling Gemini API for resume analysis: {e}")
        traceback.print_exc()
        return {"error": str(e)}

def evaluate_resume_match(resume_data):
    """Make API call to Gemini to evaluate resume against a job description"""
    domain = resume_data.get('domain', 'Unknown')
    prompt = f"""
    Based on the resume data provided, perform the following tasks:
    
    1. Generate a standard job description for a {domain} role
    2. Compare the candidate's resume against this job description
    3. Provide:
       - A match score out of 100
       - Missing skills or qualifications
       - Specific suggestions to improve the resume for this domain
    
    Return the results in a structured JSON format with these keys: job_description, match_score, missing_skills, improvement_suggestions.
    
    Resume Data:
    {json.dumps(resume_data)}
    """
    try:
        response = model.generate_content(prompt)
        content = response.text
        try:
            return json.loads(content)
        except json.JSONDecodeError:
            json_pattern = r'```json(.*?)```'
            match = re.search(json_pattern, content, re.DOTALL)
            if match:
                json_content = match.group(1).strip()
                return json.loads(json_content)
            else:
                json_pattern = r'({.*})'
                match = re.search(json_pattern, content, re.DOTALL)
                if match:
                    json_content = match.group(1).strip()
                    return json.loads(json_content)
                else:
                    return {"error": "Could not parse JSON from response", "raw_response": content}
    except Exception as e:
        print(f"Error calling Gemini API for resume evaluation: {e}")
        traceback.print_exc()
        return {"error": str(e)}

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'resume' not in request.files:
        return jsonify({'error': 'No file part'}), 400
    file = request.files['resume']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400
    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(filepath)
        print(f"Saved file to: {os.path.abspath(filepath)}")
        resume_text = extract_text_from_pdf(filepath)
        if not resume_text:
            return jsonify({'error': 'Error extracting text from PDF. Please try another file.'}), 400
        resume_data = analyze_resume(resume_text)
        if "error" in resume_data:
            return jsonify({'error': f'Error analyzing resume: {resume_data["error"]}'}), 400
        evaluation_data = evaluate_resume_match(resume_data)
        if "error" in evaluation_data:
            return jsonify({'error': f'Error evaluating resume: {evaluation_data["error"]}'}), 400
        # Ensure all fields are present
        resume_data.setdefault('skills', [])
        resume_data.setdefault('work_experience', [])
        resume_data.setdefault('education', [])
        resume_data.setdefault('certifications', [])
        resume_data.setdefault('projects', [])
        evaluation_data.setdefault('missing_skills', [])
        evaluation_data.setdefault('improvement_suggestions', [])
        return jsonify({
            'resume_data': resume_data,
            'evaluation_data': evaluation_data
        })
    return jsonify({'error': 'Invalid file format. Please upload a PDF file.'}), 400

@app.route('/health', methods=['GET'])
def health_check():
    return jsonify({'status': 'ok'})

@app.route('/', methods=['GET'])
def index():
    return jsonify({'message': 'Flask backend is running!'})


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)