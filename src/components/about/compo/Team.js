import React from 'react'

import Linkedin from "../../../assets/About/Linkedin.png"

import TeamMember from '../../DATA/teamData'
import { Link } from 'react-router-dom'
const Team = () => {
  return (
    <div className="p-6 bg-black text-white h-auto">
      <h1 className="text-2xl md:text-4xl  mb-4 sm:ml-[120px] ">Meet Our Team</h1>
      <hr className="mb-10 sm:ml-[120px] ml-6" />

      <div className='flex flex-wrap justify-center h-auto  '>
        {
            TeamMember.map((value, index)=>{
                return(
                    <div key={index} className='mr-6 sm:mb-0  relative'>
                        <img src={value.image} alt='' className='sm:h-[400px] sm:w-[350px] transition-opacity mb-4 duration-300 hover:opacity-50'/>
                        <div className="absolute inset-0  flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50 text-white">
                            <Link to={value.links}><img src={Linkedin} alt="" className='h-[70px] transition-opacity duration-300 hover:opacity-50'/></Link>
                        </div>
                        <p className='text-center'>{value.name}</p>
                        <p className='text-center mb-4'>{value.designation}</p>
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default Team

