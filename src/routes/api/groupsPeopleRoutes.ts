import express from 'express';
const groupsPeopleRoutes = express.Router();
import { create, index } from './../../controllers/groupPeopleController';

groupsPeopleRoutes.post('/group_people', create);
groupsPeopleRoutes.get('/group_people/:id', index);


export default groupsPeopleRoutes;