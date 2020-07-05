import React from 'react';

import Header from '../headerComponent/header';
import Form from '../form';

const weather_API_KEY = 'd0a10211ea3d36b0a6423a104782130e';

class Weather extends React.Component {
  getWeather = async (e) => {
    e.preventDefault();
    const lon = e.target.elements.Lon.value;
    const lat = e.target.elements.Lat.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weather_API_KEY}`);
    const data = await api_call.json();
    console.log(data);
  }
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <Form getWeather={this.getWeather} />
      </div>
    );
  }
};

export default Weather;