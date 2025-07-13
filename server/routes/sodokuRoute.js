import { Router } from 'express';
import { checkAnswer, getSodokuData } from '../controllers/sodokuController.js';

const router = Router();

router.get('/sodokupuzzle', getSodokuData)
router.post('/check-solution', checkAnswer)

export default router;