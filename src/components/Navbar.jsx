import React from 'react'
import {SiBlockchaindotcom} from 'react-icons/si'
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
    <div className='navbar'>
      <Link to='/' >
          <div className="navbar-item">           
              <h1 ><SiBlockchaindotcom className='icon'/> Coin <span className='blue'>Tracker</span></h1>
          </div>
      </Link>
      <Link to='/trending'>
        <div className="navbar-item">
          <h3>Trending</h3>
        </div>     
      </Link>
      <Link to='/exchanges'>
        <div className="navbar-item">
          <h3>Exchanges</h3>
        </div>     
      </Link>
    </div>
    </>
  )
}

export default Navbar