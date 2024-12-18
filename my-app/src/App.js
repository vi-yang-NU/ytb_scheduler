import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dash_page'; // Ensure this matches your file structure

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-blue-900">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
