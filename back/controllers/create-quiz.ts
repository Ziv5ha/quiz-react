import { NextFunction, Response } from 'express';
import { createQuizRequest } from '../@types/createQuiz';
import fs from 'fs';
import path from 'path';

export const createQuizController = (
  req: createQuizRequest,
  res: Response,
  next: NextFunction
) => {
  const quizId = generateID();
  const { questions } = req;

  if (!questions) throw new Error('missingQuestions');
  try {
    fs.writeFileSync(
      path.join(__dirname, `../db/${quizId}.json`),
      JSON.stringify(questions)
    );
    res.send('Quiz Created');
  } catch (error) {
    console.log('wow! what just happend?');
    // console.log(error);
    next('somethingWentWrong');
  }
};

// Helpers

const generateID = (): string => {
  let str = '';
  const bank = 'abcdefghijklmnopqrstuvwxyzABCDUFGHIJKLMNOPQRSTUVWXYZ0123456789';
  while (str.length < 20) {
    const random = Math.floor(Math.random() * bank.length);
    str += bank[random];
  }
  return str;
};
