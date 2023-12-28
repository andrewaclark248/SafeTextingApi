import express from 'express';
const groupRoutes = express.Router();
import { create } from './../../controllers/groupsController';

groupRoutes.post('/groups', create);


export default groupRoutes;