from fastapi import FastAPI
from datetime import datetime
import os

from fastapi.middleware.cors import CORSMiddleware
from routers.products import router as products_router

app = FastAPI(title="Product Service")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(products_router)


@app.get("/")
def root():
    return {"service": "product-service"}


@app.get("/health", tags=["Health"])
def health():
    return {
        "status": "UP",
        "service": "product-service",
        "version": os.getenv("SERVICE_VERSION", "unknown"),
        "environment": os.getenv("ENVIRONMENT", "unknown"),
        "timestamp": datetime.utcnow().isoformat() + "Z"
    }
