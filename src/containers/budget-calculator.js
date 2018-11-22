import React, { Component } from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
//

class BudgetCalculator extends Component {

  constructor(props) {
    super(props);
    this.state = {
      incomeAmount: '',
      needs: '',
      wants: '',
      financial: '',
      renderChartSection: false
    }
    this.handleIncomeInput = this.handleIncomeInput.bind(this);
    this.renderIncomeInfo = this.renderIncomeInfo.bind(this);
  }

  handleIncomeInput(event) {
    event.preventDefault();
    this.setState({
      incomeAmount: event.target.value
    })
  }

  renderIncomeInfo(event) {

    if (this.state.incomeAmount) {
      this.setState({
        needs: this.state.incomeAmount * 0.5,
        wants: this.state.incomeAmount * 0.3,
        financial: this.state.incomeAmount * 0.2,
        renderChartSection: true
      })
    }

   }

  render() {

    const formatMoney = (number) => {
      return number.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }

    const data = [{ name: 'Living Expenses', value: this.state.needs }, { name: 'Financial Goals', value: this.state.financial }, { name: 'Flexible Spending', value: this.state.wants }]

    const COLORS = ['#0088FE', '#00C49F', '#FF8C00'];

    return (
       <section id="budget-calculator-section" className="content-wrapper">
         <div className="page-wrapper">
         <div className="section-content">
         <p className="section-title">Budget Calculator</p>
         <div className="budget-input-contain">
           <input
             id="number"
             label="Income Amount"
             value={this.state.incomeAmount}
             onChange={this.handleIncomeInput}
             type="number"
           />
           <button onClick={this.renderIncomeInfo}>Submit</button>
         </div>
         {this.state.renderChartSection ?
           <div id="budget-chart-container">
             <div className="graph-desktop">
               <PieChart width={700} height={300}>
                 <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} labelLine={false}
                   label={(data) => `${data.name}: ${formatMoney(data.value)}`}>
                   {
                     data.map((entry, index) => <Cell key="" fill={COLORS[index % COLORS.length]} />)
                   }
                 </Pie>
               </PieChart>
             </div>
             <div className="graph-mobile">
               <PieChart width={320} height={250}>
                 <Pie data={data} fontSize={12} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={60} labelLine={false}
                   label={(data) => `${formatMoney(data.value)}`}>
                   {
                     data.map((entry, index) => <Cell key="" fill={COLORS[index % COLORS.length]} />)
                   }
                 </Pie>
               </PieChart>
             </div>
           </div>
           :
           <div></div>
         }
         </div>
       </div>
       </section>
    )
  }
}


export default BudgetCalculator;