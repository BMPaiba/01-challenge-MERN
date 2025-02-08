import express from "express";
import morgan from "morgan";
import apiRoutes from "./routes";
import dotenv from "dotenv";
import { connectDB } from "./lib/database/connectDB";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan("dev"));
app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"], 
  allowedHeaders: ["Content-Type", "Authorization"], 
}));

app.get("/", (req, res) => {
  res.send("<h1>API is running</h1>");
});

app.use("/api", apiRoutes);

const startServer = async () => {
  try {
    await connectDB();
    app.listen(port, () => console.log(`Server running on port:${port}`));
  } catch (error) {
    console.log(error);
  }
};

startServer();
