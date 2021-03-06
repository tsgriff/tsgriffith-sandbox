import React, { Component } from 'react'
import BudgetCalculator from './budget-calculator'
import InvestmentPortal from './investment-portal';

class Finance extends Component {
  render() {
    return (
      <section style={{padding: '50px 0'}}>
        <BudgetCalculator />
        <InvestmentPortal />
      </section>
    )
  }
}

export default Finance;