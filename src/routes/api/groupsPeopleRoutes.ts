import express from 'express';
const groupsPeopleRoutes = express.Router();
import { create, index, destroy} from './../../controllers/groupPeopleController';

groupsPeopleRoutes.post('/group_people', create);
groupsPeopleRoutes.get('/group_people/:id', index);
groupsPeopleRoutes.delete('/group_people', destroy);


export default groupsPeopleRoutes;