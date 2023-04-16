import React from 'react'
import './Coins.css'


const CoinItem = (props) => {

  console.log(props.coins)

  return (
    <>
    {/* //   This are the indivdual rows for each coin
    // props coming from Coins.jsx */}
    <div className='container'>
    <div className='coin-row'>
        <p>{props.coins.market_cap_rank}</p>
        <div className="image-symbol">
            <img src={props.coins.image} alt="" />
            <p>{props.coins.symbol.toUpperCase()}</p>
        </div>
        <p>${props.coins.current_price.toLocaleString()}</p>
        <p>{props.coins.price_change_percentage_24h.toFixed(2)}%</p>
        <p className='hide-mobile'>${props.coins.total_volume.toLocaleString()}</p>
        <p className='hide-mobile'>${props.coins.market_cap.toLocaleString()}</p>
    </div>
    </div>
    </>
  )
}

export default CoinItem