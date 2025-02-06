import React from 'react';
import BlogCards from './BlogCards';
import Blog1 from '../../assets/images/blog1.jpg';
import Blog2 from '../../assets/images/blog2.jpg';
import Blog3 from '../../assets/images/blog3.png';

const Blogs = () => {
  const blogData = [
    {
      img: Blog1,
      title: 'Earn Extra Income with Kapitbuddy',
      description: 'Discover how you can make extra cash with Kapitbuddy. Flexible hours and great opportunities await!'
    },
    {
      img: Blog2,
      title: 'Changing the Way We Get Things Done',
      description: 'From errands to support, Kapitbahay transforms daily tasks by bringing neighbors together, creating a more efficient and supportive environment.'
    },
    {
      img: Blog3,
      title: 'Building Stronger Neighborhoods',
      description: 'Discover how Kapitbahay fosters a sense of community, making it easier for neighbors to connect, help each other, and build lasting relationships.'
    }
  ];

  return (
    <div className='dark:bg-gray-900 text-black dark:text-white'>
        <section className='container mb-10 py-8'> 
          <div
          data-aos='fade-right'
          data-aos-duration='400'
          data-aos-once= 'true'>
          <h2 className='mb-8 text-center py-2 pl-2'>Our Latest Blogs</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>
            {blogData.map((blog, index) => (
              <BlogCards key={index} {...blog} />
            ))}
          </div>
          </div>
      </section>
    </div>
  );
};

export default Blogs;