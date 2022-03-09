import React, { useContext } from 'react';

export const QuestionIndexContext = React.createContext<IndexContext>({
  index: 0,
  setIndex: () => {},
});

export const useQuestionIndexContext = () => useContext(QuestionIndexContext);
