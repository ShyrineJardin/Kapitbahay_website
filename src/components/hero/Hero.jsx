import React from 'react'
import Banner from '../../assets/images/front.png';
import GooglePlay from '../../assets/images/google-play.png'
import Map from '../../assets/images/Map.jpg'

const Hero = () => {
  return (
    <div className='h-[650px] pt-15 md:h-[500px] bg-white dark:bg-gray-900 mb-5'>
        <section className='container flex flex-col items-center justify-between'>
            <div className='grid grid-cols-1 md:grid-cols-2 dark:text-white  pt-20'>
                <div 
                data-aos='fade-right'
                data-aos-duration='400'
                data-aos-once= 'true'
                className='flex flex-col items-center text-center gap-4 md:items-start md:text-left'>
                    <h2>Need a Helping Hand? Connect with Trusted Locals for Your Daily Tasks</h2>

                    <div className='bg-black dark:bg-white dark:text-black text-white p-2 rounded-lg mt-5 cursor-pointer mb-7'>
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

                <div 
                data-aos='fade-left'
                data-aos-duration='400'
                data-aos-once='true'
                className='relative mx-auto max-w-2xl p-4 rounded-full overflow-hidden'>
                    {/* Background Image */}
                    <div 
                        className="absolute inset-0 rounded-full"
                        style={{ 
                            backgroundImage: `url(${Map})`, 
                            backgroundSize: 'cover', 
                            backgroundPosition: 'center',
                            opacity: 0.3
                        }}>
                    </div>

                    {/* Foreground Image */}
                    <img src={Banner} alt="" className="relative rounded-full" />
                </div>
            </div>
        </section>
    </div>
  )
}

export default Hero     