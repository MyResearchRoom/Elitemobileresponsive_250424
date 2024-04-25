import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const trust = [
  "Maximizing value from Engineering Design and Simulation",
  "10 years of Experience",
  "Serving reputed EPC Industries and manufacturing sector companies",
  "State of art tools and technology"
];

const TrustedBy = () => {

  return (
    <div className="bg-black p-6 w-full ">
      <h2 className="text-white font-semibold sm:text-3xl text-xl mb-4 sm:ml-[80px]">Why Choose Elite</h2>
      <hr className='sm:ml-[80px]' />
      <div className="flex flex-wrap sm:justify-evenly mt-[45px]">
        {trust.map((data, ind) => (
          <div key={ind} className="flex w-[200px]  items-center sm:mb-20 mb-5 border-l-4 sm:border-l-8 rounded border-blue-500 h-[100px] ">
            <p className="text-white ml-2 sm:text-[18px] text-[16px]">{data}</p>
          </div>
        ))}
      </div>

      <div className=' h-auto mt-4'>
        <p className='text-white sm:text-5xl text-2xl h-auto mb-8 sm:ml-[80px] sm:leading-[50px]'>We function at the vanguard of engineering Design and Analysis, and repeatedly endeavor to attain the best solutions for our customers.</p>
        {/* Use Link component for internal navigation */}
        <Link to="/about" className=' bg-blue-600 sm:w-[170px] sm:h-[50px] text-white font-semibold p-2 sm:ml-[80px] rounded-md'>See All Insights</Link>
      </div>
    </div>
  );
};

export default TrustedBy;
