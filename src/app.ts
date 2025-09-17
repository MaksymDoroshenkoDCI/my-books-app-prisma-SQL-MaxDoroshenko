import express from "express";
import cors from "cors";
import booksRouter from "./routes/books.routes.js";
import { errorHandler } from "./middlewares/errorHandler.js";

export const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (_, res) => res.send("📚 Books API is alive!"));
app.use("/api/v1/books", booksRouter);
app.use(errorHandler);
