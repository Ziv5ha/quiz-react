import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CreateQuiz from './createQuiz/CreateQuiz';
import Home from './Home';
import Quiz from './takeQuiz/Quiz';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/quiz'>About</Link>
            </li>
            <li>
              <Link to='/createQuiz'>Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
        <Routes>
          <Route path='/quiz'>
            <Quiz />
          </Route>
          <Route path='/createQuiz'>
            <CreateQuiz />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
