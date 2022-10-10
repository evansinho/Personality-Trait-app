import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Landing from './components/Landing';
import Quiz from './components/Quiz';

function App() {
  return (
    <Router>
    <div className="container">
      <div className="nav">
        <h2>Personality Test</h2>
      </div>
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/quiz" element={<Quiz />}/>
        <Route path="/result"/>
      </Routes>
    </div>
  </Router>
  );
}

export default App;
