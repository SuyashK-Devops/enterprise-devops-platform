from fastapi import FastAPI
from datetime import datetime
import os

from fastapi.middleware.cors import CORSMiddleware
from routers.users import router as users_router

app = FastAPI(title="User Service")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(users_router)


@app.get("/")
def root():
    return {"service": "user-service"}


@app.get("/health", tags=["Health"])
def health():
    return {
        "status": "UP",
        "service": "user-service",
        "version": os.getenv("SERVICE_VERSION", "unknown"),
        "environment": os.getenv("ENVIRONMENT", "unknown"),
        "timestamp": datetime.utcnow().isoformat() + "Z"
    }
