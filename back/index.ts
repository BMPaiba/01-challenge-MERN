import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import apiRoutes from "./routes";
import dotenv from "dotenv";

// Cargar las variables de entorno
dotenv.config();

const app = express();
const port = 3000;

app.use(morgan("dev"));
app.use(express.json());

const connectDB = () => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(process.env.MONGODB_URL || "")
    .then(() => console.log("Connected to Mongo DB"))
    .catch((err) => {
      console.error("failed to connect with mongo");
      console.error(err);
    });
};

app.get("/api", (req, res) => {
  res.send("<h1>API is running</h1>");
});

app.use("/api", apiRoutes);

const startServer = async () => {
  try {
    connectDB();
    app.listen(port, () => console.log(`Server running on port:${port}`));
  } catch (error) {
    console.log(error);
  }
};

startServer();
