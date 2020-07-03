import React from 'react';

// components
import Header from './components/headerComponent/header';
import HomePage from './components/pages/homePage';

// includes
import './Assets/css/default.min.css';

function App() {
  return (
    <div className="App">
      
      <Header />

      <HomePage />

    </div>
  );
}

export default App;
