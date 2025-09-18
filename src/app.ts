import express from "express";
import cors from "cors";
import booksRouter from "./routes/books.routes.js";

const app = express();
const port = process.env.PORT || 3008;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from Express + Prisma!");
});

app.use("/api/v1", booksRouter);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
