import React,{useState} from 'react'
import './AmazingMeal.css'

import image1 from '../../../assets/images (1).jpg'
import image2 from '../../../assets/images (3).jpg'
import image3 from '../../../assets/images (5).jpg'
import image4 from '../../../assets/images (8).jpg'
import image5 from '../../../assets/images (4).jpg'

import Slider from 'react-slick'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BsFillStarFill } from 'react-icons/bs'

const AmazingMeal = () => {

const [items,setItems] = useState([
  
  {id:1,url: image5},
  {id:2,url: image2},
  {id:3,url: image4},

])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplayspeed:5000,
  };

  return (
    <div className='section'>
      <div className ='container'>
        <div className ='amazing-container'>
          <div className ='amazing-carousal'>
            <div>
              <Slider {...settings}>
                {items.map(item=> (
                  <div key={item.id}>
                    <img src={item.url} alt="caurosal pic"/>
                  </div>
                ))}
              </Slider>
            </div>
          </div>

         <div className ='amazing-content'>
          <h2 className='heading-secondary'>
            Amazing meals <span className='ampersand'>&</span>
            <br/>
            <span>
              Great <br/> Entertainment
            </span>
          </h2>
          <br/>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
               
          </p>
          <br/>
         <p>
         There are many variations of passages of Lorem Ipsum available, but the majority have suffered
          alteration in some form, by injected humour, or randomised words which don't look even slightly 
          believable. 
         </p>
           <br/> 
          <blockquote>
          It is a long established fact that a reader will be distracted by the 
          readable content of a page when looking at its layout.
          </blockquote>
          
         </div>
        </div>

        <div className='amazing-card-container'>
          <div className='amazing-card  amazing-card-left'>
            <img src ={image1} alt='pasta' className='amazing-card-image'/>

            <div className='amazing-card-content'>
            <div className='amazing-card-tittle'>
              <BsFillStarFill color='#c3512f'/>
              <h3 className='heading-tertiary'>the best <span>ingredients</span></h3>
            </div>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry
            </p>
            </div>
          </div>
          <div className='amazing-card  amazing-card-right'>
            <img src ={image3} alt='cheese' className='amazing-card-image'/>

            <div className='amazing-card-content'>
            <div className='amazing-card-tittle'>
              <BsFillStarFill color='#c3512f'/>
              <h3 className='heading-tertiary'> <span>reservations</span></h3>
            </div>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry
            </p>
            </div>
          </div>
        </div>

      </div>
      
    </div>
  )
}

export default AmazingMeal

