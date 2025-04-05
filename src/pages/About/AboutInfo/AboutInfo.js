import React from 'react'
import './AboutInfo.css'

const AboutInfo = () => {
  return (
    <div className='section'>
      <div className='container grid-container'>
        <div>
          <div className='about-info-content'>
            <h2 className='heading-secondary'>
              A few words <span>about us</span>
            </h2>

            <h4>Let us introduce ourselves</h4>
            <p>
            The "About Us" page is the heart of your restaurant’s website,
             offering a window into your brand story, values, and culinary
              philosophy. Start by sharing your origin how the restaurant came 
              to life, the inspiration behind the menu, or a personal anecdote 
              from the founders that highlights your passion for food
            </p>
            <blockquote>Emphasize what makes you unique, whether it’s a commitment  to farm-to-table ingredients,
               a family recipe passed down for generations, or a fusion of global flavors
               </blockquote>

          </div>
        </div>
     
        <div>
          <div className='about-info-content'>
            <h2 className='heading-secondary'>
              A place to wine,  <span>A place to dine</span>
            </h2>

            <h4>we hope to see you soon!</h4>
            <p>
            The "About Us" page is the heart of your restaurant’s website,
             offering a window into your, story, values, and culinary
              philosophy. Start by sharing your origin how the restaurant came 
              to life, the inspiration behind the menu, or a personal anecdote 
              from the founders that highlights your passion for food
            </p>
            <blockquote>Emphasize what makes you unique, whether it’s a commitment  to farm-to-table ingredients,
               a family recipe passed down for generations, or a fusion of global flavors
               </blockquote>

          </div>
        </div>

      </div>
      
    </div>
  )
}

export default AboutInfo
