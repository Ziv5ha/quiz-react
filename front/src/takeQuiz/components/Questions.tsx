import React from 'react';
import jumble from '../helpers/randomizeOrder';
import RightAnswer from './RightAnswer';
import WrongAnswer from './WrongAnswer';
import '../styles/questions.css';

export default function Questions({ question }: { question: Question }) {
  const rightAnswer = (
    <RightAnswer key={question.rightAnswer} answer={question.rightAnswer} />
  );
  const wrongAswers = question.wrongAnswers.map((answer) => (
    <WrongAnswer key={answer} answer={answer} />
  ));
  return (
    <div className='qustion'>
      <h3>{question.question}</h3>
      <div className='answers-container'>
        {jumble([rightAnswer, ...wrongAswers])}
      </div>
    </div>
  );
}
