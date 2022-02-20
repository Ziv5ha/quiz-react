import React, { useState } from 'react';

export default function Hint({ hint }: { hint: string }) {
  const [shown, setShown] = useState(false);
  return shown ? (
    <div>{hint}</div>
  ) : (
    <button
      className='hint'
      onClick={() => {
        setShown(true);
      }}
    >
      Show Hint
    </button>
  );
}
