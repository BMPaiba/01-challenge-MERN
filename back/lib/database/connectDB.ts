import mongoose from "mongoose";

export const connectDB = async () => {
    mongoose.set("strictQuery", true);
    mongoose
      .connect(process.env.MONGODB_URL || "")
      .then(() => console.log("Connected to Mongo DB"))
      .catch((err) => {
        console.error("failed to connect with mongo");
        throw new Error(`failed to connect with mongo: ${err.message}`);
        
      });
  };
  