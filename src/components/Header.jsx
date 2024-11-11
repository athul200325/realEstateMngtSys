import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const Header = ({insideHome,bgHeader}) => {
  return (
    <header className={`absolute top-0 left-0 right-0 z-50 ${bgHeader===true ? 'bg-gray-500 ' : 'bg-transparent'}`}>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <Link to={'/'}>
                <h1 className='font-bold flex  text-sm sm:text-xl'>
                <img width={'25'} src={logo} alt="" />
                    <span className='text-slate-800'>EALTOR</span> 
                </h1>
            </Link>
            <form className='bg-transperent border-1 border-gray-500 shadow-lg p-2 rounded-lg flex items-center ' >
        { insideHome &&  
            <div class="flex items-center bg-transparent">
                <input type="text" placeholder='Search...' className='bg-transparent p-1 focus:outline-none text-white w-32 sm:w-80' />
                <FaSearch className='text-white ms-2 cursor-pointer'/>
            </div>
        }
            </form>

            { insideHome &&
                <ul className='flex font-semibold gap-4'>
                        <div className='mt-2 me-10'>
                            <Link to={'/'}><li className='hidden bg-transparent text-white border-1 border-gray-500 rounded-md p-2 px-3 shadow-lg ms-8 sm:inline'>Home</li></Link>
                            <Link to={'/about'}><li className='hidden bg-transparent text-white border-1 border-gray-500 rounded-md p-2 px-3 shadow-lg mx-4 sm:inline'>About</li></Link>
                        </div>
                <Link to={'/sign-in'}><li className='bg-sky-900 shadow-lg text-white border-1 border-gray-500 rounded-md p-2 px-3'>Sign In</li></Link>
            </ul>}
        </div>
    </header>
  )
}

export default Header