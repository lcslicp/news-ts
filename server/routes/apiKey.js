import { Router } from 'express';
import { getAPIKey } from '../controllers/getAPIKey.js';

const router = Router();

router.get('/key', getAPIKey);

export default router;