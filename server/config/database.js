import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const dbConnect = async () => {
  try {
    // Connect to the MongoDB database using the URL from environment variables
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully");
  } catch (err) {
    console.error("DB connection failed:", err.message);
    process.exit(1); // Exit the process with a failure code
  }
};

export default dbConnect;
