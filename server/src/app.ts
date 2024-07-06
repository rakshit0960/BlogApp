import express from 'express';
import { authenticateToken } from './auth';
import { initializeDatabase } from './db';
import authRoutes from './routes/auth/authRoutes';
import homeRoute from './routes/home/homeRoutes';

const app = express();
app.use(express.json());
const PORT = 3000;

app.use("/", homeRoute);
app.use('/auth', authRoutes);


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