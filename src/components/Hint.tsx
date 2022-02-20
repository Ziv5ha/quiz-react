import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import '../styles/hint.css';

export default function Hint({ hint }: { hint: string }) {
  const [shown, setShown] = useState(false);
  return shown ? (
    <div className='hint'>{hint}</div>
  ) : (
    <button
      className='hint-btn'
      onClick={() => {
        setShown(true);
      }}
    >
      <i className='fa-solid fa-lightbulb'></i>
    </button>
  );
}
