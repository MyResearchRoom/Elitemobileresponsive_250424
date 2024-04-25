import React from 'react'




import serviceData from '../DATA/ServiceData'

const Service = () => {
  return (
    <div className=' h-auto w-full bg-black text-white p-6'>
    <div className='w-[80%] relative sm:left-24 mt-4'>
      <h1 className="text-2xl mb-4  md:text-4xl text-left relative ">Our Engineering Services</h1>
      <p>Enhancing Value Through Optimised Engineering Solutions</p>
    </div>

      <div className="flex flex-wrap justify-center items-center gap-2  bg-black mt-8">
        {serviceData.map((service, index) => (
          <div key={index} className="flex flex-col items-center w-[350px] p-10 h-[700px] gap-5" style={{backgroundColor:"rgba(36, 40, 52, 1)"}}>
            <img src={service.image} alt={service.title}  className="w-full h-auto rounded-md opacity-50	" />
            <button className="border font-semibold mt-2 p-4 rounded-xl w-full">{service.title}</button>
            <ul className="text-sm text-left w-full">
              {service.tasks.map((task, idx) => (
                <li key={idx} className='mb-1 font-semibold' >{task}</li>
              ))}
            </ul>
          </div>
        ))} 
      </div>
    </div>
  )
}

export default Service
