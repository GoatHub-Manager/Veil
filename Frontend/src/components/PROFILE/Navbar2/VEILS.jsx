import React from 'react'
import {
  ArrowBigUp,
  ArrowBigDown,
  Bookmark,
  MoreHorizontal
} from 'lucide-react'

import prof2 from "../../../assets/prof2.jpg"

const VEILS = () => {
  return (

    <div className='flex flex-col gap-3 w-full  '>

      <div className='w-full bg-[#070707] border border-white/10 rounded-2xl p-4'>

        <div className='flex items-start justify-between'>

          <div className='flex gap-3 bg-[var(--bg-primary)]'>

            <img
              className='h-12 w-12 rounded-full object-cover border-2 border-purple-700'
              src={prof2}
              alt="profile"
            />

            <div className='flex flex-col'>

              <div className='flex items-center gap-2'>
                <h1 className='text-white text-lg font-bold'>
                  Anonymous
                </h1>

                <p className='text-gray-500 text-base'>
                  @anonymous_456
                </p>

                <p className='text-gray-500 text-sm'>
                  2h
                </p>
              </div>

              <p className='text-gray-500 text-sm'>
                2h
              </p>

            </div>

          </div>

          <MoreHorizontal className='text-white cursor-pointer h-5 w-5' />

        </div>

        <div className='mt-6'>
          <p className='text-white text-2xl leading-normal font-medium'>
            The right people will find you in your darkest moments. 💜
          </p>
        </div>

        <div className='flex items-center justify-between mt-6'>

          <div className='flex gap-6'>

            <div className='flex items-center gap-2 cursor-pointer'>
              <ArrowBigUp className='text-purple-600 h-7 w-7' />

              <p className='text-purple-600 text-lg font-semibold'>
                Grow
              </p>

              <p className='text-gray-400 text-lg'>
                1.2K
              </p>
            </div>

            <div className='flex items-center gap-2 cursor-pointer'>
              <ArrowBigDown className='text-gray-400 h-7 w-7' />

              <p className='text-gray-400 text-lg'>
                Not Grow
              </p>

              <p className='text-gray-400 text-lg'>
                132
              </p>
            </div>

          </div>

          <Bookmark className='text-gray-400 cursor-pointer h-7 w-7' />

        </div>

      </div>







      <div className='w-full bg-[#070707] border border-white/10 rounded-2xl p-4'>

        <div className='flex items-start justify-between ' >

          <div className='flex gap-3'>

            <img
              className='h-12 w-12 rounded-full object-cover border-2 border-purple-700'
              src={prof2}
              alt="profile"
            />

            <div className='flex flex-col'>

              <div className='flex items-center gap-2'>
                <h1 className='text-white text-lg font-bold'>
                  Anonymous
                </h1>

                <p className='text-gray-500 text-base'>
                  @anonymous_456
                </p>

                <p className='text-gray-500 text-sm'>
                  1d
                </p>
              </div>

              <p className='text-gray-500 text-sm'>
                1d
              </p>

            </div>

          </div>

          <MoreHorizontal className='text-white cursor-pointer h-5 w-5' />

        </div>

        <div className='mt-6'>
          <p className='text-white text-2xl leading-normal font-medium'>
            Silence is better than unnecessary words.
          </p>
        </div>

        <div className='flex items-center justify-between mt-6'>

          <div className='flex gap-6'>

            <div className='flex items-center gap-2 cursor-pointer'>
              <ArrowBigUp className='text-purple-600 h-7 w-7' />

              <p className='text-purple-600 text-lg font-semibold'>
                Grow
              </p>

              <p className='text-gray-400 text-lg'>
                2.1K
              </p>
            </div>

            <div className='flex items-center gap-2 cursor-pointer'>
              <ArrowBigDown className='text-gray-400 h-7 w-7' />

              <p className='text-gray-400 text-lg'>
                Not Grow
              </p>

              <p className='text-gray-400 text-lg'>
                210
              </p>
            </div>

          </div>

          <Bookmark className='text-gray-400 cursor-pointer h-7 w-7' />

        </div>

      </div>

    </div>
  )
}

export default VEILS