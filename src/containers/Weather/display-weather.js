import React, { Component } from 'react';
import WeatherAnimation from './weather-animation';

class DisplayWeather extends Component {
  
  render() {
    
    return (
      <div className="display-weather">
        {this.props.currentWeather.length !== 0 ?
          <div>
            <h3>{this.props.currentWeather.name}</h3>
            <div className="current-weather-wrapper">
              <h4>Current Weather</h4>
              <WeatherAnimation {...this.props} />
            </div>
            <div className="weather-description-wrapper">
              <div className="col">
                <h5>Conditions</h5>
                {this.props.currentWeather.weather[0].main}
                {
                  this.props.currentWeather.weather.map((weather, i) => (
                    <div key={i}>
                      {weather.description}
                    </div>
                  ))
                }
              </div>
              <div className="col">
              <h5>Temperature</h5>
              {Math.round(this.props.currentWeather.main.temp)}&#x2109;
              </div>
              <div className="col">
            <h5>Wind</h5>
              <p>{Math.round(this.props.currentWeather.wind.speed)} mph</p>
              </div>
            </div>
          </div>
          :
          <div>
            {}
          </div>
        }
      </div>
    );
  }
}

export default DisplayWeather;