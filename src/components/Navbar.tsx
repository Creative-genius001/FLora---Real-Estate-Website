import React from 'react'
import '../styles/navbar.css'; 
const Logo = require('../assets/logo/Vector.svg').default;
const Flora = require('../assets/logo/Flora.svg').default;
 

const Navbar = () => {
  return (
    <div className='nav w-full h-[80px] bg-[#000000c7] py-[10px] px-[70px] flex justify-between items-center '>
        <div className='logo flex flex-col justify-center items-center '>
            <img src={Logo} className='' alt='flora' />
            <img src={Flora} className='' alt='flora' />
        </div>
        <div className='links w-[500px]'>
            <ul className='nav-ul'>
                <li>Home</li>
                <li>About</li>
                <li>Listings</li>
                <li>Blog</li>
                <li>Contact Us</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar