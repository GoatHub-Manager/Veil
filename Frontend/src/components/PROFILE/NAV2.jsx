import React, { useState } from 'react'
import VEILS from './VEILS'
import REPLIES from './REPLIES'
import SAVED from './SAVED'
import UPVOTED from './UPVOTED'

const NAV2 = () => {

  const [activeTab, setActiveTab] = useState("veils")

  return (
    <div className='w-200 '>

      <div className='flex bg-black h-16  justify-between border border-white/15 shadow-[0_0_15px_rgba(255,255,255,0.08)]'>

        <button
          onClick={() => setActiveTab("veils")}
          className={`cursor-pointer text-lg font-semibold transition-all duration-300 pb-3
          ${
            activeTab === "veils"
              ? "text-purple-600 border-b-2 border-purple-600"
              : "text-gray-500"
          }`}
        >
          Veils
        </button>

        <button
          onClick={() => setActiveTab("replies")}
          className={`cursor-pointer text-lg font-semibold transition-all duration-300 pb-3
          ${
            activeTab === "replies"
              ? "text-purple-600 border-b-2 border-purple-600"
              : "text-gray-500"
          }`}
        >
          Replies
        </button>

        <button
          onClick={() => setActiveTab("saved")}
          className={`cursor-pointer text-lg font-semibold transition-all duration-300 pb-3
          ${
            activeTab === "saved"
              ? "text-purple-600 border-b-2 border-purple-600"
              : "text-gray-500"
          }`}
        >
          Saved
        </button>

        <button
          onClick={() => setActiveTab("upvoted")}
          className={`cursor-pointer text-lg font-semibold transition-all duration-300 pb-3
          ${
            activeTab === "upvoted"
              ? "text-purple-600 border-b-2 border-purple-600"
              : "text-gray-500"
          }`}
        >
          Upvoted
        </button>

      </div>


   
      <div className='mt-6'>

        {activeTab === "veils" && <VEILS />}

        {activeTab === "replies" && <REPLIES />}

        {activeTab === "saved" && <SAVED />}

        {activeTab === "upvoted" && <UPVOTED />}

      </div>

    </div>
  )
}

export default NAV2