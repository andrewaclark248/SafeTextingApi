import express from 'express';
const userRoutes = express.Router();
import { create } from './../../controllers/usersController';

userRoutes.post('/users', create);




export default userRoutes;