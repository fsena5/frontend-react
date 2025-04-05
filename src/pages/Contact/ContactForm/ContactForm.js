import React from 'react'
import './ContactForm.css'

import bgImage from '../../../assets/birthday-banner-with-cake-confetti_107791-29414.avif'

const ContactForm = () => {
  return (

<div className="contact-section">
  <div className="contact-columns">
    <div className="contact-info">
      <h1 className="heading-main">GET IN TOUCH</h1>
      <div className="text-block">
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
          Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.
        </p>
        
        <img src={bgImage} alt="get in touch"/>

      </div>
    </div>
    <div className="form-column">
      <h1 className="heading-main">MAIL US</h1>
      <form className="contact-form">
        <div className="form-row">
          <div className="input-group">
            <label>Name</label>
            <input type="text" className="form-input" />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input type="email" className="form-input" />
          </div>
        </div>

        <div className="input-group">
          <label>Subject</label>
          <input type="text" className="form-input" />
        </div>

        <div className="input-group">
          <label>Message</label>
          <textarea className="form-textarea" rows="4"></textarea>
        </div>
      </form>

      <div className="additional-text">
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget<br />
          Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.
        </p>
      </div>
    </div>
  </div>
</div>

 )
 }

export default ContactForm
