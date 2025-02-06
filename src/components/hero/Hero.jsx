import React from 'react'
import Banner from '../../assets/images/front.png';
import GooglePlay from '../../assets/images/google-play.png'

const Hero = () => {
  return (
    <div className='h-[650px] pt-15 md:h-[500px] bg-white dark:bg-gray-900'>
        <section className='container flex flex-col items-center justify-between'>
            <div className='grid grid-cols-1 md:grid-cols-2 dark:text-white  pt-20'>
                <div 
                data-aos='fade-right'
                data-aos-duration='400'
                data-aos-once= 'true'
                className='flex flex-col items-center text-center gap-4 md:items-start md:text-left'>
                    <h2>Need a Helping Hand? Connect with Trusted Locals for Your Daily Tasks</h2>

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

                <div
                data-aos='fade-left'
                data-aos-duration='400'
                data-aos-once= 'true'
                 className='mx-auto max-w-2xl p-4'>
                    <img src={Banner} alt=""/>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Hero     