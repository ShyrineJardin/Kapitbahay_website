import React from 'react'
import About_img from '../../assets/images/about-section.png';
import Mission_img from '../../assets/images/section.png';

const About = ({ reverse, img }) => {
    return (
        <section className='text-black dark:text-white bg-white dark:bg-gray-900'>
            <div 
            data-aos='fade-right'
            data-aos-duration='400'
            data-aos-once= 'true'
            className='container flex flex-col items-center justify-center py-10  md:h-[500px]'>
                <div className='grid grid-cols-1 items-center gap-4 md:grid-cols-2'>
                    <div>
                        <h2 className='py-5'>Birth of Kapitbahay</h2>
                        <p>
                            At FourPoint.Zero, three 4th year interns—Miguel, Aya, and Jiro—set out to solve a common problem: finding <b>trusted local help for daily tasks</b>. Inspired by Jiro’s grandmother and their own experiences, they built <b>Kapitbahay</b>, a hyper-local platform connecting neighbors for errands, home services, and more. Through late nights, debugging struggles, and countless coffee runs, they developed an <b>MVP in just three months</b>. Their first successful task—a student helping an elderly neighbor set up WiFi—proved they were onto something big. By March 2025, Kapitbahay was born —a community-driven solution where help is always just around the corner. 🚀
                        </p>
                    </div>

                    <div >
                        <img src={About_img} alt="" className='mx-auto w-full max-w-[400px]' />
                    </div>

                </div>
            </div>


            <div
            data-aos='fade-left'
            data-aos-duration='400'
            data-aos-once= 'true'
            className='container flex flex-col items-center justify-center py-10  md:h-[500px]'>
                <div className='grid grid-cols-1 items-center gap-4 md:grid-cols-2'>
                    <div className='flex align-middle justify-center'>
                        <img src={Mission_img} alt="" className='mx-auto max-w-full hidden md:block' />
                    </div>

                    <div>
                        <h2 className='py-5'>Our Mission</h2>
                        <p>
                        To connect communities by providing a safe, reliable platform where trusted KapitBuddies assist with everyday tasks, making life easier for everyone.                        </p>

                        <h2 className='py-5'>Our Vision</h2>
                        <p>
                        Kapitbahay aims to build a trusted, community-driven platform that connects individuals with reliable local helpers. We strive to make daily tasks easier, create earning opportunities, and strengthen neighborhood connections through safe, accessible, and efficient services.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About