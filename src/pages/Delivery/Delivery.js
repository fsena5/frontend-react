import React from 'react'

import HeroImage from '../../components/HeroImage/HeroImage'
import bgImage from '../../assets/pngtree-scooter-delivery-via-mobile-device-3d-render-image_3812818.jpg'
import DeliveryInfo from './DeliveryInfo/DeliveryInfo'
import AddToCart from './AddToCart/AddTocart'

const Delivery = () => {
  return (
    <div>
      <HeroImage
     bgImage={bgImage}
     heading={<span> Eat At Home</span>}
     text={'Fast, reliable delivery bringing your order to your door with care'}/> 
     <DeliveryInfo/>
     <AddToCart/>
   </div>
  )
}

export default Delivery
