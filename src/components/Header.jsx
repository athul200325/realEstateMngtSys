import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const Header = ({insideHome,bgHeader}) => {
  return (
    <header
    class="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-l-gray-50 bg-white/50 py-3 shadow backdrop-blur-md md:top-6 md:rounded-3xl lg:max-w-screen-lg">
    <div class="px-4">
        <div class="flex items-center justify-between">
            <div class="flex shrink-0">
            <Link to={'/'}>
                <h1 className='font-bold flex  text-sm sm:text-xl'>
                <img width={'25'} src={logo} alt="" />
                    <span className='text-slate-800'>EALTOR</span> 
                </h1>
            </Link>
            </div>
            { insideHome &&
                <ul className='flex font-semibold gap-4'>
                        <div className='mt-2 me-10'>
                            <Link to={'/'}><li className='hidden bg-transparent text-black border-1  rounded-md p-2 px-3 ms-8 sm:inline'>Home</li></Link>
                            <Link to={'/about'}><li className='hidden bg-transparent text-black border-1  rounded-md p-2 px-3  mx-4 sm:inline'>About</li></Link>
                        </div>
            </ul>}

            { insideHome &&  
            <div class="flex items-center border-2 border-gray-300 px-4 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-200">
            <input 
                type="text" 
                placeholder="Search..." 
                class="bg-transparent focus:outline-none text-gray-700 w-32 sm:w-80 p-2 placeholder-gray-500"
            />
            <button class="text-gray-500 hover:text-black transition-colors duration-200 ml-2">
                <FaSearch class="cursor-pointer"/>
            </button>
        </div>
        
        }
            <div class="flex items-center justify-end gap-3">
                <Link class="hidden items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex"
                    to={'/sign-up'}>Sign up</Link>
                <Link class="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    to={'/sign-in'}>Sign in</Link>
            </div>
        </div>
    </div>
</header>
  )
}

export default Header