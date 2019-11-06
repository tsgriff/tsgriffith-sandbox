import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import Finance from './containers/Finance/finance';
import ToDo from './containers/ToDo/to-do';
import Weather from './containers/Weather/weather';
import SentimentAnalysis from './containers/SentimentAnalysis/sentiment-analysis';

import Footer from './components/Footer';
import Nav from './components/Nav';

ReactDOM.render(
    <BrowserRouter>
      <div>
        <Route component={ Nav }/>
          <Switch>
            <Route exact path="/" component={ Finance } />
            <Route exact path="/to-do" component={ ToDo } />
            <Route exact path="/weather" component={ Weather } />
            <Route exact path="/sentiment-analysis" component={ SentimentAnalysis } />
          </Switch>
        <Route component={ Footer }/>
      </div>
    </BrowserRouter>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
