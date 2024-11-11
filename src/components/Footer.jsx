import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-sky-800">
    <div className="mx-auto max-w-7xl py-8 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
      <nav className="-mx-5 -my-2 flex flex-wrap justify-center order-2" aria-label="Footer">
        <div className="px-5">
          <a href="#" className="text-base text-white hover:text-gray-200">
            Terms of Service
          </a>
        </div>
        <div className="px-5">
          <a href="#" className="text-base text-white hover:text-gray-200">
            Privacy Policy
          </a>
        </div>
      </nav>
      <div className="mt-8 md:mb-8 flex justify-center space-x-6 md:order-3">
        {/* Facebook Icon */}
        <a href="" className="text-white hover:text-gray-200">
          <span className="sr-only">Facebook</span>
          <FaInstagram className="h-6 w-6" />
        </a>

        {/* Twitter Icon */}
        <a href="" className="text-white hover:text-gray-200">
          <span className="sr-only">Twitter</span>
          <FaTwitter className="h-6 w-6" />
        </a>

        {/* GitHub Icon */}
        <a href="" className="text-white hover:text-gray-200">
          <span className="sr-only">GitHub</span>
          <FaGithub className="h-6 w-6" />
        </a>
      </div>
      <div className="mt-8 md:order-1 md:mt-0">
        <p className="text-center text-base text-white">
          &copy; RealEstate App. Created by @athul.
        </p>
      </div>
    </div>
  </footer>
  )
}

export default Footer