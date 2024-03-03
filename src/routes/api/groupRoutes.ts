import express from 'express';
const groupRoutes = express.Router();
import { create, index, destroy, show, update} from './../../controllers/groupsController';

groupRoutes.post('/groups', create);
groupRoutes.get('/groups', index);
groupRoutes.delete('/groups/:id', destroy);
groupRoutes.get('/groups/:id', show);
groupRoutes.put('/groups/:id', update);

export default groupRoutes;