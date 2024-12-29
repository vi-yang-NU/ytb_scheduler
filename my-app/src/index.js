import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// I wanted to do something with the overflow afforance, but it's not worth the effort first pass around 
// would be cute to have a character limit the overflow/ i'm reminded of how snapchat achieves it in the mobile
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
