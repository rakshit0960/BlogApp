import bcrypt from "bcrypt";
import dotenv from 'dotenv';
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import pool from "./db";
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET as string;
const TOKEN_EXPIRATION = "30d"; // Token will expire in 1 month

interface UserPayload {
  userId: number;
  username: string;
  email: string;
}

export async function hashPassword(password: string) {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
}

export async function comparePassword(password: string, hash: string) {
  return bcrypt.compare(password, hash);
}

export function generateToken(userId: number, username: string, email: string) {
  const payload: UserPayload = { userId, username, email };
  return jwt.sign(payload, JWT_SECRET, { expiresIn: TOKEN_EXPIRATION });
}

export function verifyToken(token: string): any {
  return jwt.verify(token, JWT_SECRET);
}

export async function authenticateToken(req: Request, res: Response, next: NextFunction) {
  // extract jwt token form the header as bearer token
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  } 

  try {
    // Decode jwt token
    const decodedPayload = jwt.verify(token, JWT_SECRET) as UserPayload;
    
    // Check if user is logged in
    const result = await pool.query('SELECT is_logged_in FROM users WHERE id = $1', [decodedPayload.userId]);
    if (result.rows.length === 0 || !result.rows[0].is_logged_in) {
      return res.status(401).json({ message: 'User is not logged in' });
    }

    // add decodedPayload to request object
    (req as any).user = decodedPayload;
    
    // next middleware
    next();

  } catch (err) {

    if (err instanceof jwt.TokenExpiredError)  {
      return res.status(401).json({ message: 'Token expired' });
    }

    return res.status(403).json({ message: 'Invalid token' });

  }
}
