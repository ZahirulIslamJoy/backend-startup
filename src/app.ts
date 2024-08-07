import express from 'express';
import cors from 'cors';
import handleError from './app/middleware/globalErrorHandling';
import notFound from './app/middleware/notFound';
import router from './app/route/routes';
import cookieParser from 'cookie-parser';

const app = express();
app.use(cookieParser())
//const port = 3000

//
app.use(express.json());
app.use(cors());

//Promise.reject()
//application routes
app.use("/api/v1",router)
app.use(handleError);
app.use(notFound);

export default app;
