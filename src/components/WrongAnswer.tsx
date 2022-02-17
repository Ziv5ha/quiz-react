import React from 'react';
import '../styles/answer.css';

export default function WrongAnswer({ answer }: { answer: string }) {
  return <button className='answer'>{answer}</button>;
}
