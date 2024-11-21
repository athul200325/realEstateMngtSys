  import React from 'react'
  import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
  import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { FaLinkedin } from 'react-icons/fa6'

  const Footer = () => {
    
    return (
      <footer class="w-full py-">
          <div class="mx-auto max-w-screen-2xl px-20 sm:px-6 lg:px-8">
              <div
                  class="flex items-center pt-5 justify-center lg:justify-between flex-col lg:flex-row pb-5 gap-7 lg:gap-0 border-b border-gray-200">
                  <div class="flex shrink-0">
            <Link to={'/'}>
                <h1 className='font-bold flex  text-sm sm:text-xl'>
                <img width={'25'} src={logo} alt="" />
                    <span className='text-slate-800'>EALTOR</span> 
                </h1>
            </Link>
            </div>
                  <a href="javascript:;"
                      class="flex items-center gap-2 py-2.5 px-7 rounded-full bg-gray-900 shadow-md text-white font-semibold hover:bg-gray-800">Contac
                      us <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M1.5 6L14.8333 6M10.6667 11L15.0774 6.58926C15.3552 6.31148 15.4941 6.17259 15.4941 6C15.4941 5.82741 15.3552 5.68852 15.0774 5.41074L10.6667 1"
                              stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                  </a>
              </div>
              <div class="flex justify-between flex-col py-1 min-[500px]:py-8 gap-8 min-[500px]:gap-16 lg:gap-0 lg:flex-row">
                  <div
                      class="flex flex-col items-center max-lg:justify-center min-[500px]:items-start min-[500px]:flex-row gap-8 sm:gap-12 xl:gap-24">
                      <div class="block">
                          <h4
                              class="text-lg text-gray-900 font-medium mb-1 min-[500px]:mb-7 text-center min-[500px]:text-left">
                              Pagedone</h4>
                          <ul class="grid gap-4 min-[500px]:gap-6 text-center min-[500px]:text-left">
                              <li><a href="javascript:;" class="text-gray-600 hover:text-gray-900">Home</a></li>
                              <li><a href="javascript:;" class="text-gray-600 hover:text-gray-900">About</a></li>
                              <li><a href="javascript:;" class="text-gray-600 hover:text-gray-900">Pricing</a></li>
                              <li><a href="javascript:;" class="text-gray-600 hover:text-gray-900">Pro Version</a></li>
                          </ul>
                      </div>
                      <div class="block">
                          <h4
                              class="text-lg text-gray-900 font-medium mb-4 min-[500px]:mb-7 text-center min-[500px]:text-left">
                              Products</h4>
                          <ul class="grid gap-4 min-[500px]:gap-6 text-center min-[500px]:text-left">
                              <li><a href="javascript:;" class="text-gray-600 hover:text-gray-900">Figma UI System</a>
                              </li>
                              <li><a href="javascript:;" class="text-gray-600 hover:text-gray-900">Icons Assets</a></li>
                              <li><a href="javascript:;" class="text-gray-600 hover:text-gray-900">Responsive Blocks</a>
                              </li>
                              <li><a href="javascript:;" class="text-gray-600 hover:text-gray-900">Components Library</a>
                              </li>
                          </ul>
                      </div>
                      <div class="block">
                          <h4
                              class="text-lg text-gray-900 font-medium mb-4 min-[500px]:mb-7 text-center min-[500px]:text-left">
                              Resources</h4>
                          <ul class="grid gap-4 min-[500px]:gap-6 text-center min-[500px]:text-left">
                              <li><a href="javascript:;" class="text-gray-600 hover:text-gray-900">FAQs</a></li>
                              <li><a href="javascript:;" class="text-gray-600 hover:text-gray-900">Quick Start</a></li>
                              <li><a href="javascript:;" class="text-gray-600 hover:text-gray-900">Documentation</a></li>
                              <li><a href="javascript:;" class="text-gray-600 hover:text-gray-900">User Guide</a></li>
                          </ul>
                      </div>
                  </div>
                  <div class="block lg:max-w-md">
                      <h3
                          class="font-manrope font-semibold text-2xl text-gray-900 leading-9 mb-8 text-center lg:text-left">
                          Join the Realtor and read the new posts first</h3>
                      <div
                          class="lg:bg-gray-100 lg:rounded-full lg:h-16 lg:p-1.5 lg:flex-row gap-6 lg:gap-0 flex-col flex items-center justify-between">
                          <input type="text" name="email"
                              class="py-1 px-6 bg-gray-100 rounded-full text-gray-900 placeholder:text-gray-500 focus:outline-none flex-1 w-full max-w-xl mx-auto lg:w-auto lg:py-1 lg:px-7 lg:bg-transparent"
                              placeholder="Your email here..." />
                          <button type="submit"
                              class="py-1.5 px-7 bg-indigo-600 shadow-md rounded-full text-white font-semibold hover:bg-indigo-700">Subscribe</button>
                      </div>
                  </div>
              </div>
              <div class="py-3 border-t border-gray-200">
                  <div class="flex items-center justify-center flex-col gap-8 lg:gap-0 lg:flex-row lg:justify-between">
                      <span class="text-sm text-gray-500 ">©<a href="https://pagedone.io/">pagedone</a> 2024, All rights reserved.</span>
                      <div class="flex mt-4 space-x-4 sm:justify-center sm:mt-0 ">
                          <a href="javascript:;"
                              class="w-9 h-9 rounded-full  flex justify-center items-center hover:bg-indigo-600">
                              <FaGithub className='text-3xl'/>

                          </a>
                          <a href="javascript:;"
                              class="w-9 h-9 rounded-full  flex justify-center items-center hover:bg-indigo-600">
                              <FaLinkedinIn className='text-3xl'/>

                          </a>
                          <a href="javascript:;"
                              class="w-9 h-9 rounded-full  flex justify-center items-center hover:bg-indigo-600">
                              <FaInstagram className='text-3xl'/>

                          </a>
                          <a href="javascript:;"
                              class="w-9 h-9 rounded-full  flex justify-center items-center hover:bg-indigo-600">
                              <FaFacebook className='text-3xl'/>

                          </a>
                      </div>
                  </div>
              </div>
          </div>
      </footer>
    )
  }

  export default Footer