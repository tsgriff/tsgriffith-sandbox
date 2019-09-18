import React, { Component } from 'react'
import Sectors from '../../components/Finance/Sectors'
import Stocks from '../../components/Finance/Stocks'
import {alphaVantageApiKey} from '../../config';

class InvestmentPortal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: {},
      apiLimitExceeded: false
    }
  }

componentDidMount() {
  fetch(`https://www.alphavantage.co/query?function=SECTOR&apikey=${alphaVantageApiKey}`)
  .then(res => res.json())
  .then(
    (result) => {
      if (result['Note']) {
        this.setState({
          apiLimitExceeded: true
        });
      } else {
        this.setState({
          apiLimitExceeded: false,
          sectorDataIsLoaded: true,
          sectorData: result['Rank G: 1 Year Performance']
        });
      }
    },
    (error) => {
      this.setState({
        apiLimitExceeded: false,
        sectorDataIsLoaded: true,
        error
      });
    }
  )

  fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=VTSMX&apikey=${alphaVantageApiKey}`)
  .then(res => res.json())
  .then(
    (result) => {
      if (result['Note']) {
        this.setState({
          apiLimitExceeded: true,
        });
      } else {
        this.setState({
          apiLimitExceeded: false,
          stockDataIsLoaded: true,
          stockData: result['Monthly Time Series']
        });
      }
    },
    (error) => {
      this.setState({
        apiLimitExceeded: false,
        stockDataIsLoaded: true,
        error
      });
    }
  )
}

render() {

    return (
      <section className="page-wrapper">
        <div className="section-content">
          <p className="section-title">Investing</p>
          <div>
            <p className="section-subtitle">Yearly Market Movements</p>
            <div className="centered-select-container">
              <select>
                <option>Domestic</option>
              </select>
            </div>
            {
              this.state.apiLimitExceeded ?
              <h3 style={{textAlign: 'center'}}>API limit exceeded. Please try again in a few minutes.</h3>
              :
              <div>
                { this.state.stockDataIsLoaded && this.state.sectorDataIsLoaded ?
                  <div>
                    <Stocks {...this.state.stockData} />
                    <Sectors {...this.state.sectorData} />
                  </div>
                  :
                  <h3 style={{textAlign: 'center'}}>Loading...</h3>
                }
              </div>
            }
          </div>
        </div>
      </section>
    )
  }
}

export default InvestmentPortal;
