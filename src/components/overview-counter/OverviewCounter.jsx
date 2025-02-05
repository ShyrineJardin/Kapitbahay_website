import React from 'react'
import CountUp from 'react-countup'

const OverviewCounter = () => {
  return (
    <section className='dark:bg-gray-900 container h-12 md:h-32 p-3'>
        <div className='grid grid-cols-4 divide-x divide-slate-700 mx-auto md:max-w-[800px] shadow-xl w-full bg-main text-black dark:text-white -translate-y-13 md:-translate-y-8 my-4 md:p-5 p-3'>
            <div className='flex flex-col justify-center items-center'>
                <h2>
                    <CountUp end={1500} suffix='+' duration={2.75}></CountUp>
                </h2>
                <p className='mt-1 md:text-lg text-xs'>Downloads</p>
            </div>

            <div className='flex flex-col justify-center items-center'>
                <h2>
                    <CountUp end={950} suffix='+' duration={2.75}></CountUp>
                </h2>
                <p className='mt-1 md:text-lg text-xs'>Kapitbuddy</p>
            </div>

            <div className='flex flex-col justify-center items-center'>
                <h2>
                    <CountUp end={24} duration={2.75}></CountUp>
                </h2>
                <p className='mt-1 md:text-lg text-xs'>Hours Availability</p>
            </div>

            <div className='flex flex-col justify-center items-center'>
                <h2>
                    <CountUp end={1} duration={2.75}></CountUp>
                </h2>
                <p className='mt-1 md:text-lg text-xs'>Services Area</p>
            </div>
        </div>
    </section>
  )
}

export default OverviewCounter