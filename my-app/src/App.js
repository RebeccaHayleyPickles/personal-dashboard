import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

// components
import Header from './components/headerComponent/header';
import HomePage from './components/pages/homePage';
import Products from './components/pages/products';

// includes
import './Assets/css/default.min.css';

function App() {
  return (

    <Router>
    <div className="App">

      <Header />
      <Route exact path='/' component={HomePage} />
      <Route exact path='/Products' component={Products} />

    </div>
    </Router>
  );
}

export default App;
