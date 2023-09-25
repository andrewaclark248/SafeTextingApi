
import express from 'express';
import { VerifyToken } from "./middleware/VerifyToken"
import phoneRoutes from './routes/api/phoneRoutes';
import { ErrorHandler } from './middleware/ErrorHandler';


const app = express()
const PORT = 5000;

app.use(VerifyToken);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})

app.use('/api', phoneRoutes);

process.on('unhandledRejection', (reason, promise) => {
  console.log(reason)
})
process.on('uncaughtException', (reason) => {
  console.log(reason)
})