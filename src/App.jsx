import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import OverviewCounter from './components/overview-counter/OverviewCounter';
import About from './components/about/about';
import Services from './components/services/Services';
import Install from './components/install/Install';
import Blogs from './components/blogs/Blogs';
import Footer from './components/footer/Footer';


function App() {

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
