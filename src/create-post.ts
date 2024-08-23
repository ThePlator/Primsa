import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.post.create({
    data: {
      title: 'Prisma makes database easy',
      content: 'You can query your database with Prisma Client',
      author: {
        connect: {
          id: 1,
        },
      },
    },
  });
}

// This function creates a new User and a new Post
async function createUserAndPost() {
  const user = await prisma.user.create({
    data: {
      name: 'John Doe',
      email: 'john.doe@example.com',
    },
  });

  await prisma.post.create({
    data: {
      title: 'Prisma makes database easy',
      content: 'You can query your database with Prisma Client',
      author: {
        connect: {
          id: user.id,
        },
      },
    },
  });
}

createUserAndPost();

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
