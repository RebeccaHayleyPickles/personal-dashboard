import React from 'react';
import Header from '../headerComponent/header';
import WeatherWidget from '../widgets/weatherWidget';

const weather_API_KEY = 'd0a10211ea3d36b0a6423a104782130e';

class Weather extends React.Component {
  state = {
    city: undefined,
    country: undefined,
    temperature: undefined,
    Longitude: undefined,
    Latitude: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  componentDidMount = async () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            this.getWeather(position.coords.latitude, position.coords.longitude);
        })
    }   
  }
  getWeather = async (latitude, longitude) => {
    const lat = latitude;
    const lon = longitude;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weather_API_KEY}`);
    const data = await api_call.json();
    console.log(data);
    this.setState({
        city: data.name,
        country: data.sys.country,
        temperature: data.main.temp,
        Longitude: data.coord.lon,
        Latitude: data.coord.lat,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
    });
  }
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <h1> Weather </h1>
        { this.state.city && this.state.country && <p> Based on your geolocation, you are currently in {this.state.city} , {this.state.country} .</p> }
        { this.state.Latitude && this.state.Longitude && <p> Your coordinates are: Latitude ({this.state.Latitude}), Longitude ({this.state.Longitude})</p> }
        <h2>The weather at this location</h2>
        { this.state.temperature && <p>Temperature: {this.state.temperature}</p> }
        { this.state.humidity && <p>Humidity: {this.state.humidity}</p> }
        { this.state.description && <p>Conditions: {this.state.description}</p> }
        <p>{this.state.error}</p>
        <WeatherWidget temperature={this.state.temperature} />
      </div>
    );
  }
};

export default Weather;