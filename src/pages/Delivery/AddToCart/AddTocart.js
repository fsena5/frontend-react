import React from 'react'
import ListItem from '../../../components/ListItem/ListItem'
import './AddToCart.css'

import image1 from '../../../assets/images (2).jpg'
import image2 from '../../../assets/images (6).jpg'
import image3 from '../../../assets/images (1).jpg'
import image4 from '../../../assets/images (3).jpg'
import image5 from '../../../assets/images (4).jpg'
import image6 from '../../../assets/images (5).jpg'

const menuDataLeft = [
  {
    title: "Irresistible Pizza Delight 🍕🔥",
    description: "Pizza 🍕 is a crispy, cheesy delight topped with flavorful ingredients and baked to perfection! 😋",
    price: "8",
    img: image2,
  },
  {
    title: "Spaghetti Bolognese 🍝🍅",
    description: "Rich and meaty Bolognese sauce served over perfectly cooked spaghetti, garnished with basil.",
    price: "10",
    img: image1,
  },
  
    {
      title: "Cheesy Delight 🧀",
      description: "A rich and creamy selection of gourmet cheeses, served with crackers and fresh fruits.",
      price: "9",
      img: image6,
    }
  ];
  const menuDataRight = [

    {
      title: "Classic Beef Burger 🍔",
      description: "Juicy grilled beef patty topped with melted cheese, fresh lettuce, and our special sauce in a toasted bun.",
      price: "12",
      img: image4,
    },
    {
      title: "Creamy Macaroni & Cheese 🥣🧀",
      description: "A comforting bowl of macaroni smothered in a creamy, cheesy sauce and baked to perfection.",
      price: "10",
      img: image3,
    },
    {
      title: "Chocolate Fudge Cake 🍰🍫",
      description: "A moist and rich chocolate cake layered with smooth fudge and topped with chocolate ganache.",
      price: "8",
      img: image5,
    }
  

];

const AddTocart = () => {
  return (
    <div className ='container add-to-cart'>
      <h1 className='heading-secondary'>
        click to add to cart
      </h1>
      <div className='grid-container'>
        <div>
          {menuDataLeft.map((data,i)=>(
            <ListItem
            title={data.title}
            description={data.description}
            price={data.price}
            itemImage={data.img}
            />
          ))}
          </div>

       <div> 
          {menuDataRight.map((data,i)=>(
            <ListItem
            title={data.title}
            description={data.description}
            price={data.price}
            itemImage={data.img}
            />
          ))}

        </div>
      </div>
      <div className='addtocart-btn'>
        <h1 className='heading-secondary'>
          are you done?
        </h1>
        <button>show cart & checkout</button>

      </div>
      
    </div>
  )
}

export default AddTocart
