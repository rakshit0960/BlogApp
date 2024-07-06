import express from 'express';
import { createUser, getUserByEmail, getUserByUsername } from '../../db';
import { comparePassword, generateToken } from '../../auth';

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const { username, email, password, firstName, lastName } = req.body;

    // Check if username already exists
    const existingUsername = await getUserByUsername(username);
    if (existingUsername.rows.length > 0) {
      return res.status(400).json({ error: 'Username already exists' });
    }

    // Check if email already exists
    const existingEmail = await getUserByEmail(email);
    if (existingEmail.rows.length > 0) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    const result = await createUser(username, email, password, firstName, lastName);
    const userId = result.rows[0].id;
    const token = generateToken(userId, username, email);
    res.status(201).json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error registering user' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const result = await getUserByUsername(username);
    if (result.rows.length === 0) {
      return res.status(401).json({ error: 'Invalid username' });
    }
    const user = result.rows[0];
    const validPassword = await comparePassword(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ error: 'Invalid password' });
    }
    const token = generateToken(user.id, user.username, user.email);
    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error logging in' });
  }
});

export default router;