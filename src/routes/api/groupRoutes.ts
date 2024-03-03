import express from 'express';
const groupRoutes = express.Router();
import { create, index, destroy} from './../../controllers/groupsController';

groupRoutes.post('/groups', create);
groupRoutes.get('/groups', index);
groupRoutes.delete('/groups/:id', destroy);


export default groupRoutes;