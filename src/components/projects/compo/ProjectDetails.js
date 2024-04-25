import React from 'react'
import { useLocation } from 'react-router-dom';
import {useNavigate} from "react-router-dom"
const ProjectDetails = () => {
    const location = useLocation();
  const { projectData } = location.state;
  const navigate=useNavigate();
  const handleProj = (subproject) => {
    // navigate('/home/projdetails', { state: { data: homeData[index] } });
    navigate('/home/projdetails', { state: { data: subproject } });
  };
 
  return (
    <div className='sm:h-auto w-full bg-black text-white p-6'>
        <div className='sm:w-[80%] relative sm:left-24 mb-10'>
            <h1 className="text-2xl font-bold mb-4 md:text-4xl text-left">{projectData.category}</h1>
            <p>Enhancing Value Through Optimised Engineering Solutions</p>
        </div>

        {
            projectData.subprojects ? (
                <div className='sm:w-[80%]  h-auto relative sm:left-24'>
            {
                projectData.subprojects.map((value,index)=>{
                    return(
                        <div key={index} className={`sm:flex mb-11 ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
                        {/* Image */}
                            <div className='sm:w-3/5 w-full sm:h-[400px] h-[300px] mb-10'>
                                <img src={value.img} alt={value.description} className='h-full w-full object-cover' />
                            </div>
                        {/* Details */}
                            <div className='sm:w-2/5 sm:h-[400px] h-[300px]  flex flex-col sm:justify-center sm:items-center'>
                                <div className='sm:w-[80%] '>
                                    <div className='sm:flex gap-10 mb-5'>
                                        <p>Location : {value.loc}</p>
                                        <p>Date : {value.date}</p>
                                    </div>
                                    <h1 className='mb-5 font-semibold'>{value.title}</h1>
                                    {/* <p className='mb-5'>{value.description}</p> */}
                                    <button className='border p-2 rounded-xl hover:bg-blue-600 hover:border-none' onClick={()=>handleProj(value)}>View Details</button>
                                </div>
                            {/* Add other details here */}
                            </div>
                        </div>
                    )
                })
            }
        </div>
            ):(
                <>
                </>
            )
        }
    </div>
  )
}

export default ProjectDetails
