import React,{useState} from 'react'
import {Link,NavLink} from 'react-router-dom'
import {FaBars,FaTimes} from 'react-icons/fa'
import logo from '../../assets/istockphoto-981368726-612x612.jpg'
import './Navbar.css'

const Navbar = () => {

const [click,setClick] = useState(false);

const handleClick = () =>{
  setClick(!click)
}

  return (
    <div className='header'>
     <div className='container'>
     <div className='nav-bar'>
      <Link to='/'>
    <img src={logo} alt='logo' width={70} />
    </Link>
    <ul className={click ?"nav-menu active":'nav-menu'}>
      <li onClick={handleClick} >
        <NavLink className='nav-link' to='/'>Home</NavLink>
      </li>
      <li onClick={handleClick} >
      <NavLink className='nav-link' to='/menu'>Menu</NavLink>
      </li>
      <li onClick={handleClick}>
      <NavLink className='nav-link' to='/delivery'>Delivery</NavLink>
      </li>
      <li onClick={handleClick}>
      <NavLink className='nav-link' to='/about'>About</NavLink>
      </li>
      <li onClick={handleClick} >
      <NavLink className='nav-link' to='/contact'>Contact</NavLink>
      </li>
      <li>
        <button>Order now</button>
        </li>
    </ul>
    <div className='hamburger' onClick={handleClick}>
    {

      click ? (<FaTimes size={20} style={{color:"#fff"}}/> ) : (  <FaBars size={20} style={{color:"#fff"}}/>)
    }

    </div>
      </div> 
      </div> 
    </div>
  )
}
export default Navbar
