import express from 'express';
import cors from 'cors';
import { StudentRoutes } from './app/config/modules/student/student.route';
import { UserRouters } from './app/config/modules/user/user.route';
import handleError from './app/middleware/globalErrorHandling';
import notFound from './app/middleware/notFound';

const app = express();
//const port = 3000

//
app.use(express.json());
app.use(cors());


//application routes
app.use("/api/v1/students",StudentRoutes)
app.use("/api/v1/users",UserRouters)




app.use(handleError);

app.use(notFound);

export default app;
