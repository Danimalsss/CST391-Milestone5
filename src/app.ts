import 'dotenv/config';
import express, { Request, Response } from 'express';
import albumsRouter from './routes/albumsRoutes';
import artistsRouter from './routes/artistRoutes';
import tracksRouter from './routes/tracks.routes'
import logger from '../middleware/logger.middleware';
import cors from 'cors';
import helmet from 'helmet';
import authRoutes from './routes/userRoutes';
const app = express();

const port = process.env.PORT;

// CORS middleware should be placed before routes
app.use(cors({
  origin: 'http://localhost:3000'
}));

app.use(helmet());

// Parse JSON bodies
app.use(express.json());
// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Routes should come after middleware
app.use('/', [albumsRouter, artistsRouter, tracksRouter]);
app.use('/auth', authRoutes); 

console.log(process.env.MY_SQL_DB_HOST);

app.listen(port, () => {
  console.log(`App is running at http://localhost:${port}`);
});

if (process.env.NODE_ENV == 'development') {
  // add logger middleware
  app.use(logger);
  console.log(process.env.GREETING + ' in dev mode');
}