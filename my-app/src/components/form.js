import React from 'react';

class Form extends React.Component {
    render() {
      return (
            <form onSubmit={this.props.getWeather}>
                <input type='text' name='Lon' placeholder='Lon....'/>
                <input type='text' name='Lat' placeholder='Lat....' />
                <button>Get Weather</button>
            </form>
        );
    }
};

export default Form;