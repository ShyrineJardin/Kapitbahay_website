import React from 'react'
import BlogCards from './BlogCards'
import Blog1 from '../../assets/images/blog1.jpg'
import Blog2 from '../../assets/images/blog2.jpg'
import Blog3 from '../../assets/images/blog3.png'



const Blogs = () => {
  return (
    <div className='dark:bg-gray-900 text-black dark:text-white'>
        <section className='container mb-10 py-8'> 
        <h2 className='mb-8 text-center py-2 pl-2'>Our Latest Blogs</h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>
            <BlogCards Img={Blog1}/>
            <BlogCards Img={Blog2}/>
            <BlogCards Img={Blog3   }/>
        </div>
    </section>
    </div>
  )
}

export default Blogs