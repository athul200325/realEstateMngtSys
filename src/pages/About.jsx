import React from 'react'
import aboutImg from '../assets/about.png'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

const About = () => {
  return (
<>
<Header insideHome={true} bgHeader={true}/>
  <div className='flex flex-col'>
    <div className=' flex justify-center items-center pt-20 w-screen'>
      <img className='w-[800px]' src={aboutImg} alt="" />
        </div> 
        <Link className='mx-auto' to={'/'}><button className='bg-sky-700 p-3 rounded-xl font-semibold  text-white'>Find your dream Home</button></Link>
  </div>
</>
     )
}

export default About