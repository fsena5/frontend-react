import React from 'react'
import HeroImage from '../../components/HeroImage/HeroImage'
import bgImage from '../../assets/Food+Photo+Background.jpg'
import AboutInfo from './AboutInfo/AboutInfo'
import OurData from './OurData/OurData'

const About = () => {
  return (
    <div>
       <HeroImage
     bgImage={bgImage}
     heading={ <span>about us</span> }
     text={'take a look at the place ,the people and the food'}/> 
     <AboutInfo/>
     <OurData/>
    </div>
  )
}

export default About
