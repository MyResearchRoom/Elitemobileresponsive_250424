import React from 'react';
import mission from "../../assets/About/mission.png";
import Engineer from "../../assets/About/Engineer.png"
import CoreValue from './compo/CoreValue';
import Team from './compo/Team';
const About = () => {
  return (
    <div className="relative sm:h-auto w-full">
      <img src={mission} alt="Mission" className="object-cover w-full h-[90vh]" />
      <div className="absolute w-[80%] h-auto sm:top-[200px] top-[250px] left-1/2 p-6 m-auto  transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
        <h1 className="text-2xl md:text-4xl text-left mb-4">Our Mission</h1>
        <hr className="border-white mb-10" />
        <h1 className="sm:text-lg text-xl md:text-4xl text-left text-balance mb-8 leading-8">
          We aim to maximize value through expert engineering design and simulation consulting for companies of all sizes.
        </h1>
        <p className="text-[16px] sm:text-[18px]  text-left sm:w-1/2 leading-6   text-gray-300">
          We are committed to providing customized solutions, support, and expertise to our clients, setting us apart from our competitors.
        </p>
      </div>


      {/* ****************8 */}

      <div className='relative'>
      <img src={Engineer} alt="Eng" className="object-cover w-full h-[100vh]" />
      <div className="absolute w-[80%] h-[300px] top-[200px] left-1/2 p-6 m-auto  transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
        <h1 className="text-2xl md:text-4xl text-left mb-4">Who We Are</h1>
        <hr className="border-white mb-6" />
        <h1 className="text-xl md:text-4xl text-left mb-8">
            <span className='text-yellow-400'>Elites Engineers</span> is an engineering design and simulation consultancy service firm based in Mumbai, India.
        </h1>
        <p className="text-[16px] text-left md:text-base text-balance sm:w-1/2 text-gray-200">
        We collaborate with clients across various industries, including oil and gas, pharmaceuticals, consumer products, turbomachinery, civil engineering, manufacturing, biomedical, power, aerospace, and nuclear sectors. Using cutting-edge tools and technologies, our team of engineers excels in solving intricate engineering problems.
        </p>
      </div>
      </div>


        <CoreValue />
        <Team/>
    </div>
  );
};

export default About;
