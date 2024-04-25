

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import testimonials from '../../DATA/TestimonialData';
const Testimonial = () => {
  

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  return (
    <div className='p-6 justify-center items-center bg-gray-900 text-white w-full'>
      <h1 className='sm:text-3xl text-xl font-semibold mb-4 sm:ml-[80px]'>Testimonial</h1>
      <hr className='sm:ml-[80px] mb-10'/>
      <div className='flex  sm:justify-between sm:ml-[80px] sm:items-center overflow-x-auto custom-scrollbar' style={{  maxHeight: 'calc(80vh - 20px)',maxWidth:'100%' }}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className='w-[300px] mb-4 mr-10'>
            <div className='flex mb-10'>
              <div className='w-2 h-48 bg-blue-500 mr-4 rounded-md'></div>
              <div className='w-[280px] text-[18px] leading-8'>{testimonial.text}</div>
            </div>
            <div className='flex'>
              <div className='mr-4'>
                <img src={testimonial.image} className='h-[70px] rounded-md' alt='testimonial' />
              </div>
              <div className=''>
                <p className='text-[16px]'>{testimonial.name}</p>
                <p className='text-gray-300 text-[16px]'>{testimonial.position},</p>
                <p className='text-gray-300 text-[16px]'>{testimonial.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
