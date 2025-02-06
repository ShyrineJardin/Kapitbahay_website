import React from 'react'
import Kapitbuddy from '../../assets/images/install.png'
import GooglePlay from '../../assets/images/google-play.png'


const Install = () => {
  return (
        <section className=' bg-white dark:bg-gray-900 text-black dark:text-white'>            
            <div className='container items-center justify-between'>
                <div 
                data-aos='fade-down'
                data-aos-duration='400'
                data-aos-once= 'true'
                className='grid grid-cols-1 md:grid-cols-2 dark:text-white  pt-20 pb-20'>
                            <div className='flex flex-col items-center text-center gap-4 md:items-start md:text-left'>
                                <h2 className='mb-5'>Halina't Maging KapitBuddy</h2>
                                <p> Join our KapitBuddy community today! Earn extra income by helping neighbors with daily tasks—whether it’s running errands, home services, or event assistance. Work on your own schedule, connect with your community, and make a difference. Sign up now and start lending a hand! 🤝✨</p>

                                <div className='bg-black dark:bg-white dark:text-black text-white p-2 rounded-lg mt-5 cursor-pointer'>
                                    <button>
                                        <div className='flex flex-row gap-3 items-center'>
                                            <img src={GooglePlay} alt="" className='w-8 h-8' />
                                            <div className='flex flex-col text-left leading-0.5'>
                                                <p className='text-sm'>Get it on</p>
                                                <h4>Google Play</h4>
                                            </div>
                                        </div>
                                    </button>
                                </div>
            
                            </div>
            
                            <div className='mx-auto max-w-md p-4'>
                                <img src={Kapitbuddy} alt=""/>
                            </div>
                        </div>
            </div>
        </section>
  )
}

export default Install