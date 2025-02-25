import React, { useEffect, useState } from 'react'
import Logo from '../../assets/images/kapitbahay-logo.png';
import Emergency from '../../assets/images/emergency.jpg';
import { BiPhoneCall, BiSolidMoon, BiSolidSun } from 'react-icons/bi';
import { FaCaretDown } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi';
import ResponsiveMenu from './ResponsiveMenu';



const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
  const [showMenu, setShowMenu] = useState(false);
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.removeItem("theme");
    }
  }, [theme])

  const toggleMenu =() => {
    setShowMenu(!showMenu);
  }

  return (
    <>
    <header className='fixed right-0 left-0 top-0 z-[99] bg-white border-b-[2px] dark:bg-gray-900 dark:text-white'>
      <nav className='container flex items-center justify-between h-[70px] py-3 cursor-pointer'>
        {/*Logo section*/}
        <div>
          <img src={Logo} alt="Kapitbahay Logo" className='w-20 h-20' />
        </div>

        {/*Desktop menu*/}
        <div className='hidden md:block'>
          <ul className='flex gap-10 font-poppins items-center'>
            <li className='group relative cursor-pointer'>
              <a href="#" className='flex items-center gap-[2px] h-[72px]'>Home
                <span><FaCaretDown className='transition-all duration-300 group-hover:rotate-180' />
                </span></a>
              {/* dropdown */}
              <div className='absolute -left-9 z-[99999] hidden w-[150px] bg-secondary p-2 rounded-md shadow-md text-white group-hover:block'>
                <ul className='space-y-3'>
                  <li className=' hover:text-black'>About Us</li>
                  <li className=' hover:text-black'>Services</li>
                  <li className=' hover:text-black'>Privacy Policy</li>
                </ul>
              </div>
            </li>

            <li className='group cursor-pointer'>
              <a href="#" className='flex items-center gap-[2px] h-[72px]'>Contacts
                <span><FaCaretDown className='transition-all duration-300 group-hover:rotate-180' />
                </span></a>
              {/*full dropdown */}
              <div className='absolute texyt-white left-0 z-[99999] w-full hidden bg-secondary p-3 rounded-md shadow-md text-white group-hover:block'>
                <div className='grid grid-cols-3 gap-5'>
                  <div className='overflow-hidden'>
                    <img src={Emergency} alt="" className='max-h-[300px] w-full rounded-b-3xl object-fill' />
                  </div>

                  <div className='col-span-2'>
                    <h3>Need a hand?</h3>
                    <p>Our hotlines your lifelines. Contact our Emergency Response Team for immediate concerns:</p>

                    <div className='grid grid-flow-col mt-4 gap-6 justify-between'>
                      <div>
                        <h4 className=''>Smart ERT hotline</h4>
                        <div className='flex items-center mb-5'>
                          <BiPhoneCall className='text-xl mr-1' />
                          <p className="text-lg">+91 123456789</p>
                        </div>

                        <h4 className=''>Globe ERT hotline</h4>
                        <div className='flex items-center mb-5'>
                          <BiPhoneCall className='text-xl mr-1' />
                          <p className="text-lg">+91 123456789</p>
                        </div>

                        <h4 className=''>Email</h4>
                        <div className='flex items-center mb-5'>
                          <MdEmail className='text-xl mr-1' />
                          <p className="text-lg">kapitbahay@gmail.com</p>
                        </div>
                      </div>

                      <div>
                        <h3 className='mb-2'>Our Offices</h3>

                        <div>
                          <h4>Las Piñas</h4>
                          <p>3rd Floor, Parking Building, Vista Mall Las Piñas, CV Starr Avenue, Philamlife Village, Las Piñas</p>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

              </div>
            </li>

            <li>Blogs</li>
            <li>Help Centre</li>

            {/*Light and dark mode*/}
            {theme === "dark" ? (
              <BiSolidSun className='text-2xl' onClick={() => setTheme("light")} />
            ) : (
              <BiSolidMoon className='text-2xl' onClick={() => setTheme("dark")} />
            )
            }

          </ul>
        </div>

        {/*mobile menu*/}
        <div className='flex  items-center gap-4 md:hidden'>
          {/*Light and dark mode*/}
          {theme === "dark" ? (
            <BiSolidSun className='text-2xl' onClick={() => setTheme("light")} />
          ) : (
            <BiSolidMoon className='text-2xl' onClick={() => setTheme("dark")} />
          )
          }

          {showMenu ? <HiMenuAlt1 onClick={toggleMenu} className='text-2xl cursor-pointer transition-all' /> : <HiMenuAlt3 onClick={toggleMenu} className='text-2xl cursor-pointer transition-all' />}
        </div>
      </nav>

    </header>

    {/* Mobile Menu */}
    <ResponsiveMenu showMenu = {showMenu} />
    </>
  )
}

export default Navbar