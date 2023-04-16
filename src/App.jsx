import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Coin from './routes/Coin'
import Navbar from './components/Navbar'
import Exchanges from './components/Exchanges'
import Trending from './components/Trending'
import Search from './components/Search'

const App = () => {

  return (
    
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Search/>} />
        <Route path='/coin' element={<Coin/>} >
          <Route path=':coinId' element={<Coin/>} />
        </Route>
        <Route path='/exchanges' element={<Exchanges/>}/>
        <Route path='/trending' element={<Trending />}/>
      </Routes>
      
    </>
  )
}

export default App