import React, { useContext } from 'react';

export const QuestionArrContext = React.createContext<QuestionsContext>({
  questionArr: [{ question: '', rightAnswer: '', wrongAnswers: ['', '', ''] }],
  setQuestionArr: () => {},
});

export const useQuestionArrContext = () => useContext(QuestionArrContext);
