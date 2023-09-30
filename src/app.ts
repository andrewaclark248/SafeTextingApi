
import express from 'express';
import { VerifyToken } from "./middleware/VerifyToken"
import phoneRoutes from './routes/api/phoneRoutes';
import { ErrorHandler } from './middleware/ErrorHandler';
import MyDataSource from './app-data-source'


MyDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })


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