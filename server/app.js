import express from 'express';
const app = express();
import cookieParser from 'cookie-parser';
import cors from 'cors';
import auth from './routes/auth.route.js'
export { app };
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true}))
app.use(express.json());
app.use(cookieParser());

app.use('/api/v1', auth);
