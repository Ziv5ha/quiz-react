import React, { useState } from 'react';
import { useQuestionArrContext } from './QuestionContext';

export default function LocationImg({ index }: { index: number }) {
  const [LocationImg, setLocationImg] = useState<LocationImg>({
    img: '',
    alt: '',
    hint: '',
  });
  const { setQuestionArr, questionArr } = useQuestionArrContext();

  /**
   * updates local state of the LocationImg.
   *
   * @param {'img' | 'alt' | 'hint'} part updates that part of the LocationImg state
   * @param {string} newValue user input value
   */
  const updateLocalLocationImg = (
    part: 'img' | 'alt' | 'hint',
    newValue: string
  ) => {
    const temp = JSON.parse(JSON.stringify(LocationImg));
    temp[part] = newValue;
    setLocationImg(temp);
  };

  // onChange Handlers
  const changeImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    updateLocalLocationImg('img', e.target.value);
  };
  const changeAlt = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    updateLocalLocationImg('alt', e.target.value);
  };
  const changeHint = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    updateLocalLocationImg('hint', e.target.value);
  };

  // onBlur Handler - updates the "higher" questions state
  const updateGlobalQuestion = (
    e: React.FocusEvent<HTMLInputElement, Element>
  ) => {
    e.preventDefault();
    const tempQuestionArr = [...questionArr];
    tempQuestionArr[index] = LocationImg;
    setQuestionArr(tempQuestionArr);
  };

  return (
    <div>
      <h4>Question #{index + 1}:</h4>
      Image Url:
      <br />
      <input
        type='text'
        value={LocationImg.img}
        onChange={changeImg}
        onBlur={updateGlobalQuestion}
        required
      />
      <br />
      <img src={LocationImg.img} alt='Ender Image Url'></img>
      <br />
      Image Description:
      <br />
      <input
        type='text'
        value={LocationImg.alt}
        onChange={changeAlt}
        onBlur={updateGlobalQuestion}
        required
      />
      <br />
      Hint (Optional):
      <br />
      <input
        type='text'
        value={LocationImg.hint}
        onChange={changeHint}
        onBlur={updateGlobalQuestion}
      />
    </div>
  );
}
