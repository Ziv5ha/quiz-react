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
  return (
    <div>
      <Navbar />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e);
          console.log(questionArr);
        }}
      >
        {questionsElems}
        <button type='submit'>Submit</button>
      </form>
      <button onClick={addQuestion}>Add question+</button>
    </div>
  );
}
