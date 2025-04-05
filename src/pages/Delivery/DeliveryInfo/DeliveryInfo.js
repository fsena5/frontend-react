import React from 'react'
import { BsFillStarFill } from 'react-icons/bs'
import './DeliveryInfo.css'

const DeliveryInfo = () => {
  return (
    <div className='section delivery-info'>
      <div className='container'>
        <div className='grid-container'>
          <div>
            <div className='delivey-iconbox'>
              <BsFillStarFill color='#c3512f'/>
              <h3 className='heading-tertiary'>
                order with E-commerce
              </h3>
            </div>
            <p>
            Ordering food online through e-commerce platforms has revolutionized 
            the way people enjoy meals, combining convenience with a world of
             culinary choices. With just a few clicks or taps, customers can 
             explore diverse menus—from local eateries to international 
             cuisines—without leaving their homes or offices
            </p>
          </div>
          <div>
            <div className='delivey-iconbox'>
              <BsFillStarFill color='#c3512f'/>
              <h3 className='heading-tertiary'>
                additional information
              </h3>
            </div>
            <p>
            Ordering food online through e-commerce platforms has revolutionized 
            the way people enjoy meals, combining convenience with a world of
             culinary choices. With just a few clicks or taps, customers can 
             explore diverse menus—from local eateries to international 
             cuisines—without leaving their homes or offices
            </p>
          </div>

        </div>
      </div>
      
    </div>
  )
}

export default DeliveryInfo
