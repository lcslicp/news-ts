import { Router } from 'express';
import { getPopularHeadlinesFromAPI, getHeadlinesFromAPI, getLatestNewsFromAPI } from '../controllers/getDataAPI.js';

const router = Router();

router.get('/headlines', getHeadlinesFromAPI)
router.get('/popularnews', getPopularHeadlinesFromAPI);
router.get('/latestnews', getLatestNewsFromAPI);

export default router;