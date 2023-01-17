from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
from routers import accounts
from fastapi import APIRouter
from routers.authenticator import authenticator

app = FastAPI()
app.include_router(authenticator.router)
app.include_router(accounts.router)

# app.options("*", function(req, res) {
#   res.header("Access-Control-Allow-Origin", "http://localhost:3000");
#   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
#   res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
#   res.send();
# });

# FastAPI(app, cors_allowed_origins=["*"])

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
