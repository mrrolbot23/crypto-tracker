import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './Coins.css'

const Exchanges = () => {

  const [search, setSearch] = useState('');
  const [exchanes, setExchanges] = useState([])

  const url = 'https://api.coingecko.com/api/v3/exchanges?per_page=100&page=1'

  useEffect(() => {
    axios.get(url).then((res) => {
      setExchanges(res.data)
      console.log(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filteredExchange = exchanes.filter(exchange => 
    exchange.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      <div className='search-container'>
      <h3 className='search-title'>Search Exchange</h3>
      <form>
          <input 
            id='search' 
            type="text" 
            placeholder="  Search Exchange" 
            className='coin-text'
            onChange={handleChange}
          />
      </form>
    </div>

    <div className="heading">
      <p>#</p>
      <p className='coin-name'>Name</p>
      <p className='hide-mobile'>Trust Score</p>
      <p className='hide-mobile'>Country</p>
      <p >Volume/BTC</p>
      <p className='hide-mobile'> Established </p>
    </div>

    {filteredExchange.map(exchange => {
      return (
        <a href={exchange.url} target='_blank' rel="noreferrer">
        <div className='coin-row' key={exchange.id}>
          <p>{exchange.trust_score_rank}</p>
          <div>
            <img src={exchange.image} alt='exchange-logo'/>
            <p>{exchange.name}</p>
          </div>
          <p className='hide-mobile'>{exchange.trust_score}</p>
          <p className='hide-mobile'>{exchange.country}</p>
          <p>₿ {exchange.trade_volume_24h_btc.toFixed(2)}</p>
          <p className='hide-mobile'>{exchange.year_established}</p>
        </div>
        </a>
      )
    })}
    </>
  )
}

export default Exchanges