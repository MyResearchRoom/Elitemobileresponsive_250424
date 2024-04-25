import React,{useState,useEffect} from 'react'

import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useNavigate} from "react-router-dom"
// import homeData from "../../DATA/homeData"
import MainData from '../../DATA/MainData';
const ProjectCarousel = () => {

    
      const [slidesToShow, setSlidesToShow] = useState(3); // Default slides to show

      useEffect(() => {
          const handleResize = () => {
              // Adjust slides to show based on screen width
              if (window.innerWidth <= 768) {
                  setSlidesToShow(1);
              } else {
                  setSlidesToShow(3);
              }
          };
  
          // Listen for window resize events
          window.addEventListener('resize', handleResize);
  
          // Cleanup event listener on component unmount
          return () => {
              window.removeEventListener('resize', handleResize);
          };
      }, []); 
      var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1
      };

      const navigate=useNavigate();
      const allSubprojects = Object.keys(MainData).flatMap(key => MainData[key].subprojects);

      function handleProj(subproject){
        // navigate('/home/projdetails', { state: { data: homeData[ind] } })
        // navigate(`/home/${projectKey}/projdetails`, { state: { data: MainData[projectKey].subprojects[ind] } });
        navigate('/home/projdetails', { state: { data: subproject } });
      }
     

  return (
    <div className='bg-black w-full p-6'>
        <h1 className='text-white sm:text-3xl text-xl font-semibold sm:ml-[80px] mb-4'>Our Projects</h1>
        <hr className='sm:ml-[80px] mb-4'/>
        <div className='w-[85%] m-auto '>
      {/* <div className='mt-10 h-[500px] w-full '>
      <Slider {...settings} >
        {
            homeData.map((d,ind)=>(
                <div key={ind} className='flex  rounded-md relative sm:w-[450px] w-full ' style={{height:"400px"}}>
                    <img src={d.imagePath} className='rounded-2xl opacity-50 sm:w-[330px] w-full cursor-pointer' style={{height:"400px"}} onClick={()=>handleProj(ind)} />
                    <div className="absolute bottom-0 left-0 right-0 sm:w-[300px] py-4 px-6 text-white">
                        <p className='text-2xl font-bold'>Lorem ipsum Dolor</p>
                        <p className="text-base text-slate-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel justo sit amet nunc facilisis blandit.</p>
                        <p className="text-yellow-400 text-xl font-semibold  rounded-md mt-2 cursor-pointer" onClick={()=>handleProj(ind)}>Read more</p>
                     </div>
                </div>
            ))
        }
        </Slider>
      </div> */}



      
          <div className='mt-10 h-[500px] w-full ' >
              <Slider {...settings} >
              {allSubprojects.map((subproject, index) => (
              <div key={index} className='flex  rounded-md relative sm:w-[450px] w-full ' style={{ height: "400px" }}>
                <img src={subproject.img} alt='' className='rounded-2xl opacity-50 sm:w-[330px] w-full cursor-pointer' style={{ height: "400px" }} onClick={() => handleProj(subproject)} />
                <div className="absolute bottom-0 left-0 right-0 sm:w-[300px] py-4 px-6 text-white">
                  {/* <p className='text-2xl font-bold'>{subproject.text}</p> */}
                  <p className="text-xl text-white">{subproject.title}</p>
                  <p className="text-yellow-400 text-xl font-semibold  rounded-md mt-2 cursor-pointer" onClick={() => handleProj(subproject)}>Read more</p>
                </div>
              </div>
            ))}
              </Slider>
            </div>
    
    </div>
    </div>
  )
}



export default ProjectCarousel
