import express from 'express';
const peopleRoutes = express.Router();
import { create, index } from './../../controllers/peoplesController';

peopleRoutes.post('/peoples', create);
peopleRoutes.get('/peoples', index);


export default peopleRoutes;