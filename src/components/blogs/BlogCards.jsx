import React from 'react';

const BlogCards = ({ img, title, description }) => {
  return (
    <div className='p-4 shadow-xl dark:bg-black dark:text-white bg-green-50 rounded-md'>
        <div className='overflow-hidden'>
            <img src={img} alt={title} className='mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110'/>
        </div>
        <div className='space-y-2 py-3'>
            <h3 className='line-clamp-2'>{title}</h3>
            <p className='line-clamp-3'>{description}</p>
        </div>
    </div>
  );
};

export default BlogCards;