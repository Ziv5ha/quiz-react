import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/quiz'>Take Quiz</Link>
        </li>
        <li>
          <Link to='/createQuiz'>Create Quiz</Link>
        </li>
      </ul>
    </nav>
  );
}
