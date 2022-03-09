import { Request } from 'express';

declare interface createQuizRequest extends Request {
  questions?: {
    qustion: string;
    rightAnswer: string;
    wrongAnswers: [string, string, string];
  }[];
}
declare interface Question {
  question: string;
  rightAnswer: string;
  wrongAnswers: [string, string, string];
}
declare interface LocationImg {
  img: string;
  alt: string;
  hint?: string;
}
