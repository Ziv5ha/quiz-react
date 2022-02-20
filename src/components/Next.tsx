import React, { useState } from 'react';
import { useQuestionIndexContext } from './IndexContrext';

export default function Next() {
  const { setIndex } = useQuestionIndexContext();
  const [confirm, setConfirm] = useState(false);

  return confirm ? (
    <div className='confirm-div'>
      Are you sure you cant to continue?
      <button onClick={() => setIndex((prevState) => ++prevState)}>Yes</button>
      <button onClick={() => setConfirm(false)}>No</button>
    </div>
  ) : (
    <button className='next' onClick={() => setConfirm(true)}>
      Next
    </button>
  );
}
