import React from 'react';
import Hint from './Hint';
import Next from './Next';

export default function Location({ img }: { img: LocationImg }) {
  return (
    <div>
      <img src={img.img} alt={img.alt} />
      {img.hint ? <Hint hint={img.hint} /> : ''}
      <Next />
    </div>
  );
}
