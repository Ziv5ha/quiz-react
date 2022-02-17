import React, { useState } from 'react';
import { QuestionIndexContext } from './components/IndexContrext';
import Questions from './components/Questions';
import questions from './questions.json';
import './styles/app.css';

function App() {
  const [index, setIndex] = useState(0);
  const questionsElems = questions.map((question) => (
    <QuestionIndexContext.Provider value={{ index, setIndex }}>
      <Questions question={question as Question} />
    </QuestionIndexContext.Provider>
  ));
  return (index || index === 0) && index < questionsElems.length ? (
    questionsElems[index]
  ) : (
    <div>you won</div>
  );
}

export default App;
