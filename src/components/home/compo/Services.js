import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Finite from "../../../assets/Finite.png"
import fluid from "../../../assets/Fluid.png"
import piping from "../../../assets/piping.png"
import pressure from "../../../assets/pressure.png"
import Structural from "../../../assets/Structural.png"
import Solar from "../../../assets/Solar.png";

const Services = () => {
  const serviceItems = [
    { image: Finite, text: 'Finite Element Analysis' },
    { image: fluid, text: 'Computational Fluid Dynamics' },
    { image: piping, text: 'Piping Layout and Analysis' },
    { image: pressure, text: 'Pressure Vessel& Static Equipment' },
    { image: Structural, text: 'Structural Engineering' },
    { image: Solar, text: 'Solar Plant Development' },
  ];

  return (
    <div className='bg-black p-6 h-auto'>
      <h1 className='text-white sm:ml-[80px] mb-4 sm:text-3xl text-xl font-semibold'>Our Services</h1>
      <hr className='sm:ml-[80px]' />
      <div className="flex flex-wrap justify-center  items-center gap-4 font-semibold mt-10">
        {serviceItems.map((item, ind) => (
          <div key={ind} className="relative rounded-md hover:bg-yellow-300 text-yellow-300  hover:text-white hover:bg-opacity-50 transition duration-500 ease-in-out cursor-pointer">
            <img src={item.image} alt="Service" className="w-[350px] rounded-md transition-opacity duration-300 hover:opacity-50 opacity-50" style={{ boxShadow: "0px -23px 25px 0px rgba(0, 0, 0, 0.17) inset, 0px -36px 30px 0px rgba(0, 0, 0, 0.15) inset, 0px -79px 40px 0px rgba(0, 0, 0, 0.1) inset, 0px 2px 1px rgba(0, 0, 0, 0.06), 0px 4px 2px rgba(0, 0, 0, 0.09), 0px 8px 4px rgba(0, 0, 0, 0.09), 0px 16px 8px rgba(0, 0, 0, 0.09)"}} />
            <p className="absolute bottom-0 text-center text-xl p-2 w-full">{item.text}</p>
          </div>
        ))}
      </div>

      <div className='mt-10 h-[50px]'>
        {/* Use Link component for internal navigation */}
        <Link to="/catalog" className=' bg-blue-600 sm:w-[170px] w-[120px] sm:h-full sm:ml-[80px] p-2 rounded-md text-white font-semibold'>See Catalog</Link>
      </div>
    </div>
  );
};

export default Services;
