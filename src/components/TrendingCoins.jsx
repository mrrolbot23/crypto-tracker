import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Coin from '../routes/Coin'
import './Coins.css'

const TrendingCoins = () => {
    const [trending, setTrending] = useState([])

    const url = 'https://api.coingecko.com/api/v3/search/trending'

    useEffect(() => {
        axios.get(url).then((res) => {
            setTrending(res.data.coins)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    function showTrending(coin) {
        return (
            <>
            <Link to={`/coin/${coin.item.id}`} element={<Coin/>} key={coin.item.id}>
            <div className='coin-row' key={coin.item.id}>
                <p>{coin.item.market_cap_rank}</p>
                <p className='logo-name'><img src={coin.item.small} alt="" /> {coin.item.symbol.toUpperCase()}</p>
                <p>{coin.item.name}</p>
                <p className='hide-mobile'>${coin.item.price_btc}</p>
            </div>
            </Link>
            </>
        )
    }

  return (
    <div>
        {trending.map(showTrending)}
    </div>
  )
}

export default TrendingCoins