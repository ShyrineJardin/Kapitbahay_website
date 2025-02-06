import React from 'react'
import Errand from '../../assets/images/run.png';
import House from '../../assets/images/house.png';
import Study from '../../assets/images/study.png';
import Moving from '../../assets/images/moving.png';
import Elders from '../../assets/images/friends.png';
import Event from '../../assets/images/event-list.png';
import Shopping from '../../assets/images/shopping-bags.png';
import Custom from '../../assets/images/customization.png';

const Services = () => {
  return (
    <section className='bg-white text-black dark:bg-gray-900 dark:text-white'>

      <h2 className='flex justify-center py-15'>Services</h2>
        <div className='container flex justify-center items-center py-10'>

            <div 
            data-aos='fade-up'
            data-aos-duration='400'
            data-aos-once= 'true'
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 space-x-5 space-y-5'>
              {/* services */}
              <div className='flex flex-col items-center text-center'>
                <img src={Errand} alt="" className='bg-main p-5 rounded-full h-40 w-40 mb-2 shadow-lg'/>
                <h3 className='mb-3'>Running Errands</h3>
                <p>Picking up and delivering items (e.g., groceries, dry cleaning, packages).</p>
              </div>

               {/* services */}
               <div className='flex flex-col items-center text-center'>
                <img src={House} alt="" className='bg-main p-5 rounded-full h-40 w-40 mb-2 shadow-lg'/>
                <h3 className='mb-3'>Home Services</h3>
                <p>Basic home cleaning and home maintenance (e.g., assembling furniture, changing lightbulbs).</p>
              </div>

               {/* services */}
               <div className='flex flex-col items-center text-center'>
                <img src={Study} alt="" className='bg-main p-5 rounded-full h-40 w-40 mb-2 shadow-lg'/>
                <h3 className='mb-3'>Study/Work Help</h3>
                <p>Tutoring in academic subjects or languages. Tech support for setting up devices, software, or troubleshooting.</p>
              </div>

               {/* services */}
              <div className='flex flex-col items-center text-center'>
                <img src={Moving} alt="" className='bg-main p-5 rounded-full h-40 w-40 mb-2 shadow-lg'/>
                <h3 className='mb-3'>Relocation</h3>
                <p>Helping users move small items locally. Packing and unpacking boxes for a move.</p>
              </div>

               {/* services */}
               <div className='flex flex-col items-center text-center'>
                <img src={Elders} alt="" className='bg-main p-5 rounded-full h-40 w-40 mb-2 shadow-lg'/>
                <h3 className='mb-3'> Seniors/PWD</h3>
                <p>Grocery shopping, basic errands, or light cleaning. Offering companionship or assistance during doctor visits.</p>
              </div>

               {/* services */}
               <div className='flex flex-col items-center text-center'>
                <img src={Event} alt="" className='bg-main p-5 rounded-full h-40 w-40 mb-2 shadow-lg'/>
                <h3 className='mb-3'>Event Assistance</h3>
                <p>Serving as an on-site assistant for errands during events.
                </p>
              </div>

               {/* services */}
               <div className='flex flex-col items-center text-center'>
                <img src={Shopping} alt="" className='bg-main p-5 rounded-full h-40 w-40 mb-2 shadow-lg'/>
                <h3 className='mb-3'>Shopping</h3>
                <p>Helping users shop for specific needs. Returning or exchanging items at stores.</p>
              </div>

               {/* services */}
               <div className='flex flex-col items-center text-center'>
                <img src={Custom} alt="" className='bg-main p-5 rounded-full h-40 w-40 mb-2 shadow-lg'/>
                <h3 className='mb-3'>Custom Tasks</h3>
                <p>Need help with something unique? Request personalized assistance beyond our listed services. </p>
              </div>

            </div>

        </div>
    </section>
  )
}

export default Services