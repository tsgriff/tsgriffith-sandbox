import React, { Component } from 'react';
import ReactAnimatedWeather from 'react-animated-weather';

// React Animated Weather props //

// icon: Takes a string to display the corresponding icon out of the following

// CLEAR_DAY
// CLEAR_NIGHT
// PARTLY_CLOUDY_DAY
// PARTLY_CLOUDY_NIGHT
// CLOUDY
// RAIN
// SLEET
// SNOW
// WIND
// FOG

// color: Pass a color value or hex code to color the weather component, if not passed, by default black is picked

// size: Pass a number to size the weather component in pixels, if not passed, by default 64 is set as the size

// animate: Pass a boolean value, if true (by default), the weather component will animate and if false, the weather component will remain static without any animation


class WeatherAnimation extends Component {

    componentDidMount() {
     let weatherArr = this.props.currentWeather.weather;
    
     for (let i = 0; i < weatherArr.length; i++) {
       if (weatherArr[i].description.includes("rain")) {
         if (document.querySelector('.current-weather-display') !== null) {
           document.querySelector('.current-weather-display').style.background = "#ece9e6"
         }
        }
        else if (weatherArr[i].description.includes("clear")) {
         if (document.querySelector('.current-weather-display') !== null) {            
          document.querySelector('.current-weather-display').style.background = "-webkit-linear-gradient(top, rgb(161,219,255) 0%,rgb(203,235,255) 53%,rgb(240,249,255) 100%)"
         }
        }
        else if (weatherArr[i].description.includes("clouds")) {
         if (document.querySelector('.current-weather-display') !== null) {
          document.querySelector('.current-weather-display').style.background = "#ece9e6" 
         }
        }
     }
    }

    componentDidUpdate() {
      let weatherArr = this.props.currentWeather.weather;
      
      for (let i = 0; i < weatherArr.length; i++) {
        if (weatherArr[i].description.includes("rain")) {
          if (document.querySelector('.current-weather-display') !== null) {
            document.querySelector('.current-weather-display').style.background = "#ece9e6"
          }
         }
         else if (weatherArr[i].description.includes("clear")) {
          if (document.querySelector('.current-weather-display') !== null) {            
           document.querySelector('.current-weather-display').style.background = "-webkit-linear-gradient(top, rgb(161,219,255) 0%,rgb(203,235,255) 53%,rgb(240,249,255) 100%)"
          }
         }
         else if (weatherArr[i].description.includes("clouds")) {
          if (document.querySelector('.current-weather-display') !== null) {
           document.querySelector('.current-weather-display').style.background = "#ece9e6" 
          }
         }
      }
     }

  render() {

    const defaults = {
      icon: 'CLEAR_DAY',
      color: 'goldenrod',
      size: 150,
      animate: true
    }

    const cloudy = {
      icon: 'CLOUDY',
      color: 'gray',
      size: 150,
      animate: true
    }

    const rain = {
      icon: 'RAIN',
      color: 'gray',
      size: 150,
      animate: true
    }

    const snow = {
      icon: 'SNOW',
      color: 'white',
      size: 150,
      animate: true
    }

    const renderWeather = (props) => {
      let weather = this.props.currentWeather.weather[0].main;
      console.log(weather)
      if (weather === "Clouds" || weather === "Mist") {
        return (
          <ReactAnimatedWeather className="weather-animation"
            icon={cloudy.icon}
            color={cloudy.color}
            size={cloudy.size}
            animate={cloudy.animate}
          />
        )
      }
      else if (weather === "Clear") {
        return (
          <ReactAnimatedWeather className="weather-animation"
            icon={defaults.icon}
            color={defaults.color}
            size={defaults.size}
            animate={defaults.animate}
          />
        )
      }
      else if (weather === "Rain" || weather === "Drizzle" ) {
        return (
          <ReactAnimatedWeather className="weather-animation"
            icon={rain.icon}
            color={rain.color}
            size={rain.size}
            animate={rain.animate}
          />
        )
      }
      else if (weather === "Snow") {
        return (
          <ReactAnimatedWeather className="weather-animation"
            icon={rain.icon}
            color={rain.color}
            size={rain.size}
            animate={rain.animate}
          />
        )
      }
      else {
        return (
          <p>Weather animation not available</p>
        )
      }      
    }

    return (
      
        <div className="current-weather-display">
          {renderWeather()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentWeather: state.currentWeatherReducer.currentWeather
  }
}

export default WeatherAnimation;
              