import React, { Component } from 'react';
import Moment from 'react-moment';

class ForecastOverview extends Component {

  componentDidMount() {
    console.log(this.props.forecast)
  }

  render() {
    return (
      <div className="forecast-overview">
        <h4>5 Day Forecast</h4>
        {
          this.props.forecast.list.map((day, i) => (
            <div key={i}>
              <Moment format="dddd, MM/DD, h:mm a">{day.dt_txt}</Moment>
              {Math.round(day.main.temp)}&#x2109;
              {day.weather[0].main}
            </div>
          ))
        }
      </div>
    );
  }
}

export default ForecastOverview;