import React from 'react'
import TrendingCoins from './TrendingCoins'
import './Coins.css'


const Trending = (props) => {
    

  return (
    <>
    <h1>Trending</h1>
    <div className="heading">
        <p>Rank #</p>
        <p className='coin-name'>Coin</p>
        <p>Name</p>
        <p className='hide-mobile'>Price/BTC</p>
    </div>
    <TrendingCoins />
    </>
  )
}

export default Trending