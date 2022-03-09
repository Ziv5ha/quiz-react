import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateQuiz from './createQuiz/CreateQuiz';
import Home from './Home';
import Quiz from './takeQuiz/Quiz';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/quiz' element={<Quiz />} />
        <Route path='/createQuiz' element={<CreateQuiz />} />
      </Routes>
    </Router>
  );
}
