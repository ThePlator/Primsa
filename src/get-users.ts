import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function getUsers() {
  try {
    const users = await prisma.user.findMany();
    return users;
  } catch (error) {
    console.error('Error retrieving users:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Call the getUsers function
getUsers()
  .then((users) => {
    console.log('Users:', users);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
