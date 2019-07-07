import React, { Component } from 'react'
import _ from 'lodash';

//
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


class Stocks extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    console.log(this.props)

    var yearObj = this.props
    var yearArr = []
    for (var prop in yearObj) {
      yearArr.push({ month: prop, Price: parseFloat(yearObj[prop]['4. close'], 10) });
    }
    var priceArr = yearArr.slice(0, 12).reverse();
    const percentChange = ((priceArr[priceArr.length - 1]['Price'] - priceArr[0]['Price']) / priceArr[0]['Price'] * 100);
    const annualPercentChange = percentChange.toFixed(2) + '%'
    const stocksData = priceArr
    

    return (
      <div>
        <p className="segment-title">Vanguard Total Stock Market Index Fund (VTSMX)</p>
        <p className="segment-subtitle">
          Annual Price Change: <strong>{annualPercentChange}</strong>
        </p>
        <div className="graph-desktop">
          <LineChart width={730} height={300} data={stocksData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis interval={0} tick={{ fontSize: 10, width: 2 }} dataKey="month" />
            <YAxis type="number" domain={['dataMin', 'dataMax']} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Price" stroke="#82ca9d" />
          </LineChart>
        </div>
        <div className="graph-mobile">
          <LineChart width={300} height={200} data={stocksData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis tick={{ display: 'none' }} dataKey="month" />
            <YAxis type="number" tick={{ fontSize: 10, width: 2 }} domain={['dataMin', 'dataMax']} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Price" stroke="#82ca9d" />
          </LineChart>
        </div>
      </div>
    )
  }
}

export default Stocks;