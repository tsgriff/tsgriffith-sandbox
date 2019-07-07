import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import BudgetCalculator from './containers/budget-calculator';
import InvestmentPortal from './containers/investment-portal';

import Footer from './components/Footer';
import Nav from './components/Nav';

ReactDOM.render(
    <BrowserRouter>
      <div>
          <Route component={ Nav }/>
          <Switch>
            <Route exact path="/" component={ BudgetCalculator } />
            <Route exact path="/investments" component={ InvestmentPortal } />
          </Switch>
            <Route component={ Footer }/>
      </div>
    </BrowserRouter>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
