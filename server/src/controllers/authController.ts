import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { comparePassword, generateToken } from "../auth";
import { createUser, getUserByEmail, getUserByUsername, updateUserLoginStatus } from "../db";

export const registerUser = async (req: Request, res: Response) => {
  // Check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

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
    // generate and send jwt token 
    const result = await createUser(username, email, password, firstName, lastName);
    const userId = result.rows[0];
    const token = generateToken(userId, username, email);
    res.status(201).json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error registering user' });
  }
}

export const loginUser = async (req: Request, res: Response) => {
  // Check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) 
    return res.status(400).json({ errors: errors.array() });

  try {

    const { username, password } = req.body;
    const result = await getUserByUsername(username);

    // Check if username exists
    if (result.rows.length === 0) {
      return res.status(401).json({ error: 'Invalid username' });
    }

    const user = result.rows[0];
    const validPassword = await comparePassword(password, user.password);

    // Check valid password
    if (!validPassword) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    // Update is_logged_in status
    await updateUserLoginStatus(user.id, true);

    // Generate and send jwt token 
    const token = generateToken(user.id, user.username, user.email);
    res.json({ token });
    
  } catch (err) {
    
    console.error(err);
    res.status(500).json({ error: 'Error logging in' });
    
  }
};


export const logoutUser = async (req: Request, res: Response) => {
  try {
    
    const userId = (req as any).user.userId; 
    await updateUserLoginStatus(userId, false);
    res.json({ message: 'Logged out successfully' });
    
  } catch (err) {
    
    console.error(err);
    res.status(500).json({ error: 'Error logging out' });

  }
};