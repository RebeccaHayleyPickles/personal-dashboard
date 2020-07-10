import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

// includes
import './Assets/css/default.min.css';

// components
import LoginPage from './components/pages/loginPage';
import HomePage from './components/pages/homePage';
import Weather from './components/pages/weather';
import News from './components/pages/news';
import Sport from './components/pages/sport';
import PhotoGallery from './components/pages/photoGallery';
import TaskList from './components/pages/taskList';
import FavouriteWarmer from './components/pages/favouriteWarmer';
import WeatherWidget from './components/widgets/weatherWidget';
import Newnews from './components/pages/newnews';

class App extends React.Component {
  render () {
    return (
      <Router>  
            <Route exact path='/' component={LoginPage} /> 
            <Route exact path='/HomePage' component={HomePage} />
            <Route exact path='/Weather' component={Weather} />
            <Route exact path='/Newnews' component={Newnews} />
            <Route exact path='/News' component={News} />
            <Route exact path='/Sport' component={Sport} />
            <Route exact path='/PhotoGallery' component={PhotoGallery} />
            <Route exact path='/TaskList' component={TaskList} />
            <Route exact path='/FavouriteWarmer' component={FavouriteWarmer} />
            <Route exact path='/WeatherWidget' component={WeatherWidget} />
      </Router>
    );
  }
};


export default App;
