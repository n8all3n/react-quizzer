import React from 'react';

import './App.css';
import Quiz from './components/Quiz';
function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top" id="mainNav">
          <a className="navbar-brand" href="/">react-quizzer</a>
      </nav>
      <main role="main" className="container">
        <div className="starter-template">
          <Quiz />
        </div>
      </main>
    </div>
  );
}

export default App;
