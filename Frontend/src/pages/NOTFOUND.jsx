import React from 'react'
import { useNavigate } from 'react-router-dom'

const NOTFOUND = () => {
      const navigate = useNavigate();

  return (
    <>

      <style>{`

        @keyframes float {

          0%,100% { transform: translateY(0) }

          50% { transform: translateY(-12px) }

        }

        @keyframes pulse-ring {

          0%,100% { opacity:0.4; transform:scale(1) }

          50% { opacity:0.8; transform:scale(1.08) }

        }

        @keyframes glitch1 {

          0%,94%,100% {

            clip-path: inset(0 0 100% 0);

            transform: translate(0);

          }

          95% {

            clip-path: inset(10% 0 60% 0);

            transform: translate(-4px,0);

          }

          97% {

            clip-path: inset(50% 0 20% 0);

            transform: translate(4px,0);

          }

        }

        @keyframes glitch2 {

          0%,92%,100% {

            clip-path: inset(0 0 100% 0);

            transform: translate(0);

          }

          93% {

            clip-path: inset(60% 0 10% 0);

            transform: translate(4px,0);

          }

          96% {

            clip-path: inset(20% 0 50% 0);

            transform: translate(-4px,0);

          }

        }

        @keyframes fadeup {

          from {

            opacity:0;

            transform:translateY(18px);

          }

          to {

            opacity:1;

            transform:translateY(0);

          }

        }

        @keyframes story-pulse {

          0%,100% {

            box-shadow:0 0 0 0 rgba(168,85,247,0);

          }

          50% {

            box-shadow:0 0 0 5px rgba(168,85,247,0.18);

          }

        }

        @keyframes particle {

          0% {

            transform:translateY(0) translateX(0);

            opacity:0.7;

          }

          100% {

            transform:translateY(-180px) translateX(var(--dx));

            opacity:0;

          }

        }

        @keyframes spin-slow {

          from { transform:rotate(0deg) }

          to { transform:rotate(360deg) }

        }

        @keyframes blink {

          0%,100% { opacity:1 }

          50% { opacity:0 }

        }

      `}</style>

      <div className="min-h-screen bg-[#080812] flex items-center justify-center overflow-hidden relative px-5 py-10 font-sans">

    

        <div className="absolute w-[380px] h-[380px] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.22)_0%,transparent_70%)] top-[-80px] left-[-100px] animate-[pulse-ring_6s_ease-in-out_infinite]" />

        <div className="absolute w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(236,72,153,0.16)_0%,transparent_70%)] bottom-[-60px] right-[-80px] animate-[pulse-ring_8s_ease-in-out_infinite]" />

        <div className="relative z-10 flex flex-col items-center">

  
          <div className="relative mb-7 animate-[float_4s_ease-in-out_infinite]">

            <div className="absolute inset-[-10px] rounded-full border border-purple-500/20 animate-[spin-slow_12s_linear_infinite]" />

            <div className="absolute inset-[-20px] rounded-full border border-dashed border-purple-500/10 animate-[spin-slow_20s_linear_infinite_reverse]" />

            <div className="w-[100px] h-[100px] rounded-full bg-gradient-to-br from-[#1e1030] to-[#2d1a4a] border border-purple-400/40 flex items-center justify-center animate-[story-pulse_3s_ease-in-out_infinite]">

              <svg

                width="46"

                height="46"

                viewBox="0 0 24 24"

                fill="none"

                stroke="#a78bfa"

                strokeWidth="1.4"

                strokeLinecap="round"

                strokeLinejoin="round"

              >

                <path d="M12 2C6.5 2 2 6 2 11c0 2.4.9 4.6 2.4 6.3L3 21l3.8-1.4A10 10 0 0 0 12 21c5.5 0 10-4 10-9s-4.5-10-10-10z"/>

                <circle cx="9" cy="11" r="1.2" fill="#a78bfa" stroke="none"/>

                <circle cx="15" cy="11" r="1.2" fill="#a78bfa" stroke="none"/>

                <path d="M9 14.5c.8.8 2.4 1 3 0" strokeWidth="1.2"/>

              </svg>

            </div>

          </div>



          <div className="relative mb-2">

            <div className="text-[110px] font-medium tracking-[-6px] text-transparent [-webkit-text-stroke:1.5px_rgba(168,85,247,0.5)] leading-none select-none animate-[fadeup_0.7s_ease_both]">

              404

            </div>

            <div className="absolute inset-0 text-[110px] font-medium tracking-[-6px] bg-gradient-to-br from-purple-600 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent opacity-90 leading-none">

              404

            </div>

            <div className="absolute inset-0 text-[110px] font-medium tracking-[-6px] text-pink-500 leading-none animate-[glitch1_4s_steps(1)_infinite]">

              404

            </div>

            <div className="absolute inset-0 text-[110px] font-medium tracking-[-6px] text-purple-600 leading-none animate-[glitch2_4s_steps(1)_infinite]">

              404

            </div>

          </div>

    

          <h1 className="text-[19px] text-[#e2d9f3] font-medium mb-2 animate-[fadeup_0.7s_0.15s_ease_both]">

            This veil was lifted too far.

          </h1>

          <p className="text-sm text-[#5a4f72] text-center max-w-[320px] leading-7 mb-8 animate-[fadeup_0.7s_0.25s_ease_both]">

            The page you're looking for went fully anonymous — even we can't trace it.

            <span className="inline-block w-[2px] h-[11px] bg-purple-400 ml-1 align-middle animate-[blink_1s_step-start_infinite]" />

          </p>



          <div className="flex gap-2 flex-wrap justify-center mb-7 animate-[fadeup_0.7s_0.35s_ease_both]">

            <div className="px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-xs text-purple-300 hover:bg-purple-500/20 transition cursor-pointer">

              Trending

            </div>

            <div className="px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-xs text-purple-300 hover:bg-purple-500/20 transition cursor-pointer">

              New posts

            </div>

            <div className="px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-xs text-purple-300 hover:bg-purple-500/20 transition cursor-pointer">

              Explore

            </div>

          </div>

       

          <div className="flex gap-3 mb-10 animate-[fadeup_0.7s_0.5s_ease_both]">

            <button 
                  onClick={() => navigate("/")}
                  className="px-7 py-3 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-500 text-white text-sm hover:scale-[0.98] transition">

              Back to feed

            </button>

            <button 
                 onClick={() => navigate(-1)}
            className="px-6 py-3 rounded-full border border-white/10 text-[#5a4f72] text-sm hover:text-purple-300 hover:border-purple-400/40 transition">

              Go back

            </button>

          </div>

  

          <div className="w-[360px] max-w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent mb-6" />

       
          <div className="flex gap-4 items-end">

            {["ghost_01", "anon_99", "you", "hidden", "shade_7"].map((item, index) => (

              <div key={index} className="flex flex-col items-center gap-2 cursor-pointer">

                <div className={`rounded-full p-[2.5px] ${item === "you"

                  ? "bg-gradient-to-br from-purple-600 to-pink-500"

                  : "bg-[#1c1c30]"

                }`}>

                  <div className={`w-[46px] h-[46px] rounded-full border-2 border-[#080812] flex items-center justify-center text-sm

                  ${item === "you"

                    ? "bg-[#1a1030] text-purple-300"

                    : "bg-[#10101e] text-[#3a3060]"

                  }`}>

                    👁

                  </div>

                </div>

                <span className={`text-[10px] ${item === "you"

                  ? "text-purple-300"

                  : "text-[#3a3060]"

                }`}>

                  {item}

                </span>

              </div>

            ))}

          </div>

  

          <div className="mt-5 text-[11px] text-[#2e2848] tracking-wider font-mono animate-[fadeup_0.7s_0.7s_ease_both]">

            your identity stays hidden, always.

          </div>

        </div>

      </div>

    </>
  )
}

export default NOTFOUND
