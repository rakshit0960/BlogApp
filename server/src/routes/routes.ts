import express from 'express';
import { authenticateToken } from '../auth';
import authRoute from './auth/authRoutes';

const router = express.Router();

// authentication route
router.use('/auth', authRoute);


router.get('/protected', authenticateToken, (req, res) => {
  res.json({ message: 'This is a protected route', user: (req as any).user });
});

router.all('*', (req, res) => {
    res.status(404).json({message: "page dose not exist"});
})

export default router;