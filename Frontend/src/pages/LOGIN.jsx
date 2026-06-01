import React, { useState } from 'react'
import logo from "../assets/veil_logo.png"
import register_page_background from "../assets/login_page_background.jpg"
import { Heart } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

const LOGIN = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email: username, password })
      });
      const data = await res.json();
      if (res.ok) {
        navigate('/');
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div>
        <div className='w-screen h-screen relative text-white overflow-hidden'>

            <img src={register_page_background} className='w-screen h-screen object-cover absolute inset-0 -z-100' />
    

            <div className='flex justify-center items-center w-[70rem] ml-[10rem] h-screen bg-transparent'>
               <div className='bg-[#080c28b9] w-[80%] sm:w-[55%] md:w-[45%] lg:w-[35%] flex flex-col justify-center gap-2 rounded-2xl items-center py-5 border border-purple-500/20 hover:border-purple-500/70 transition-colors duration-500'>
                    <div className='w-25 mx-3'>
                        <img src={logo} className='w-full' />
                    </div>

                    <div className='flex flex-col ml-2 '>
                        <div className='flex items-center justify-center gap-2 mx-auto'>
                            <h1 className='text-3xl font-semibold text-center ml-4'>Welcome Back</h1>
                            <Heart className='text-[#5e47b1]  hidden sm:block'/>
                        </div>
                        
                        <div className='mx-auto px-2'>
                            <p className='text-gray-300/70 text-sm mt-2 sm:mt-1 text-center'>Your identity stays hidden.
Your voice doesn't.</p>
                        </div>
                        
                    </div>

                    <form onSubmit={handleLogin} className='ml-2 flex flex-col justify-center items-center gap-4 mt-3'>
                        {error && <p className="text-red-500 text-sm">{error}</p>}
                        <div>
                            <h3 className='text-lg'>Username or Email</h3>
                            <input type="text" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} className='border-2 border-[#5e47b1]   hover:border-purple-400 rounded-xl px-2 py-1 bg-transparent w-65 text-gray-500'/>
                        </div>

                        <div>
                            <h3 className='text-lg'>Password</h3>
                            <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} minLength={6} className='border-2 border-[#5e47b1]  hover:border-purple-400 rounded-xl px-2 py-1 bg-transparent w-65 text-gray-500'/>
                        </div>

                                              <input
                          type="submit"
                          value="Login"
                          className="border border-purple-400/40 w-25 rounded-3xl mt-3 cursor-pointer px-4 py-2 text-white font-medium text-sm tracking-wide
                            bg-white/5 backdrop-blur-sm
                            hover:bg-purple-500/20 hover:border-purple-400/70 hover:shadow-[0_0_16px_rgba(168,85,247,0.25)]
                            transition-all duration-300"
                        />
                        <p className="text-sm mt-2">Don't have an account? <Link to="/register" className="text-[#5e47b1] text-sm cursor-pointer font-semibold relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-purple-500 hover:after:w-full after:transition-all after:duration-300 hover:text-purple-500 transition-colors duration-300">Register</Link></p>
                    </form>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default LOGIN