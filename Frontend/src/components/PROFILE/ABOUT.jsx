import React from 'react'

const ABOUT = () => {
  return (
    <div className='fex flex-col gap-12 h-60 w-85 border border-white/15 shadow-[0_0_15px_rgba(255,255,255,0.08)] rounded-2xl'>
      <div className='text-white font-bold text-2xl pl-4 pt-4'>
        About:
      </div>

<div className='text-white pt-4 pl-4 font-bold text-sm w-64'>
  <p>
    I like late nights, deep thoughts, and beautiful sky
  </p>
</div>


<div className='text-white pt-12 pl-4 font-bold text-sm w-64'>
    <h1 className='text-2xl font-bold'>
        Location:
    </h1>
  <p>
   Somewhere on Earth
  </p>
</div>

    </div>
  )
}

export default ABOUT
