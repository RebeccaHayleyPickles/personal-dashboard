import React from 'react';
import {
    Link
} from 'react-router-dom';

const weather_API_KEY = 'd0a10211ea3d36b0a6423a104782130e';

class WeatherWidget extends React.Component {
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
            <div className='box'> 
                <h1>
                    <Link to='/Weather'>Weather</Link>
                </h1>
                <p>{this.state.city}, {this.state.country}.</p>
                <p>{this.state.temperature} K</p>
                <p>{this.state.description}</p>
            </div>
        );
    }
};

export default WeatherWidget;