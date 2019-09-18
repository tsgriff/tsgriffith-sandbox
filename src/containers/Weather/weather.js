import React, { Component } from 'react';
import DisplayWeather from './display-weather';
import ForecastOverview from './forecast-overview';

class Weather extends Component {
  constructor(props) {
    super(props);
      this.state = {
        city: '',
        forecast: '',
        currentWeather: '',
        userLatitude: '',
        userLongitude: ''
      }
      this.handleCity = this.handleCity.bind(this);
      this.handleSearch = this.handleSearch.bind(this);
      this.getLocation = this.getLocation.bind(this);
    }

    getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.setState({
            userLatitude: position.coords.latitude,
            userLongitude: position.coords.longitude 
          })
          this.handleUserLocation();
        });
      } else {
        alert("Geolocation is not supported by this browser.");
      }
    }

    handleCity(event) {
      this.setState({
        city: event.target.value
      })
    }

    handleUserLocation() {
      // Current weather //
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.userLatitude}&lon=${this.state.userLongitude}&units=imperial&APPID=${process.env.openWeatherApiKey}`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            currentWeather: result
          })
        },
        (error) => {
          console.log(error)
        }
      )
      // Forecast //
      fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${this.state.userLatitude}&lon=${this.state.userLongitude}&units=imperial&APPID=${process.env.openWeatherApiKey}`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            forecast: result
          })
        },
        (error) => {
          console.log(error)
        }
      )
    }

    handleSearch() {
      // Current weather //
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city},us&units=imperial&APPID=${process.env.openWeatherApiKey}`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            currentWeather: result
          })
        },
        (error) => {
          console.log(error)
        }
      )
      // Forecast //
      fetch(`https://api.openweathermap.org/data/2.5/forecast/?q=${this.state.city},us&units=imperial&APPID=87684fe1b247f45b9f9f87beaacd0d87`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            forecast: result
          })
        },
        (error) => {
          console.log(error)
        }
      )
      document.querySelector('.city-search').value = ""
    }

  render() {
    return (
      <div className="App">
        {this.props.loading ?
          <div className="loading-contain">
            <div className="trinity-rings-spinner">
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
          </div>
            :
            <div>
              <h1 className="App-title">Weather</h1>
              <button onClick={this.getLocation}>Get current location</button>
              <p>or</p>
              <input className="city-search" onChange={this.handleCity} placeholder="Enter zipcode or US city"></input>
              <button onClick={this.handleSearch}>Search</button>
              {
                this.state.currentWeather ?
                <DisplayWeather {...this.state} />
                :
                null
              }
              {
                this.state.forecast ?
                <ForecastOverview {...this.state} />
                :
                null
              }
              
            </div>
        }
      </div>
    );
  }
}

export default Weather;