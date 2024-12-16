// src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import HomePage from './components/HomePage'; // HomePage component with content moved here
import PlayPage from './components/PlayPage'; // PlayPage component for the game page

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Routes for HomePage and PlayPage */}
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Render HomePage for "/" route */}
          <Route path="/play" element={<PlayPage />} /> Render PlayPage for "/play" route
        </Routes>
      </div>
    </Router>
  );
}

export default App;
