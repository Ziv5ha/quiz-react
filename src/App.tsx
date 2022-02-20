import React, { useState } from 'react';
import { QuestionIndexContext } from './components/IndexContrext';
import Location from './components/Location';
import Questions from './components/Questions';
import json from './questions.json';
import './styles/app.css';

function App() {
  const [index, setIndex] = useState(0);
  const elemsArr = json.map((item) =>
    isLocationImg(item as Question | LocationImg) ? (
      <QuestionIndexContext.Provider value={{ index, setIndex }}>
        <Location img={item as LocationImg} />
      </QuestionIndexContext.Provider>
    ) : (
      <QuestionIndexContext.Provider value={{ index, setIndex }}>
        <Questions question={item as Question} />
      </QuestionIndexContext.Provider>
    )
  );
  return (index || index === 0) && index < elemsArr.length ? (
    elemsArr[index]
  ) : (
    <div>you won</div>
  );
}

export default App;

const isLocationImg = (item: Question | LocationImg): item is LocationImg => {
  return (item as LocationImg).img !== undefined;
};
