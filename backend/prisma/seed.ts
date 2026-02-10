import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: { name: "Yash", email: "yash@example.com", password: "hashed_pw", role: "admin" },
  });

  const project = await prisma.project.create({
    data: { title: "Portfolio SaaS", description: "Project management app", ownerId: user.id },
  });

  await prisma.task.create({
    data: { title: "Set up backend", projectId: project.id, assigneeId: user.id },
  });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
