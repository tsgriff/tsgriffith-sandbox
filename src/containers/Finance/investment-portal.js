import React, { Component } from 'react'
import Sectors from '../../components/Finance/Sectors'
import Stocks from '../../components/Finance/Stocks'

class InvestmentPortal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: {},
      apiLimitExceeded: false
    }
  }

componentDidMount() {
  fetch(`https://www.alphavantage.co/query?function=SECTOR&apikey=${process.env.alphaVantageApiKey}`)
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

  fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=VTSMX&apikey=${process.env.alphaVantageApiKey}`)
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
        {/* <div className="reference-links">
          <p className="reference-links-title">Helpful Resources</p>
          <a href="http://share.robinhood.com/taylorg14" target="_blank" rel="noopener noreferrer">
            <div className="sidebar-card">
              <img src={robinhoodPhoto} />
              <p className="reference-links-subtitle">
                Robinhood
            </p>
              <p className="reference-links-body">
                Invest using this popular, no-commission trading app.
              </p>
              <p className="reference-links-body">
                Click on this card to sign up and receive a <strong>free share of stock</strong>.
              </p>
            </div>
          </a>
        </div> */}
      </section>
    )
  }
}

export default InvestmentPortal;
