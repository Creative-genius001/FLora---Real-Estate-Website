import React from 'react';
import Navbar from '../src/components/Navbar'
import Footer from '../src/components/Footer'
import WorkCard from './components/WorkCard';
import {BsArrowRightShort} from 'react-icons/bs'
import PropertyCard from './components/PropertyCard';

function App() {
  return (
    <div className="App">
      <Navbar />
        <section className='hero-section w-full h-[calc(100vh-80px)] bg-lightblue px-[70px] flex items-center '>
            <div>
              <div className= 'w-[55%]'>
                <h1 className='text-[60px] leading-[80px] text-darkblack '>Discover a place you will love to live</h1>
                <p className='text-darkblack text-[21px] leading-[27px] '>Find your dream home with ease. Explore our diverse range of properties and discover the perfect one for you.</p>
                <button className='w-[140px] h-[50px] bg-darkblue px-4 py-2 text-white mt-6 rounded-[12px] '>Explore</button>
              </div>
              <div className='flex mt-8'>
                  <div className='flex flex-col mr-7'>
                    <h1 className='text-[30px] '>2000+</h1>
                    <p>Property Ready</p>
                  </div>
      
                  <div>
                    <h1 className='text-[30px] '>500+</h1>
                    <p>Happy Customers</p>
                  </div>
              </div>
            </div>
        </section>

        <section className='hero2 w-full px-[70px] py-[4rem] bg-white '>
          <div className=''>
            <h1 className='text-darkblack text-[30px] text-center '>How it Works</h1>
            <p className='text-darkblack text-center   '>We offer a variety of houses including apartments, housing and land for rent or sale. Our experienced agents are <br />here to help you find the right property and provide personalized experiences.</p>
          </div>
          <WorkCard />
        </section>
        <section className='hero3 w-full px-[70px] py-[4rem] text-white bg-black '>
          <div className='grid grid-cols-2'>
            <div>
              <h1 className='text-[40px] '>Living Spaces Designed With Perfection</h1>
            <p className='text-[18px] mb-4 '>
              At the forefront of disruption in the real estate industry, Cosgrove Investment Limited is shaping new lifestyles with a focus on the integration of revolutionary technology into residential and commercial real estate using sustainable methods. Cosgrove’s leadership team is composed of the industry’s highly experienced leaders with a passion for unswerving excellence. 
            </p>
            <button className='font-semibold cursor-pointer flex flex-row items-center hover:text-darkblue '><span className='mr-1'>Read More </span><BsArrowRightShort /></button>
            </div>
          </div>
        </section>
        <section className='hero4 w-full px-[70px] py-[4rem] '>
            <div className='flex flex-col items-center'>
              <h1 className='text-[30px]  '>Trending Properties</h1>
              <p>Get the most popular and luxury apartment right now and get sales of the year</p>
            </div>
            <div className='mt-8'>
              <PropertyCard />
            </div>
        </section>
      <Footer />
    </div>
  );
}

export default App;
