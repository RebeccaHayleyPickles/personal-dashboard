import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

// components
import Header from './components/headerComponent/header';
import HomePage from './components/pages/homePage';
import Weather from './components/pages/weather';
import News from './components/pages/news';
import Sport from './components/pages/sport';
import PhotoGallery from './components/pages/photoGallery';
import TaskList from './components/pages/taskList';
import FavouriteWarmer from './components/pages/favouriteWarmer';

// includes
import './Assets/css/default.min.css';

function App() {
  return (

    <Router>
    <div className="App">

      <Header />
      <Route exact path='/' component={HomePage} />
      <Route exact path='/Weather' component={Weather} />
      <Route exact path='/News' component={News} />
      <Route exact path='/Sport' component={Sport} />
      <Route exact path='/PhotoGallery' component={PhotoGallery} />
      <Route exact path='/TaskList' component={TaskList} />
      <Route exact path='/FavouriteWarmer' component={FavouriteWarmer} />

    </div>
    </Router>
  );
}

export default App;
