import { Router } from 'express';
import { getPopularHeadlinesFromAPI, getHeadlinesFromAPI, getLatestNewsFromAPI, getEntertainmentNewsFromAPI } from '../controllers/getDataAPI.js';

const router = Router();

router.get('/headlines', getHeadlinesFromAPI)
router.get('/popularnews', getPopularHeadlinesFromAPI);
router.get('/latestnews', getLatestNewsFromAPI);
router.get('/entertainmentnews', getEntertainmentNewsFromAPI);

export default router;