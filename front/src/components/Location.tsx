import React from 'react';
import Hint from './Hint';
import Next from './Next';
import '../styles/img.css';

export default function Location({ img }: { img: LocationImg }) {
  return (
    <div className='img-container'>
      <img src={img.img} alt={img.alt} />
      {img.hint ? <Hint hint={img.hint} /> : ''}
      <Next />
    </div>
  );
}
