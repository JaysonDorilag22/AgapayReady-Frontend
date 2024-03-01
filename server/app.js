import express from 'express';
const app = express();
import cors from 'cors';
import cookieParser from 'cookie-parser';
import auth from './routes/auth.route.js';

app.use(cors({
    origin: 'https://agapayready-frontend.onrender.com',
    credentials: true
}));

app.use(express.json());
app.use(cookieParser());

// Handle OPTIONS requests
app.options('*', cors());

app.use('/api/v1', auth);
export { app };
