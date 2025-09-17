import { Router } from "express";
import * as booksController from "../controllers/books.controller.js";

const router = Router();

router.get("/", booksController.getAll);
router.get("/:id", booksController.getById);
router.post("/", booksController.create);
router.put("/:id", booksController.update);
router.delete("/:id", booksController.remove);

export default router;
