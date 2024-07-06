import { Pool, QueryResult } from 'pg';
import dotenv from 'dotenv';
import { hashPassword } from './auth';

dotenv.config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT || '5432'),
});

export async function initializeDatabase() {
  try {
    const client = await pool.connect();
    // test query
    const result = await client.query('SELECT NOW()');
    client.release();
    console.log('Connected to Database!');
    console.log('Current time from DB:', result.rows[0].now);
    return true;
  } catch (err) {
    console.error('Error connecting to the database', err);
    return false;
  }
}

pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

export async function createUser(username: string, email: string, password: string, firstName: string, lastName: string) {
  const hashedPassword = await hashPassword(password);
  return pool.query(
    'INSERT INTO users (username, email, password, first_name, last_name) VALUES ($1, $2, $3, $4, $5) RETURNING id',
    [username, email, hashedPassword, firstName, lastName]
  );
} 

export async function getUserByUsername(username: string) {
  return pool.query('SELECT * FROM users WHERE username = $1', [username]);
}

export async function getUserByEmail(email: string) {
  return pool.query('SELECT * FROM users WHERE email = $1', [email]);
}

export default pool; 