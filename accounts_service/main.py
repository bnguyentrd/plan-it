from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
from routers import accounts
from routers.authenticator import authenticator

app = FastAPI()
app.include_router(authenticator.router)
app.include_router(accounts.router)


app.add_middleware(
    CORSMiddleware,
    # allow_origins=[os.environ.get("CORS_HOST", "http://localhost:3000")],
    allow_origins=[
        "http://localhost:3000",
        os.environ.get("REACT_APP_ACCOUNTS_SERVICE_API_HOST"),
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
            "tz:": "PST",
        }
    }
