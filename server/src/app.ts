import express, { Request, Response } from 'express'
import { initializeDatabase } from './db';
import homeRoute from './routes/home/homeRoutes';
import authRoutes from './routes/auth/authRoutes';
import { checkSchema, query, validationResult } from 'express-validator';
import { authenticateToken } from './auth';

const app = express();
app.use(express.json());
const PORT = 3000;

app.use("/", homeRoute);
app.use('/auth', authRoutes);

// Protected route example
app.get('/protected', authenticateToken, (req, res) => {
  res.json({ message: 'This is a protected route', user: (req as any).user });
});

async function startServer() {
  const dbInitialized = await initializeDatabase();
  if (dbInitialized) {
    app.listen(3000, () => {
      console.log(`Server running on port 3000: http://localhost:${PORT}`);
    });
  } else {
    console.log('Failed to connect to the database. Server not started.');
    process.exit(1);
  }
}

startServer();