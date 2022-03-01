import React from 'react';
import { useQuestionIndexContext } from './IndexContrext';
import '../styles/answer.css';

export default function RightAnswer({ answer }: { answer: string }) {
  const { setIndex } = useQuestionIndexContext();
  return (
    <button
      className='answer'
      onClick={() => setIndex((prevState) => ++prevState)}
    >
      {answer}
    </button>
  );
}
