import express from 'express';
const phoneRoutes = express.Router();
import { index, search, post } from './../../controllers/phoneController';

phoneRoutes.get('/phones', index);
phoneRoutes.post('/phones', post);
phoneRoutes.post('/phones/search', search);




export default phoneRoutes;