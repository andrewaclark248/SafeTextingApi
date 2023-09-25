import express from 'express';
const phoneRoutes = express.Router();
import { index } from './../../controllers/phoneController';

phoneRoutes.get('/phones', index);




export default phoneRoutes;