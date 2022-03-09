import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState('0px');

  const openMenu = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setOpen('300px');
  };
  const closeMenu = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setOpen('0px');
  };
  return (
    <nav>
      <button onClick={openMenu} className='nav-btn hamburger'>
        <i className='fa-solid fa-bars'></i>
      </button>
      <ul style={{ maxWidth: open, minWidth: open }} className='nav-menu'>
        <button onClick={closeMenu} className='nav-btn x'>
          <i className='fa-solid fa-xmark'></i>
        </button>
        {/* <li> */}
        <Link to='/'>Home</Link>
        {/* </li> */}
        {/* <li> */}
        <Link to='/quiz'>Take Quiz</Link>
        {/* </li> */}
        {/* <li> */}
        <Link to='/createQuiz'>Create Quiz</Link>
        {/* </li> */}
      </ul>
    </nav>
  );
}
