



import React from 'react';
import coreValueData from '../../DATA/coreValueData';

const CoreValue = () => {
  return (
    <div className="p-6 bg-black  text-white   flex flex-col justify-center items-center">
      <div className='w-[80%] '>
        <h1 className="text-2xl md:text-4xl  mb-4 text-left">Core Values</h1>
        <hr className="mb-6  text-gray-400" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto w-[80%]   justify-center items-center ">
        {coreValueData.map((value, index) => (
          <div key={index} className="flex flex-col  sm:h-[150px] h-auto  w-full">
            <div className='flex mb-6 gap-4'>
                <img src={value.icon} className='h-[30px] sm:h-[50px]'/>
                <h2 className="sm:text-xl font-semibold  text-yellow-400 sm:mt-2">{value.title}</h2>
            </div>
            <p className="text-sm">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreValue;
