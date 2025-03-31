import React from 'react'
import HeroImage from '../../components/HeroImage/HeroImage'
import bgImage from '../../assets/download.jpg'
import MenuOfTheDay from './MenuOfTheDay/MenuOfTheDay'
const Menu = () => {
  return (
    <div>
     <HeroImage
     bgImage={bgImage}
     heading={<span> Our Menu</span>}
     text={'Explore our delicious menu-savor every bite !'}/> 
     <MenuOfTheDay/>
    </div>
  )
}

export default Menu
