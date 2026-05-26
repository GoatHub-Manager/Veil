import React from 'react'
import badge from "../../assets/badge.jpg"
import badge2 from "../../assets/badge2.jpg"

const COMMUNITIES = () => {
  return (
    <div className='h-80 w-85 flex flex-col gap-4 border border-white/15 shadow-[0_0_15px_rgba(255,255,255,0.08)] rounded-2xl scroll-smooth'>

      <div className='text-white text-2xl font-bold mt-2 ml-4'>
        Communities:
      </div>

      <div id="comm" className='flex flex-col overflow-y-auto gap-2 h-60 scrollbar-thin scrollbar-thumb-purple-700 scrollbar-track-transparent'>

      
        <div className='flex items-center justify-between px-4'>
          <div className='flex items-center gap-4'>
            <img
              className='cursor-pointer border border-purple-700 rounded-full h-12 w-12 object-cover'
              src={badge}
              alt="badge"
            />

            <div className='flex flex-col'>
              <p className='text-white font-semibold'>Late Night Talks</p>
              <p className='text-gray-500 text-sm'>24.5k Members</p>
            </div>
          </div>

          <button className='text-purple-600 text-sm font-bold cursor-pointer'>
            Joined
          </button>
        </div>

   
        <div className='flex items-center justify-between px-4'>
          <div className='flex items-center gap-4'>
            <img
              className='cursor-pointer border border-purple-700 rounded-full h-12 w-12 object-cover'
              src={badge2}
              alt="badge"
            />

            <div className='flex flex-col'>
              <p className='text-white font-semibold'>Deep Thoughts</p>
              <p className='text-gray-500 text-sm'>18.7k Members</p>
            </div>
          </div>

          <button className='text-purple-600 text-sm font-bold cursor-pointer'>
            Joined
          </button>
        </div>

  
        <div className='flex items-center justify-between px-4'>
          <div className='flex items-center gap-4'>
            <img
              className='cursor-pointer border border-purple-700 rounded-full h-12 w-12 object-cover'
              src={badge}
              alt="badge"
            />

            <div className='flex flex-col'>
              <p className='text-white font-semibold'>Photography</p>
              <p className='text-gray-500 text-sm'>75.5k Members</p>
            </div>
          </div>

          <button className='text-purple-600 text-sm font-bold cursor-pointer'>
            Joined
          </button>
        </div>


        <div className='flex items-center justify-between px-4'>
          <div className='flex items-center gap-4'>
            <img
              className='cursor-pointer border border-purple-700 rounded-full h-12 w-12 object-cover'
              src={badge2}
              alt="badge"
            />

            <div className='flex flex-col'>
              <p className='text-white font-semibold'>Anime Vibes</p>
              <p className='text-gray-500 text-sm'>16.2k Members</p>
            </div>
          </div>

          <button className='text-purple-600 text-sm font-bold cursor-pointer'>
            Joined
          </button>
        </div>

  
        <div className='flex items-center justify-between px-4'>
          <div className='flex items-center gap-4'>
            <img
              className='cursor-pointer border border-purple-700 rounded-full h-12 w-12 object-cover'
              src={badge}
              alt="badge"
            />

            <div className='flex flex-col'>
              <p className='text-white font-semibold'>Night Coders</p>
              <p className='text-gray-500 text-sm'>9.8k Members</p>
            </div>
          </div>

          <button className='text-purple-600 text-sm font-bold cursor-pointer'>
            Joined
          </button>
        </div>

      </div>
    </div>
  )
}

export default COMMUNITIES