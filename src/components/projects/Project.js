import React from 'react'



import { useNavigate } from 'react-router-dom'


import MainData from '../DATA/MainData';
const Project = () => {
  
    const navigate=useNavigate()
    function handleProject(projectKey){
     navigate('/project/projectDetails', { state: { projectData: MainData[projectKey] } })
    }

    return (
      <div className=' h-auto w-full bg-black text-white p-6'>
        <div className='sm:w-[80%] relative sm:left-24 mb-6'>
            <h1 className="text-2xl  mb-4 md:text-4xl text-left">Our Engineering Projects</h1>
            <p>Enhancing Value Through Optimised Engineering Solutions</p>
        </div>
  
        <div className="flex flex-wrap justify-center items-center gap-2  h-auto  bg-black">
          { Object.keys(MainData).map((key, index) => {
            const project = MainData[key];
            return (
              <div key={index} className="relative w-[350px] sm:h-[400px] h-auto gap-5 sm:mb-0 mb-4">
              <img src={project.image} alt={project.title} className="w-full sm:h-full h-[500px]    opacity-50 transition-opacity duration-300 hover:opacity-80" />
              <div className=" h-[55%] w-full absolute bottom-0 p-2 backdrop-filter sm:backdrop-blur-md">
                <div className='-mt-4'>
                    <h1 className="text-white font-semibold text-2xl   p-2 ">{project.category}</h1>
                    <p className="text-white sm:text-xs  text-[14px]  p-2 ">{project.description}</p>
                </div>
                <button className='p-[10px] rounded-full absolute bottom-5 w-[150px]' onClick={() => handleProject(key)} style={{backgroundColor:"rgba(58, 106, 253, 1)"}}>View Projects</button>
              </div>
            </div>
            )
            
          })}
        </div>

     
      </div>
    );
  };
  
  export default Project;