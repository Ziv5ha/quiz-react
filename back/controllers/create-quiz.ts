import { NextFunction, Response } from 'express';
import { createQuizRequest } from '../@types/createQuiz';
import fs from 'fs';
import path from 'path';

export const createQuizController = (
  req: createQuizRequest,
  res: Response,
  next: NextFunction
) => {
  if (!req.body.quizName) {
    next('missingQuizName');
    return;
  }
  const { quizName } = req.body;
  const { questions } = req;

  if (!questions) throw new Error('missingQuestions');
  try {
    fs.writeFileSync(
      path.join(__dirname, `../db/${quizName}.json`),
      JSON.stringify(questions)
    );
    res.send('Quiz Created');
  } catch (error) {
    console.log('wow! what just happend?');
    // console.log(error);
    next('somethingWentWrong');
  }
};
