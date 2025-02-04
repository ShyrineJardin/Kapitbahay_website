import React from 'react'

const ResponsiveMenu = ({showMenu}) => {
  return (
    <div className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col  justify-between bg-secondary px-8 pb-6 pt-24 text-white transition-all duration-200 md:hidden`}>
        

        <div>
            <nav>
                <ul className='space-y-4 text-xl'>
                    <li>
                        <a href="#" className='mb-5 inline-block'>Home</a>
                    </li>
                    <li>
                        <a href="#" className='mb-5 inline-block'>About Us</a>
                    </li>
                    <li>
                        <a href="#" className='mb-5 inline-block'>Services</a>
                    </li>
                    <li>
                        <a href="#" className='mb-5 inline-block'>Blog</a>
                    </li>
                    <li>
                        <a href="#" className='mb-5 inline-block'>Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
        <div className='footer'>
        ©2025 All Rights  Reserved
        </div>

      </div>

      
  )
}

export default ResponsiveMenu