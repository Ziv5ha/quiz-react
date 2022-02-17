import React from 'react';
import jumble from '../helpers/randomizeOrder';
import RightAnswer from './RightAnswer';
import WrongAnswer from './WrongAnswer';

export default function Questions({ question }: { question: Question }) {
  const rightAnswer = (
    <RightAnswer key={question.rightAnswer} answer={question.rightAnswer} />
  );
  const wrongAswers = question.wrongAnswers.map((answer) => (
    <WrongAnswer key={answer} answer={answer} />
  ));
  return (
    <div>
      <h3>{question.question}</h3>
      <div>{jumble([rightAnswer, ...wrongAswers])}</div>
    </div>
  );
}
