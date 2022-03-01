import React, { useState } from 'react';
import { useQuestionIndexContext } from './IndexContrext';
import '../styles/next.css';

export default function Next() {
  const { setIndex } = useQuestionIndexContext();
  const [confirm, setConfirm] = useState(false);

  return confirm ? (
    <div className='confirm-div'>
      Are you sure you want to continue?
      <div className='confirm-btn-container'>
        <button onClick={() => setIndex((prevState) => ++prevState)}>
          Yes
        </button>
        <button onClick={() => setConfirm(false)}>No</button>
      </div>
    </div>
  ) : (
    <button className='next' onClick={() => setConfirm(true)}>
      Next
    </button>
  );
}
