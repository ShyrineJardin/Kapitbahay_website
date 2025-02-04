import React from 'react'
import Banner from '../../assets/images/hero-img.png';
import GooglePlay from '../../assets/images/google-play.png'

const Hero = () => {
  return (
    <div className='h-[650px] md:h-[500px] bg-white dark:bg-black'>
        <section className='container flex flex-col items-center justify-between'>
            <div className='grid grid-cols-1 md:grid-cols-2 dark:text-white  pt-20'>
                <div className='flex flex-col items-center text-center gap-4 md:items-start md:text-left'>
                    <h2>Need a Helping Hand? Connect with Trusted Locals for Your Daily Tasks</h2>

                    <div className='bg-black dark:bg-white dark:text-black text-white p-2 rounded-lg mt-5'>
                        <button>
                            <div className='flex flex-row gap-3 items-center'>
                                <img src={GooglePlay} alt="" className='w-8 h-8' />
                                <div className='flex flex-col text-left leading-none'>
                                    <p>Get it on</p>
                                    <h4>Google Play</h4>
                                </div>
                            </div>
                        </button>
                    </div>

                </div>

                <div className='mx-auto max-w-xl p-4'>
                    <img src={Banner} alt="" className=''/>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Hero     