import express from 'express';
const peopleRoutes = express.Router();
import { create, index, destroy, show, update } from './../../controllers/peoplesController';

peopleRoutes.post('/peoples', create);
peopleRoutes.get('/peoples', index);
peopleRoutes.delete('/peoples/:id', destroy);
peopleRoutes.get('/peoples/:id', show);
peopleRoutes.put('/peoples/:id', update);



export default peopleRoutes;