import React, { ReactNode } from 'react'
import {GrFacebookOption, GrLinkedinOption, GrTwitter } from 'react-icons/gr'
import { JsxElement } from 'typescript'
import '../styles/footer.css'

const Footer = () => {

interface props {
  icon: ReactNode;
}
const icons: props[] = [
  {
    icon: <GrFacebookOption />
  },
  {
    icon: <GrLinkedinOption />
  },
  {
    icon: <GrTwitter />
  }
  
]

  return (
    <div className='footer px-[70px] pt-[4rem] pb-[2rem] bg-black text-white'>
      <div className='footer-container grid grid-rows-1 grid-cols-3'>
        <div className='flex flex-col w-auto'>
        <h1 className='mb-2 text-[18px]'>Services</h1>
        <a href='/'>Agent Registration</a>
        <a href='/'>Privacy Policy</a>
        <a href='/'>Career</a>
      </div>
      <div className='flex flex-col'>
        <h1 className='mb-2 text-[18px]'>About</h1>
        <a href='/'>About Us</a>
        <a href='/'>News</a>
        <a href='/'>Pricing</a>
        <a href='/'>New Property</a>
        <a href='/'>Contact Us</a>
      </div>
      <div className='location ' >
        <h1 className='mb-2 text-[18px]'>Our Location</h1>
        <span>4th Floor, Mukhtar El Yakub Building Zakariyya Maimalari Street, Central Business District Abuja. FCT 900211 Nigeria.</span>
        <div className='flex mt-4'>
          {icons?.map((i, index)=> {
            return(
              <div key={index} className='mr-8 rounded-[50%] cursor-pointer '><span className='hover:text-darkblue'>{i.icon}</span></div>
            )
          })}
        </div>
      </div>
    </div>
    <div className='mt-[3rem] pt-3 text-center' style={{borderTop: "1px solid white"}}>
      <span className='text-center text-sm'>@Designed by Ovie. All Rights Reserved.</span>
    </div>
      
    </div>
  )
}

export default Footer