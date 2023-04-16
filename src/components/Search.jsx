import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import Coin from '../routes/Coin';
import axios from 'axios';
import './Search.css'

const Search = () => {
  const [search, setSearch] = useState('');
  const [coins, setCoins] = useState([])

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'


  useEffect(() => {
    axios.get(url).then((res) => {
      setCoins(res.data)
      // console.log(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  const handleChange = e => {
    setSearch(e.target.value)
  }


  const filteredCoin = coins.filter(coin => 
    coin.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
    <div className='search-container'>
      <h3 className='search-title'>Search Coins</h3>
      <form>
          <input 
            id='search' 
            type="text" 
            placeholder="  Search Coin" 
            className='coin-text'
            onChange={handleChange}
          />
      </form>
    </div>

    <div className="heading">
      <p>#</p>
      <p className='coin-name'>Coin</p>
      <p>Price</p>
      <p>24h</p>
      <p className='hide-mobile'>Volume</p>
      <p className='hide-mobile'>Mkt Cap</p>
    </div>

    {filteredCoin.map(coin => {
      return (
        <Link to={`/coin/${coin.id}`} element={<Coin/>} key={coin.id}>
        <div className='coin-row' key={coin.id}>
        <p>{coin.market_cap_rank}</p>
        <div className="image-symbol">
            <img src={coin.image} alt="" />
            <p>{coin.symbol.toUpperCase()}</p>
        </div>
        <p>${coin.current_price}</p>
        <p>{coin.price_change_percentage_24h}%</p>
        <p className='hide-mobile'>${coin.total_volume.toLocaleString()}</p>
        <p className='hide-mobile'>${coin.market_cap.toLocaleString()}</p>
      </div>
    </Link>
      )
    })}
    </>
  )
}

export default Search