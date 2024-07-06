import express from 'express'
import { initializeDatabase } from './db';
import HomeRouter from './routes/home/home';

const app = express();
const PORT = 3000;

app.use("/", HomeRouter);

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