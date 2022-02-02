// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class CryptocurrenciesList extends Component {
  state = {currencyList: [], isLoading: true}

  componentDidMount() {
    this.getCurrenciesList()
  }

  getCurrenciesList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()

    const newList = data.map(eachCurrency => ({
      id: eachCurrency.id,
      currencyLogo: eachCurrency.currency_logo,
      currencyName: eachCurrency.currency_name,
      euroValue: eachCurrency.euro_value,
      usdValue: eachCurrency.usd_value,
    }))
    this.setState({currencyList: newList, isLoading: false})
  }

  render() {
    const {currencyList, isLoading} = this.state

    return (
      <div className="content-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="image"
        />
        <div className="curency-details-container">
          <div className="upper-container">
            <p className="coin-type">Coin Type</p>
            <div className="usd-euro-container">
              <p className="coin-usd">USD</p>
              <p className="coin-euro">EURO</p>
            </div>
          </div>
          {isLoading ? (
            <div testid="loader" className="loader">
              <Loader type="Rings" color="#ffffff" height={80} width={80} />
            </div>
          ) : (
            <ul className="ul-list-container">
              {currencyList.map(eachItem => (
                <CryptocurrencyItem
                  currencyDetails={eachItem}
                  key={eachItem.id}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default CryptocurrenciesList
