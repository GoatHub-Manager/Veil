import React from 'react'
import badge from "../../assets/badge.jpg"
import badge2 from "../../assets/badge2.jpg"

const BADGE = () => {
  return (
    <div className='h-40 w-80 border border-white/15 shadow-[0_0_15px_rgba(255,255,255,0.08)] rounded-2xl'>
   <div className='text-white font-bold text-2xl pl-4 pt-2'>
    Badges:
   </div>


   <div className='flex overflow-hidden gap-2'>
      <img  className='cursor-pointer border-purple-600 rounded-[50%] mt-4 ml-4 h-12' src={badge} alt="badge" />
      <img  className='cursor-pointer border-purple-600 rounded-[50%] mt-4 ml-4 h-12' src={badge2} alt="badge" />
      <img  className='cursor-pointer border-purple-600 rounded-[50%] mt-4 ml-4 h-12' src={badge} alt="badge" />
      <img  className='cursor-pointer border-purple-600 rounded-[50%] mt-4 ml-4 h-12' src={badge2} alt="badge" />
   </div>
    </div>
  )
}

export default BADGE
