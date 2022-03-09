import { Router } from 'express';
import { createQuizController } from '../controllers/create-quiz';
import verifyCreateQuiz from '../middlewares/verify-createQuiz';
const router = Router();

router.post('/', verifyCreateQuiz, createQuizController);

export default router;
