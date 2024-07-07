import express, { Request, Response } from 'express';
import authRoute from './auth/authRoutes';
import { authenticateToken } from '../auth';

const router = express.Router();

// authentication route
router.use('/auth', authRoute);


router.get('/protected', authenticateToken, (req, res) => {
  res.json({ message: 'This is a protected route', user: (req as any).user });
});

export default router;