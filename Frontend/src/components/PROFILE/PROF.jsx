import React from 'react'
import prof_page_background from '../../assets/prof_page_background.jpg'
import prof2 from "../../assets/prof2.jpg"
import BIO from './BIO.jsx'
import NAV from './Navbar/NAV.jsx'
import ABOUT from './ABOUT.jsx'
import BADGE from './BADGE.jsx'
import COMMUNITIES from './COMMUNITIES.jsx'
import NAV2 from './Navbar2/NAV2.jsx'

const PROF = () => {
  return (
    <div className='flex flex-col gap-4 '>
      <div className='bg-cover  h-120 w-200 ml-70 mt-16 rounded-2xl border border-white/15 shadow-[0_0_15px_rgba(255,255,255,0.08)]'
      style={{backgroundImage:`url(${prof_page_background})`}}>

        <div className='rounded-[50%] h-60 w-60 mt-30 ml-10 border border-4 border-purple-600 cursor-pointer'>
                    <div style={{backgroundImage:`url(${prof2})`}} className='bg-center h-full w-full bg-cover rounded-[50%]'></div>
        </div>

        <BIO/>


        <button className='rounded-2xl bg-black text-purple-500 text-xl cursor-pointer ml-68 mb-80 w-35'>Edit Profile</button>
        <div className='mt-[-15.6rem]'>
              <NAV/>
        </div>


        <div className='ml-205 mt-[-30.5rem]'>
          <ABOUT/>
        </div>


        <div className='ml-205 pt-4'>
          <BADGE/>
        </div>

           <div className='ml-205 pt-4'>
          <COMMUNITIES/>
        </div>

        <div className='mt-[-16rem]'>
          <NAV2/>
        </div>
  

    </div>
    </div>
  )
}

export default PROF
