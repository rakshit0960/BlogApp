import express from 'express';
import { loginUser, registerUser } from '../../controllers/authController';
import { loginValidation, registerValidation } from '../../validators/authValidators';

const router = express.Router();

router.post('/register', registerValidation, registerUser);

router.post('/login', loginValidation, loginUser);

export default router;