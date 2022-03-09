import React, { useState } from 'react';
import { useQuestionArrContext } from './QuestionContext';

export default function Question({
  // questionArr,
  // setQuestionArr,
  index,
}: {
  // questionArr: (Question | LocationImg)[];
  // setQuestionArr: React.Dispatch<
  // React.SetStateAction<(Question | LocationImg)[]>
  // >;
  index: number;
}) {
  const [localQuestion, setLocalQuestion] = useState<Question>({
    question: '',
    rightAnswer: '',
    wrongAnswers: ['', '', ''],
  });
  const { setQuestionArr, questionArr } = useQuestionArrContext();

  /**
   * updates local state of the question.
   *
   * @param {'question' | 'rightAnswer' | 0 | 1 | 2} part
   *    if given 0 | 1 | 2 uses it as index to update wrongAnswers in the question state
   *    if given 'question' | 'rightAnswer' updates that part of the question state
   * @param {string} newValue user input value
   */
  const updateLocalQuestion = (
    part: 'question' | 'rightAnswer' | 0 | 1 | 2,
    newValue: string
  ) => {
    const temp = JSON.parse(JSON.stringify(localQuestion));
    if (typeof part === 'number') {
      temp.wrongAnswers[part] = newValue;
    } else {
      temp[part] = newValue;
    }
    setLocalQuestion(temp);
  };

  // onChange Handlers
  const changeQuestion = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    updateLocalQuestion('question', e.target.value);
  };
  const changeRightAnswer = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    updateLocalQuestion('rightAnswer', e.target.value);
  };
  const changeWrongAnswer0 = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    updateLocalQuestion(0, e.target.value);
  };
  const changeWrongAnswer1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    updateLocalQuestion(1, e.target.value);
  };
  const changeWrongAnswer2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    updateLocalQuestion(2, e.target.value);
  };

  // onBlur Handler - updates the "higher" questions state
  const updateGlobalQuestion = (
    e: React.FocusEvent<HTMLInputElement, Element>
  ) => {
    e.preventDefault();
    const tempQuestionArr = [...questionArr];
    tempQuestionArr[index] = localQuestion;
    setQuestionArr(tempQuestionArr);
  };

  return (
    <div>
      <h4>Question #{index + 1}:</h4>
      Question:
      <br />
      <input
        type='text'
        value={localQuestion.question}
        onChange={changeQuestion}
        onBlur={updateGlobalQuestion}
        required
      />
      <br />
      Right Answer:
      <br />
      <input
        type='text'
        value={localQuestion.rightAnswer}
        onChange={changeRightAnswer}
        onBlur={updateGlobalQuestion}
        required
      />
      <br />
      Wrong Answers:
      <br />
      <input
        type='text'
        value={localQuestion.wrongAnswers[0]}
        onChange={changeWrongAnswer0}
        onBlur={updateGlobalQuestion}
        required
      />
      <br />
      <input
        type='text'
        value={localQuestion.wrongAnswers[1]}
        onChange={changeWrongAnswer1}
        onBlur={updateGlobalQuestion}
        required
      />
      <br />
      <input
        type='text'
        value={localQuestion.wrongAnswers[2]}
        onChange={changeWrongAnswer2}
        onBlur={updateGlobalQuestion}
        required
      />
    </div>
  );
}
