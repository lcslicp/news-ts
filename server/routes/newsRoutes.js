import { Router } from 'express';
import { getPopularHeadlinesFromAPI, getHeadlinesFromAPI } from '../controllers/getDataAPI.js';

const router = Router();

router.get('/headlines', getHeadlinesFromAPI)
router.get('/popularnews', getPopularHeadlinesFromAPI);

export default router;