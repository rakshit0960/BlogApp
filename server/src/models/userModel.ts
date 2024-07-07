import { hashPassword } from "../auth";
import pool from "../db";

export async function createUser(username: string, email: string, password: string, firstName: string, lastName: string) {
  const hashedPassword = await hashPassword(password);
  return pool.query(
    'INSERT INTO users (username, email, password, first_name, last_name, is_logged_in) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id',
    [username, email, hashedPassword, firstName, lastName, true]
  );
}

export async function getUserByUsername(username: string) {
  return pool.query('SELECT * FROM users WHERE username = $1', [username]);
}

export async function getUserByEmail(email: string) {
  return pool.query('SELECT * FROM users WHERE email = $1', [email]);
}

export async function updateUserLoginStatus(userId: number, isLoggedIn: boolean): Promise<void> {
  await pool.query('UPDATE users SET is_logged_in = $1 WHERE id = $2', [isLoggedIn, userId]);
}