import logging
from motor.motor_asyncio import AsyncIOMotorClient
from app.config import settings

logger = logging.getLogger("uvicorn.error")

class Database:
    client: AsyncIOMotorClient = None
    db = None

db = Database()

async def connect_to_mongo():
    logger.info("Connecting to MongoDB Atlas...")
    try:
        db.client = AsyncIOMotorClient(
            settings.MONGODB_URI,
            serverSelectionTimeoutMS=5000
        )
        # Test connection with a ping
        await db.client.admin.command('ping')
        db.db = db.client[settings.DATABASE_NAME]
        logger.info(f"Successfully connected to MongoDB! Database: '{settings.DATABASE_NAME}'")
    except Exception as e:
        logger.error(f"Failed to connect to MongoDB: {e}")
        db.client = None
        db.db = None
        raise e

async def close_mongo_connection():
    if db.client:
        logger.info("Closing MongoDB connection...")
        db.client.close()
        logger.info("MongoDB connection closed.")

def get_database():
    return db.db
