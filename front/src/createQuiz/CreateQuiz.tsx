import axios from 'axios';
import React, { useState } from 'react';
import Navbar from '../global-components/Navbar';
import Question from './components/Question';

export default function CreateQuiz() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [questionArr, setQuestionArr] = useState<Question[]>([
    { question: '', rightAnswer: '', wrongAnswers: ['', '', ''] },
  ]);
  const [questionsElems, setQuestionsElems] = useState<JSX.Element[]>([
    <Question
      key={`question#0}`}
      questionArr={questionArr}
      setQuestionArr={setQuestionArr}
      index={questionIndex}
    />,
  ]);

  const addQuestion = () => {
    setQuestionIndex((prev) => ++prev);
    setQuestionArr((prev) => [
      ...prev,
      { question: '', rightAnswer: '', wrongAnswers: ['', '', ''] },
    ]);
    setQuestionsElems((prev) => [
      ...prev,
      <Question
        key={`question#${questionArr.length}`}
        questionArr={questionArr}
        setQuestionArr={setQuestionArr}
        index={questionIndex + 1}
      />,
    ]);
  };
  //   const createQuizFunc = (e) => {
  //     e.preventDefault();
  //     console.log(e);
  //   };
  const [quizName, setQuizName] = useState('');
  const changeQuizName = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setQuizName(e.target.value);
  };
  return (
    <div>
      <Navbar />
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          try {
            await axios.post('http://localhost:8080/createQuiz', {
              quizName: quizName,
              questions: questionArr,
            });
          } catch (error) {
            console.log(error);
          }
        }}
      >
        <h3>
          Enter Quiz Name:{' '}
          <input type='text' value={quizName} onChange={changeQuizName}></input>
        </h3>
        {questionsElems}
        <button type='submit'>Submit</button>
      </form>
      <button onClick={addQuestion}>Add question+</button>
    </div>
  );
}
