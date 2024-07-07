import express from 'express';
import { loginUser, logoutUser, registerUser } from '../../controllers/authController';
import { loginValidation, registerValidation } from '../../validators/authValidators';
import { authenticateToken } from '../../auth';

const router = express.Router();

router.post('/register', registerValidation, registerUser);

router.post('/login', loginValidation, loginUser);

router.post('/logout', authenticateToken, logoutUser);

export default router;