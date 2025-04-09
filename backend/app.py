from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import numpy as np
import joblib
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"],  
)


model = joblib.load("stream_recommender.pkl")
le = joblib.load("label_encoder.pkl")

@app.get("/")
def home():
    return {"message": "Welcome to the College Stream Recommendation API! Use /docs to test the API."}


class StudentData(BaseModel):
    Math: float = 0
    Physics: float = 0
    Chemistry: float = 0
    Biology: float = 0
    CS: float = 0
    Commerce: float = 0

@app.post("/predict")
def predict(data: StudentData):
    cutoff_eng = (data.Math * 2 + data.Physics + data.Chemistry) / 4 if data.Math and data.Physics and data.Chemistry else 0
    cutoff_med = (data.Biology * 2 + data.Physics + data.Chemistry) / 4 if data.Biology and data.Physics and data.Chemistry else 0
    cutoff_comm = (data.Commerce * 2 + data.Math) / 3 if data.Commerce and data.Math else 0
    cutoff_arts = np.mean([data.Math, data.Physics, data.Chemistry, data.Biology, data.CS, data.Commerce])

    input_data = np.array([[cutoff_eng, cutoff_med, cutoff_comm, cutoff_arts]])
    prediction = model.predict(input_data)
    stream = le.inverse_transform(prediction)[0]

    return {"recommended_stream": stream}

