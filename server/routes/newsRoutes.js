import { Router } from 'express';
import { getDataFromAPI, getHeadlinesFromAPI } from '../controllers/getDataAPI.js';

const router = Router();

router.get('/headlines', getHeadlinesFromAPI)
router.get('/news', getDataFromAPI);

export default router;