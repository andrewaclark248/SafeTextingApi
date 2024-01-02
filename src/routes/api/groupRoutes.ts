import express from 'express';
const groupRoutes = express.Router();
import { create, index } from './../../controllers/groupsController';

groupRoutes.post('/groups', create);
groupRoutes.get('/groups', index);


export default groupRoutes;