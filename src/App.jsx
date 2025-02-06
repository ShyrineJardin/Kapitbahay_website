import { useEffect } from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import OverviewCounter from './components/overview-counter/OverviewCounter';
import About from './components/about/About';
import Services from './components/services/Services';
import Install from './components/install/Install';
import Blogs from './components/blogs/Blogs';
import Footer from './components/footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(()=>{
    AOS.init(
      {
        offset: 100,
        duration: 500,
        easing: 'ease-in-sine',
        delay:100,
      }
    )
    AOS.refresh()
  }, [])

  return (
    <>
    <div className='bg-white dark:bg-gray-900'>
      <Navbar/>
       <Hero/>
       <OverviewCounter/>
       <About/>
       <Services/>
       <Install/>
       <Blogs/>
       <Footer/>
    </div>   
    </>
  )
}

export default App
