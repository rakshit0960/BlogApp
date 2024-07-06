import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT || '5432'),
});

async function initializeDatabase() {
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


export { pool as default, initializeDatabase };