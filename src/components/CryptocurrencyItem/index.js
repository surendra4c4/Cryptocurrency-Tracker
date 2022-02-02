// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {currencyDetails} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = currencyDetails

  return (
    <li className="list-container">
      <div className="logo-container">
        <img src={currencyLogo} alt={currencyName} className="currency-img" />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="logo-container">
        <p className="usd">{usdValue}</p>
        <p className="euro">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
