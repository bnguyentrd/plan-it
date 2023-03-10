from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import events, checklists
import os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    # allow_origins=[os.environ.get("CORS_HOST", "http://localhost:3000")],
    allow_origins=[
        "http://localhost:3000",
        os.environ.get("CORS_HOST", "REACT_APP_EVENTS_API_HOST"),
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(events.router)
app.include_router(checklists.router)
