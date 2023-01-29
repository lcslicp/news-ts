import { Router } from 'express';
import { getDataFromAPI } from '../controllers/getDataAPI.js';

const router = Router();

router.get('/news', getDataFromAPI);

export default router;