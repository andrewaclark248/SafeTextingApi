import express from 'express';
const peopleRoutes = express.Router();
import { create, index, destroy } from './../../controllers/peoplesController';

peopleRoutes.post('/peoples', create);
peopleRoutes.get('/peoples', index);
peopleRoutes.get('/peoples/:id', destroy);



export default peopleRoutes;