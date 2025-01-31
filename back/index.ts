import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;

// Middleware para registrar las peticiones en consola
app.use(morgan("dev")); // "dev" es un formato predefinido

app.get("/", (req, res) => {
  res.send("HOLA MUNDO!");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
