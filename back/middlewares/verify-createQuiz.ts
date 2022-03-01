import { NextFunction, Request, Response } from 'express';
import { createQuizRequest, Question } from '../@types/createQuiz';

const verifyCreateQuiz = (req: Request, _res: Response, next: NextFunction) => {
  if (!req.body.questions) next('missigParams');
  const { questions } = req.body;
  if (!validateQuestion(questions, next)) {
    next('missingParams');
  }
  (req as createQuizRequest).questions = questions;
  next();
};

export default verifyCreateQuiz;

//  Helpers

const validateQuestion = (questions: any[], next: NextFunction): boolean => {
  questions.forEach((questionObj) => {
    if (!ValidQuestionType(questionObj)) return false;

    const { question, rightAnswer, wrongAnswers } = questionObj;
    const ValidQuestion = verifyLength(question, 'question', next);
    const ValidCorrect = verifyLength(rightAnswer, 'rightAnswer', next);
    const ValidWrong = wrongAnswers.every((answer) =>
      verifyLength(answer, 'wrongAnswer', next)
    );
    if (!(ValidQuestion && ValidCorrect && ValidWrong)) return false;
  });
  return true;
};

const verifyLength = (str: string, part: string, next: NextFunction) => {
  if (str.length === 0) next(`${part}Missing`);
  if (str.length < 100) return true;
  next(`${part}TooLong`);
  return false;
};

const ValidQuestionType = (question: any): question is Question => {
  if (
    typeof question.question === 'string' &&
    typeof question.rightAnswer === 'string' &&
    typeof question.wrongAnswers === 'object' &&
    question.wrongAnswers.length === 3
  ) {
    return true;
  }
  return false;
};
