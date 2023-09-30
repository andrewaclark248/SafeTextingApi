
import express from 'express';
import { VerifyToken } from "./middleware/VerifyToken"
import MyDataSource from './app-data-source'

//api routes
import phoneRoutes from './routes/api/phoneRoutes';
import userRoutes from './routes/api/userRoutes';


MyDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })


const app = express()
const PORT = 5000;


app.use(express.json())
//app.use(VerifyToken);

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