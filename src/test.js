import { PrismaClient, Genre } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // Створимо тестову книгу
  const book = await prisma.book.create({
    data: {
      title: "Dune",
      genre: Genre.SCIENCE_FICTION,
      isbn: "9780441013593"
    }
  });
  console.log("Created book:", book);

  // Отримаємо всі книги
  const books = await prisma.book.findMany();
  console.log("All books:", books);
}

main()
  .catch(e => console.error(e))
  .finally(async () => await prisma.$disconnect());
