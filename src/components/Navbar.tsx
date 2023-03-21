import {useState, useEffect} from 'react'
import '../styles/navbar.css'; 
import {RiMenu4Fill, RiCloseFill} from 'react-icons/ri'
import {motion, AnimatePresence} from 'framer-motion'
const Logo = require('../assets/logo/logo.svg').default;
 

const Navbar = () => {

  const [menuActive, setMenuActive]= useState<boolean>(false); 
  const [windowHeight, setWindowHeight] = useState<number>(window.scrollY);
  

  const displayStyle = 'nav-ul-mobile' 
  const displayStyle2 = 'nav-ul-mobile active' 

  let navStyle = 'nav fixed top-0 w-full h-[80px] py-[10px] px-[70px] flex justify-between items-center '
  let navStyleBg = 'nav scrolled fixed top-0 w-full h-[80px] py-[10px] px-[70px] flex justify-between items-center '
    const [nav, setNav] = useState<string>(navStyle);
  const handleMenuClick = () => {
      setMenuActive(!menuActive)
  }


  useEffect(()=>{
    document.addEventListener('scroll', handleScroll)

    function handleScroll(){
        setWindowHeight(window.scrollY)
    }
  })
  
  return (
    <div className={windowHeight > 100 ? navStyleBg : navStyle}>
        <div className='logo flex flex-col justify-center items-center h-[full] w-[110px] '>
              <img src={Logo} className='' alt='flora' />
        </div>
        <div className='links w-[500px]'>
            <ul className='nav-ul'>
                <li>Home</li>
                <li>About</li>
                <li>Listings</li>
                <li>Blog</li>
                <li>Contact Us</li>
            </ul>

            <AnimatePresence>
                <motion.ul 
            initial={{ x: 0, opacity: 1 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ y: -500, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={!menuActive ? displayStyle : displayStyle2}>
                <li>Home</li>
                <li>About</li>
                <li>Listings</li>
                <li>Blog</li>
                <li>Contact Us</li>
            </motion.ul>
            </AnimatePresence>
            

        </div>
        {menuActive ? <RiCloseFill className='menu-icon' onClick={handleMenuClick} /> :  <RiMenu4Fill className='menu-icon' onClick={handleMenuClick} />}
    </div>
  )
}



export default Navbar