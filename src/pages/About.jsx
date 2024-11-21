import React from 'react'
import aboutImg from '../assets/about.png'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

const About = () => {
  return (
<>
<Header insideHome={true} bgHeader={true}/>
<div class="sm:flex ps-72 pt-10 items-center max-w-screen-xl">
    <div class="sm:w-1/2 pt-20 ">
        <div class="image object-center text-center">
            <img src="https://i.imgur.com/WbQnbas.png" alt="" />
        </div>
    </div>
    <div class="sm:w-1/2 p-5">
        <div class="text">
            <span class="text-gray-500 border-b-2 border-indigo-600 uppercase">About us</span>
            <h2 class="my-4 font-bold text-3xl  sm:text-4xl ">About <span class="text-indigo-600">Realtor</span>
            </h2>
            <p class="text-gray-700">
            At Realtor, we make finding your next perfect place to live simple and stress-free. With an extensive selection of properties, from cozy apartments to spacious homes, we offer something for everyone. Whether you're looking to buy, rent, or invest, our platform ensures that you have access to the best listings available. Experience seamless browsing, expert guidance, and personalized recommendations to help you find a space that fits your lifestyle and budget. Let us help you take the next step towards your dream home.
            </p>
        </div>
    </div>
</div>
<section class="text-gray-700 body-font">
  <div class="flex justify-center mt-10 text-4xl font-regular">
    Why Us?
  </div>
  <div class="container px-5 py-12 mx-auto">
    <div class="flex flex-wrap text-center justify-center">

      <div class="p-4 md:w-1/4 sm:w-1/2">
        <div class="px-4 py-6 transform transition duration-500 hover:scale-110">
          <div class="flex justify-center">
            <img src="https://image2.jdomni.in/banner/13062021/3E/57/E8/1D6E23DD7E12571705CAC761E7_1623567977295.png?output-format=webp" class="w-32 mb-3"/>
          </div>
          <h2 class="title-font font-regular text-2xl text-gray-900">Reasonable Rates</h2>
        </div>
      </div>

      <div class="p-4 md:w-1/4 sm:w-1/2">
        <div class="px-4 py-6 transform transition duration-500 hover:scale-110">
          <div class="flex justify-center">
          <img src="https://image3.jdomni.in/banner/13062021/16/7E/7E/5A9920439E52EF309F27B43EEB_1623568010437.png?output-format=webp" alt="" class="w-32 mb-3" />
          </div>
          <h2 class="title-font font-regular text-2xl text-gray-900">Time Efficiency</h2>
        </div>
      </div>

      <div class="p-4 md:w-1/4 sm:w-1/2">
        <div class="px-4 py-6 transform transition duration-500 hover:scale-110">
          <div class="flex justify-center">
            <img src="https://image3.jdomni.in/banner/13062021/EB/99/EE/8B46027500E987A5142ECC1CE1_1623567959360.png?output-format=webp" alt="" class="w-32 mb-3"/>
          </div>
          <h2 class="title-font font-regular text-2xl text-gray-900">Expertise in Industry</h2>
        </div>
      </div>

    </div>
  </div>
</section>
</>
     )
}

export default About