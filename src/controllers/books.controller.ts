import { Request, Response, NextFunction } from "express";
import * as booksService from "../services/books.service.js";

export async function getAll(_req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await booksService.getAll());
  } catch (e) { next(e); }
}

export async function getById(req: Request, res: Response, next: NextFunction) {
  try {
    const book = await booksService.getById(+req.params.id);
    if (!book) return res.status(404).json({ message: "Not found" });
    res.json(book);
  } catch (e) { next(e); }
}

export async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const book = await booksService.create(req.body);
    res.status(201).json(book);
  } catch (e) { next(e); }
}

export async function update(req: Request, res: Response, next: NextFunction) {
  try {
    const book = await booksService.update(+req.params.id, req.body);
    res.json(book);
  } catch (e) { next(e); }
}

export async function remove(req: Request, res: Response, next: NextFunction) {
  try {
    await booksService.remove(+req.params.id);
    res.status(204).send();
  } catch (e) { next(e); }
}
