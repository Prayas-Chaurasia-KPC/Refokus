import React from 'react'
import Navbar from './Components/Navbar'
import Work from './Components/Work'
import Stripes from './Components/Stripes'
import Products from './Components/Products'
import Marquees from './Components/Marquees'
import Cards from './Components/Cards'
import Footer from './Components/Footer'
//Importing Locomotive Smooth Scrolling
import LocomotiveScroll from 'locomotive-scroll'



function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full h-screen bg-zinc-900 text-white font-["satoshi"] bg-#1c1c1c'>
      <Navbar/>
      <Work />
      <Stripes />
      <Products />
      <Marquees />
      <Cards />
      <Footer />
    </div>
  )
}

export default App