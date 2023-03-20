import { motion, useScroll } from "framer-motion"
import Navbar from '../src/components/Navbar'
import Footer from '../src/components/Footer'
import WorkCard from './components/WorkCard';
import {BsArrowRightShort} from 'react-icons/bs'
import PropertyCard from './components/PropertyCard';
import Testimonial from './components/Testimonial';
const image = require('./assets/others/offic.jpg')
const videoBg = require('./assets/others/vid.mp4')

function App() {

  const { scrollYProgress } = useScroll();

  
  return (
    <div className="App">
      <Navbar />
        <section className='hero-section w-full h-[calc(100vh-80px)] bg-[#000000c7] px-[70px] flex items-center '>
            <video autoPlay loop muted playsInline className='background-clip'>
                <source src={videoBg} type='video/mp4' />
              </video>
            <motion.div
            initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{delay: 0.5, duration: 2}}
              viewport={{ once: true }} 
            className=''>
              <div className= 'hero-content w-[70%] mx-auto flex flex-col justify-center items-center text-center'>
                <h1 className='text-[60px] leading-[70px] text-white mb-2'>Discover a place you will love to live</h1>
                <p className='text-white text-[21px] leading-[27px] w-[70%] '>Find your dream home with ease. Explore our diverse range of properties and discover the perfect one for you.</p>
                <button className='w-[140px] h-[50px] bg-darkblue px-4 py-2 text-white mt-6 rounded-[12px] '>Explore</button>
              </div>
              
            </motion.div>
        </section>

        <section className='hero2 w-full px-[70px] py-[4rem] bg-white '>
          <div className=''>
            <h1 className='text-darkblack text-[30px] text-center '>How it Works</h1>
            <p className='text-darkblack text-center w-[50%] mx-auto   '>We offer a variety of houses including apartments, housing and land for rent or sale. Our experienced agents are here to help you find the right property and provide personalized experiences.</p>
          </div>
          <WorkCard />
        </section>
        <section className='hero3 w-full px-[70px] py-[4rem] text-white bg-black '>
          <div className='hero3-container flex justify-around items-center'>
            <motion.div
             initial={{ opacity: 0, x: -100}}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{delay: 0.5, duration: 1.3}}
              viewport={{ once: true }}
             className='hero3-content w-[50%]'>
              <h1 className='text-[40px] mb-4 '>Living Spaces Designed With Perfection</h1>
            <p className='text-[18px] mb-4 w-[90%] '>
              At the forefront of disruption in the real estate industry, Flora Investment Limited is shaping new lifestyles with a focus on the integration of revolutionary technology into residential and commercial real estate using sustainable methods. Flora's leadership team is composed of the industry’s highly experienced leaders with a passion for unswerving excellence. 
            </p>
            <a href="#" className='font-semibold cursor-pointer flex flex-row items-center justify-start text-darkblue '><span className='mr-1'>Read More </span><BsArrowRightShort /></a>
            </motion.div>
            <motion.div  
            initial={{ opacity: 0, x: 100}}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{delay: 0.5, duration: 1.3}}
              viewport={{ once: true }}
            className='w-[370px] h-[500px] '>
              <img src={image} alt="apartment image" className='w-full h-full object-cover ' />
            </motion.div>
          </div>
        </section>
        <section className='hero4 w-full px-[70px] py-[4rem] '>
            <div className='flex flex-col items-center'>
              <h1 className='text-[30px]  '>Trending Listings</h1>
              <p>Get the most popular and luxury apartment right now and get sales of the year</p>
            </div>
            <motion.div 
            initial={{ opacity: 0 , scale: 0}}
                whileInView={{ opacity: 1, scale: 1}}
                transition={{
                    opacity : { duration: 3},
                    scale : { duration: 0.8}
                 }}
                viewport={{ once: true }}
            className='property-container mt-12 '>
              <PropertyCard />
            </motion.div>
        </section>
        <section className='hero5 w-full px-[70px] py-[4rem] bg-black flex justify-center flex-col items-center '>
            <h1 className='text-3xl text-center mb-8 text-white w-[80%]'>We offer a variety of properties, including houses, apartments and land for sale or rent</h1>
            <button className='w-[140px] h-[50px] bg-darkblue text-white px-4 py-2 rounded-[12px] '>Contact Us</button>
        </section>
        <section className='testimonial-section w-full px-[70px] py-[4rem] bg-slate-200 '>
          <div>
            <h1 className='text-[30px] text-center mb-12'>What Our Clients Are Saying</h1>
            <motion.div
               initial={{ opacity: 0 , y: 50}}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    opacity : {delay: 0.5, duration: 1},
                    y : {delay: 0.5, duration: 0.4}
                 }}
                viewport={{ once: true }}
                className='testimonial-container grid grid-rows-1 grid-cols-3'>
              <Testimonial />
            </motion.div>
          </div>
        </section>
        <section className="news-letter w-full px-[70px] py-[4rem] bg-black ">
          <div className="flex justify-center items-center flex-col py-12">
              <h1 className="text-white text-[30px] mb-2 ">Get notified when we list new properties</h1>
              <p className="text-white text-[18px] text-center w-[50%]  leading-1">Be among the first people to instantly get email updates on new listings of apartments and lands for sale or lease.</p>
              <form>
                <div className='subscribe' >
                    <input className="mr-3 px-4 py-2 w-[300px] outline-none rounded-[12px] bg-[#6d6d6d7e] text-white border-[#ffffffb4]  " type='text' placeholder="Your email address goes here" />
                    <button className="w-[140px] h-[40px] bg-darkblue px-4 py-2 text-white mt-6 rounded-[12px] ">Subscribe</button>
                </div>
              </form>  
          </div>
        </section>
      <Footer />
    </div>
  );
}

export default App;
