
import express from 'express';
import { VerifyToken } from "./middleware/VerifyToken"

//api routes
import phoneRoutes from './routes/api/phoneRoutes';
import userRoutes from './routes/api/userRoutes';

import connection from "./database";

connection.sync();


const app = express()
const PORT = 5000;


app.use(express.json())
app.use(VerifyToken);

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`)
})

app.use('/api', phoneRoutes);
app.use('/api', userRoutes);

process.on('unhandledRejection', (reason, promise) => {
  console.log(reason)
})
process.on('uncaughtException', (reason) => {
  console.log(reason)
})