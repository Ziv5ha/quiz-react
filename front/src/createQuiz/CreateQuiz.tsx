import axios from 'axios';
import React, { useState } from 'react';
import Navbar from '../global-components/Navbar';
import LocationImg from './components/LocationImg';
import Question from './components/Question';
import { QuestionArrContext } from './components/QuestionContext';

export default function CreateQuiz() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [questionArr, setQuestionArr] = useState<(Question | LocationImg)[]>([
    { question: '', rightAnswer: '', wrongAnswers: ['', '', ''] },
  ]);
  const [questionsElems, setQuestionsElems] = useState<JSX.Element[]>([
    <Question key={`question#0}`} index={questionIndex} />,
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
        index={questionIndex + 1}
      />,
    ]);
  };
  const addLocationImg = () => {
    setQuestionIndex((prev) => ++prev);
    setQuestionArr((prev) => [...prev, { img: '', alt: '', hint: '' }]);
    setQuestionsElems((prev) => [
      ...prev,
      <LocationImg
        key={`question#${questionArr.length}`}
        index={questionIndex + 1}
      />,
    ]);
  };

  const [quizName, setQuizName] = useState('');
  const changeQuizName = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setQuizName(e.target.value);
  };
  return (
    <QuestionArrContext.Provider value={{ questionArr, setQuestionArr }}>
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
      <button onClick={addLocationImg}>Add location image+</button>
    </QuestionArrContext.Provider>
  );
}
