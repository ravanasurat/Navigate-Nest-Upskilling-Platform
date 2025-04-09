const { GoogleGenerativeAI } = require("@google/generative-ai");

// 🔐 Hardcode your Gemini API key here
const apiKey = "AIzaSyAH1GDM5-a2t23fx9KlhQ5OPaGbWG0L4PM"; // <-- Replace this with your actual API key

const genAI = new GoogleGenerativeAI(apiKey);

const getChatResponse = async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    console.log("Received Message:", message);

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: message }] }],
    });

    const response = await result.response;
    const text = response.text();

    res.json({ reply: text });
  } catch (error) {
    console.error("Google Gemini API Error:", error);

    res.status(500).json({
      error: "Error processing request",
      details: error.message || "Unknown error",
    });
  }
};

module.exports = { getChatResponse };
