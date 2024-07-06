import express, { Request, Response } from 'express'
import { initializeDatabase } from './db';
import homeRoute from './routes/home/homeRoutes';
import authRoutes from './routes/auth/authRoutes';
import { checkSchema, query, validationResult } from 'express-validator';

const app = express();
const PORT = 3000;

app.use("/", homeRoute);
app.use('/auth', authRoutes);

// Protected route example
// app.get('/protected', authenticateToken, (req, res) => {
//   res.json({ message: 'This is a protected route', user: (req as any).user });
// });
app.get('/hello', checkSchema({
  person: { isEmpty: false }
}, ["query"]), (req: Request, res: Response) => {
  const result = validationResult(req);
  if (result.isEmpty()) {
    return res.send(`Hello, ${req.query.person}!`);
  }
  res.send({ errors: result.array() });
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