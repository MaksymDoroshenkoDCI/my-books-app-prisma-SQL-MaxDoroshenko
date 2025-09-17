import { PrismaClient, Genre } from "@prisma/client";
const prisma = new PrismaClient();

export const getAll = () => prisma.book.findMany({ include: { author: true } });
export const getById = (id: number) => prisma.book.findUnique({ where: { id }, include: { author: true } });

export const create = (data: any) => prisma.book.create({
  data: {
    title: data.title,
    genre: data.genre as Genre,
    isbn: data.isbn ?? null,
    authorId: data.authorId ?? null
  }
});

export const update = (id: number, data: any) => prisma.book.update({
  where: { id },
  data: {
    title: data.title,
    genre: data.genre as Genre,
    isbn: data.isbn,
    authorId: data.authorId
  }
});

export const remove = (id: number) => prisma.book.delete({ where: { id } });
