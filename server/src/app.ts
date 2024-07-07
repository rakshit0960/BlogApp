import express from 'express';
import { authenticateToken } from './auth';
import { initializeDatabase } from './db';
import routes from './routes/routes';

const app = express();
app.use(express.json());
const PORT = 3000;

// import all routes form ./routes/routes.ts
app.use(routes);

async function startServer() {
  const dbInitialized = await initializeDatabase();
  if (dbInitialized) {
    app.listen(3000, () => console.log(`Server running on port 3000: http://localhost:${PORT}`));
  } else {
    console.log('Failed to connect to the database. Server not started.');
    process.exit(1);
  }
}

startServer();