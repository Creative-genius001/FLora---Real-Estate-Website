import React from 'react'
import '../styles/navbar.css'; 
const Logo = require('../assets/logo/Vector.svg').default;
const Flora = require('../assets/logo/Flora.svg').default;
 

const Navbar = () => {
  return (
    <div className='w-full h-[80px] bg-lightblue py-[10px] px-[70px] flex justify-between items-center '>
        <div className='logo flex flex-col justify-center items-center '>
            <img src={Logo} className='' alt='flora' />
            <img src={Flora} className='' alt='flora' />
        </div>
        <div className='links w-[500px]'>
            <ul className='nav-ul'>
                <li>Home</li>
                <li>About</li>
                <li>Service</li>
                <li>New Property</li>
                <li>Contact</li>
            </ul>
        </div>
        <div>
            <button className='w-[100px] h-[45px] rounded-[12px] px-[25px] py-[10px] bg-darkblue text-white '>Login</button>
        </div>
    </div>
  )
}

export default Navbar