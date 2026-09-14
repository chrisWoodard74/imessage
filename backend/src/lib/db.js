import mongoose from "mongoose";


export async function connectDB() {
    try {
        const mongoUri = process.env.MONGODB_URI || process.env.MONGO_URI;

        if (!mongoUri) {
            throw new Error("MongoDB URI is required. Set MONGODB_URI or MONGO_URI in your environment.");
        }

        const conn = await mongoose.connect(mongoUri);
        console.log("MongoDb connected", conn.connection.host);
    } catch (error) {
        console.log("MongoDb connection error:", error.message);
        process.exit(1);
    }
}