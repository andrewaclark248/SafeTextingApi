
import express from 'express';
import { VerifyToken } from "./middleware/VerifyToken"

//api routes
import phoneRoutes from './routes/api/phoneRoutes';
import userRoutes from './routes/api/userRoutes';
import groupRoutes from './routes/api/groupRoutes';
import peopleRoutes from './routes/api/peopleRoutes';
import groupsPeopleRoutes from './routes/api/groupsPeopleRoutes';


import { initOrm } from './database'
import { RequestContext } from "@mikro-orm/core";

import cors from 'cors';
import 'dotenv/config'
//const dotenv = require('dotenv');
import dotenv from "dotenv"
dotenv.config({ path: `${__dirname}/.env` });


(async () => {

  //create database
  const orm = await initOrm();


  const app = express()
  const PORT = process.env.PORT || 5000
  

  const whitelist = ['https://safetexting-staging-19857cad8f2b.herokuapp.com']; // assuming front-end application is running on localhost port 3000


  app.use(express.json())
  app.use(VerifyToken);

  app.use((req, res, next) => {
    RequestContext.create(orm.em, next);
  });
  
  app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`)
  })
  

  app.use('/api', phoneRoutes);
  app.use('/api', userRoutes);
  app.use('/api', groupRoutes);
  app.use('/api', peopleRoutes);
  app.use('/api', groupsPeopleRoutes);
  
  app.use(cors())


})();

