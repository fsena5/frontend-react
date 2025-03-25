import React from 'react'
import './Footer.css'

import{Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div className='section footer'>
        <div className='container'>
          <div className='grid-container'>
            <div className='footer-grid-item'>
              <h3>pages</h3>
              <p>Home</p>
              <p>Menu</p>
              <p>Delivery</p>
              <p>About</p>
              <p>Contact</p>
              <Link to='#' className='text-white'></Link>
            </div>

            <div className='footer-grid-item'>
              <h3>Admin</h3>
              <p>Style Guide</p>
              <p>Instructions</p>
              <p>Components</p>
              <Link to='#' className='text-white'></Link>
            </div>
            
            <div className='footer-grid-item'>
              <h3>Opening hours</h3>
              <p>Monday-Friday = 8 AM-9 PM</p>
              <p>Sunday = Closed</p>
        
              <Link to='#' className='text-white'></Link>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Footer
