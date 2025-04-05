import React from 'react'
import HeroImage from '../../components/HeroImage/HeroImage'
import bgImage from '../../assets/using-laptop-show-icon-address-600nw-2521386695.webp'

import ContactForm from './ContactForm/ContactForm'

const Contact = () => {
  return (
    <div>
      <HeroImage
     bgImage={bgImage}
     heading={ <span>Contact us</span> }
     text={'Feel free to contact with us'}/>
     <ContactForm/>
    </div>
  )
}
 
export default Contact
