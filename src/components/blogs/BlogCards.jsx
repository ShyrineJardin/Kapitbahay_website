import React from 'react'

const BlogCards = ({Img}) => {
  return (
    <div className='p-4 shadow-lg dark:bg-black dark:text-white'>
        <div className='overflow-hidden'>
            <img src={Img} alt="" className='mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110'/>
        </div>

        <div className='space-y-2 py-3'>
            <h3>Gusto mo ba ng extra income? Apply na Kapitbuddy</h3>
            <p className='line-clamp-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis et dolorem sunt, maiores quae eligendi ipsum, repudiandae necessitatibus at harum illo a laborum exercitationem, atque optio minus cumque quibusdam voluptatibus. </p>
        </div>
    </div>
  )
}

export default BlogCards