import React from 'react'
import Logo from '../../assets/images/kapitbahay-logo.png'
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMailBulk, FaMobileAlt } from 'react-icons/fa'
import FooterLinks from './FooterLinks'

const Footer = () => {
    const importantLinks = [
        {
            name: "Home",
        },
        {
            name: "About Us",
        },
        {
            name: "Services",
        },
        {
            name: "Contact",
        },
    ];

    const usefulLinks = [
        {
            name: "Kapitbahay",
        },
        {
            name: "Kapitbuddy",
        },
        {
            name: "Privacy Policy",
        },
    ];
    
  return (
    <footer className='bg-white rounded-t-2xl text-black'>
        <div className=' mx-auto max-w-[1200px] p-4'> 
            <div className='grid py-5 md:grid-cols-3'>
                <div className='px-3 py-8'>
                    <img src={Logo} alt="" className='w-30 h-30' />
                    <h4 className='text-secondary ml-4'>Kapitbahay</h4>
                    <div className='flex items-center gap-3'>
                        <FaLocationArrow className='text-secondary text-3xl'/>
                        <p>3rd Floor, Parking Building, Vista Mall Las Piñas, CV Starr Avenue, Philamlife Village, Las Piñas</p>
                    </div>

                    <div className='flex items-center gap-3 mt-3'>
                        <FaMobileAlt className='text-secondary'/>
                        <p>+639 123 456 789</p>
                    </div>
                </div>

                    <div className='grid grid-cols-2 sm:grid-cols-3 md:pl-10 col-span-2'>
                        <div className='px-4 py-8'>
                            <h4 className='mb-5'>Important Links</h4>
                            <ul className='flex flex-col gap-3'>
                            <FooterLinks links={importantLinks}/>
                            </ul>
                        </div>

                        <div className='px-4 py-8'>
                            <h4 className='mb-5'>Useful Links</h4>
                            <ul className='flex flex-col gap-3'>
                            <FooterLinks links={usefulLinks}/>
                            </ul>
                        </div>
                       
                        <div className='px-4 py-8'>
                            <h4 className='mb-5'>Follow us on</h4>
                            <div className='flex gap-4'>
                                <a href="#"><FaFacebook className='text-3xl hover:text-secondary'/></a>
                                <a href="#"><FaInstagram className='text-3xl hover:text-secondary'/></a>
                                <a href="#"><FaLinkedin className='text-3xl hover:text-secondary'/></a>
                            </div>
                        </div>
                    </div>
                
            </div>

            <div className='bottom-footer'>
                <p className='border-t-2 border-gray-300/50 py-6 text-center'>Copyright © 2025. All rights reserved. </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer