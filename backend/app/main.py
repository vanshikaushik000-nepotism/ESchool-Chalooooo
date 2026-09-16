from contextlib import asynccontextmanager
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from app.config import settings
from app.database import connect_to_mongo, close_mongo_connection, db

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup
    try:
        await connect_to_mongo()
    except Exception as e:
        print(f"Warning: Startup MongoDB connection issue: {e}")
    yield
    # Shutdown
    await close_mongo_connection()

app = FastAPI(
    title="ESchool Backend API",
    description="FastAPI backend connected to MongoDB Atlas",
    version="1.0.0",
    lifespan=lifespan
)

# Parse allowed origins dynamically from environment settings (.env / system env)
raw_origins = settings.ALLOWED_ORIGINS
if isinstance(raw_origins, str):
    allowed_origins = [origin.strip() for origin in raw_origins.split(",") if origin.strip()]
elif isinstance(raw_origins, list):
    allowed_origins = raw_origins
else:
    allowed_origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins if allowed_origins else ["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {
        "message": "Welcome to ESchool Backend API",
        "docs": "/docs",
        "health": "/api/health"
    }

@app.get("/api/health")
async def health_check():
    db_status = "disconnected"
    if db.client is not None:
        try:
            await db.client.admin.command('ping')
            db_status = "connected"
        except Exception:
            db_status = "error"

    return {
        "status": "online",
        "database": db_status,
        "database_name": settings.DATABASE_NAME
    }
