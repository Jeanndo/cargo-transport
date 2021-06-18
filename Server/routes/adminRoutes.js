import express from 'express';
import {getTrucks,createTruck,updateTruck,deleteTruck,getTruck} from '../controllers/Admin.js';
import auth from '../middlewares/auth.js';

const router = express.Router();

router.get('/',auth,getTrucks);
router.post('/',auth,createTruck);
router.patch('/:id',auth,updateTruck);
router.delete('/:id',auth,deleteTruck);
router.get('/:id',auth,getTruck);

export default router;