import express from "express";
import morgan from "morgan";
import apiRoutes from "./routes";

const app = express();
const port = 3000;

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

app.get("/api", (req, res) => {
  res.send("HOLA MUNDO!");
});

// Rutas
app.use("/api", apiRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
