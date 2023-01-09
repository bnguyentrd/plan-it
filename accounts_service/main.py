from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
from routers import accounts
# from authenticator import authenticator
from fastapi import APIRouter

app = FastAPI()
# app.include_router(authenticator.router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        os.environ.get("CORS_HOST", "http://localhost:3000")
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/launch-details")
def launch_details():
    return {
        "launch_details": {
            "year": 2022,
            "month": 1,
            "day": "2",
            "hour": 19,
            "min": 0,
            "tz:": "PST"
        }
    }


app.include_router(accounts.router)
