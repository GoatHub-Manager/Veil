import React, { useState } from 'react'
import logo from "../assets/veil_logo.png"
import register_page_background from "../assets/register_page_background.jpg"
import { Lollipop } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

const REGISTER = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, username, email, password })
      });
      const data = await res.json();
      if (res.ok) {
        navigate('/');
      } else {
        setError(data.message || 'Registration failed');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div>
        <div className='w-screen h-screen relative text-white overflow-hidden'>

            <img src={register_page_background} className='w-screen h-screen object-cover absolute inset-0 -z-100' />
    

            <div className='flex justify-center items-center w-screen h-screen bg-transparent ml-4'>
                <div className='bg-[#080c28b9] w-[80%] sm:w-[60%] md:w-[40%] lg:w-[28%] flex flex-col justify-center gap-2 rounded-2xl items-center py-5 border border-purple-500/20 hover:border-purple-500/70 transition-colors duration-500'>
                    <div className='w-25 mx-3'>
                        <img src={logo} className='w-full' />
                    </div>

                    <div className='flex flex-col ml-2 '>
                        <div className='flex items-center justify-center gap-2 mx-auto'>
                            <h1 className='text-3xl font-semibold mt-[-1rem]  text-center'>Create your account</h1>
                           
                        </div>
                        
                        <div className='mx-auto px-2'>
                            <p className='text-gray-300/70 text-lg mt-2 sm:mt-1 text-center'>Your identity stays hidden.
Your voice doesn't.</p>
                        </div>
                        
                    </div>

                    <form onSubmit={handleRegister} className='ml-2 flex flex-col justify-center items-center gap-4 mt-3'>
                        {error && <p className="text-red-500 text-sm">{error}</p>}
                        <div>
                            <h3 className='text-lg'>Display Name</h3>
                            <input type="text" name="Name" id="name" value={name} onChange={(e) => setName(e.target.value)}className='border-2 border-[#5e47b1] hover:border-purple-400 rounded-xl px-2 py-1 bg-transparent w-full sm:w-65 text-gray-500' />
                        </div>

                        <div>
                            <h3 className='text-lg'>Username</h3>
                            <input type="text" name="Username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} className='border-2 border-[#5e47b1] hover:border-purple-400 rounded-xl px-2 py-1 bg-transparent w-full sm:w-65 text-gray-500' />
                        </div>

                        <div>
                            <h3 className='text-lg'>Email</h3>
                            <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className='border-2 border-[#5e47b1] hover:border-purple-400 rounded-xl px-2 py-1 bg-transparent w-full sm:w-65 text-gray-500' />
                        </div>

                        <div>
                            <h3 className='text-lg'>Password</h3>
                            <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} minLength={6}className='border-2 border-[#5e47b1] hover:border-purple-400 rounded-xl px-2 py-1 bg-transparent w-full sm:w-65 text-gray-500' />
                        </div>

                        <input type="submit" value="Register"  className="border border-purple-400/40 w-25 rounded-3xl mt-3 cursor-pointer px-4 py-2 text-white font-medium text-sm tracking-wide
                            bg-white/5 backdrop-blur-sm
                            hover:bg-purple-500/20 hover:border-purple-400/70 hover:shadow-[0_0_16px_rgba(168,85,247,0.25)]
                            transition-all duration-300"/>



                        <p className="text-sm mt-2">Already have an account? <Link to="/login" className="text-[#5e47b1] text-sm cursor-pointer font-semibold relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-purple-500 hover:after:w-full after:transition-all after:duration-300 hover:text-purple-500 transition-colors duration-300">Login</Link></p>
                    </form>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default REGISTER