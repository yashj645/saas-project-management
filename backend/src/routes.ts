import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const router = Router();


router.get('/health', async (_req, res) => {
  res.status(200).json({ status: 'ok', service: 'backend' });
});

export default router;