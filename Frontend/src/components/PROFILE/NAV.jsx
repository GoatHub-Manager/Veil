import React from 'react'
import VEIL from './VEIL'
import COMMUNITY from './COMMUNITY'
import FOLLOWER from './FOLLOWER'
import FOLLOWING from './FOLLOWING'


const NAV = () => {
  return (
   <div className='bg-black h-16 flex justify-between border border-white/15 shadow-[0_0_15px_rgba(255,255,255,0.08)]'>
      <VEIL/>
      <COMMUNITY/>
      <FOLLOWER/>
      <FOLLOWING/>
    </div>
  )
}

export default NAV
