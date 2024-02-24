import express from 'express';
const messageRoutes = express.Router();
import { create } from './../../controllers/messagesController';

messageRoutes.post('/message', create);


export default messageRoutes;