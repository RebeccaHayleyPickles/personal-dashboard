import React from 'react';
import {
    Link
} from 'react-router-dom';

class WeatherWidget extends React.Component {
    render() {
        return (
            <div className='box'> 
                <h1>
                    <Link to='/Weather'>Weather</Link>
                </h1>
                <p>
                    Temperature: {this.props.temperature}
                </p>
            </div>
        );
    }
};

export default WeatherWidget;