import { PrismaClient, Genre } from "@prisma/client";

const prisma = new PrismaClient();

// GET /books
export const getAllBooks = async (req, res) => {
  try {
    const books = await prisma.book.findMany();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET /books/:id
export const getBookById = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const book = await prisma.book.findUnique({ where: { id } });
    if (!book) return res.status(404).json({ error: "Book not found" });
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST /books
export const createBook = async (req, res) => {
  const { title, genre, isbn } = req.body;
  try {
    const book = await prisma.book.create({
      data: {
        title,
        genre,
        isbn,
      },
    });
    res.status(201).json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// PUT /books/:id
export const updateBook = async (req, res) => {
  const id = parseInt(req.params.id);
  const { title, genre, isbn } = req.body;
  try {
    const book = await prisma.book.update({
      where: { id },
      data: { title, genre, isbn },
    });
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE /books/:id
export const deleteBook = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    await prisma.book.delete({ where: { id } });
    res.json({ message: "Book deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
