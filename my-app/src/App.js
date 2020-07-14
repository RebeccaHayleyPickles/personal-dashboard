import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "./utils/store";

// includes
import './Assets/css/default.min.css';

// components
import Login from './components/loginComponents/login';
import Register from './components/loginComponents/register';
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
      <Provider store={store}>
        <Router>  
              <Route exact path='/' component={Login} /> 
              <Route exact path='/Register' component={Register} /> 
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
      </Provider>
    );
  }
};


export default App;
