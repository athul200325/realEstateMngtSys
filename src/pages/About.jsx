import React from 'react';
import Header from '../components/Header';

const About = () => {
  return (
    <>
      <Header insideHome={true} bgHeader={true} />
      {/* About Section */}
      <div className="flex flex-col sm:flex-row items-center justify-center max-w-screen-xl mx-auto px-5 pt-24 py-10">
        {/* Image Section */}
        <div className="sm:w-1/2 mb-8 sm:mb-0 flex justify-center">
          <img 
            src="https://i.imgur.com/WbQnbas.png" 
            alt="About Us" 
            className="max-w-xs sm:max-w-md"
          />
        </div>
        {/* Text Section */}
        <div className="sm:w-1/2 text-center sm:text-left px-5">
          <span className="text-gray-500 border-b-2 border-indigo-600 uppercase text-sm tracking-wider">
            About us
          </span>
          <h2 className="my-4 font-bold text-2xl sm:text-4xl">
            About <span className="text-indigo-600">Realtor</span>
          </h2>
          <p className="text-gray-700 leading-relaxed">
            At Realtor, we make finding your next perfect place to live simple and stress-free. With an extensive selection of properties, from cozy apartments to spacious homes, we offer something for everyone. Whether you're looking to buy, rent, or invest, our platform ensures that you have access to the best listings available. Experience seamless browsing, expert guidance, and personalized recommendations to help you find a space that fits your lifestyle and budget. Let us help you take the next step towards your dream home.
          </p>
        </div>
      </div>
      {/* Why Us Section */}
      <section className="text-gray-700 body-font">
        <div className="text-center mt-10 text-2xl sm:text-4xl font-medium">
          Why Us?
        </div>
        <div className="container mx-auto px-5 py-12">
          <div className="flex flex-wrap justify-center gap-8">
            {/* Reasonable Rates */}
            <div className="p-4 w-64">
              <div className="px-4 py-6 transform transition-transform duration-500 hover:scale-110">
                <div className="flex justify-center">
                  <img 
                    src="https://image2.jdomni.in/banner/13062021/3E/57/E8/1D6E23DD7E12571705CAC761E7_1623567977295.png?output-format=webp" 
                    alt="Reasonable Rates" 
                    className="w-20 h-20 mb-3"
                  />
                </div>
                <h2 className="text-xl sm:text-2xl text-gray-900">Reasonable Rates</h2>
              </div>
            </div>
            {/* Time Efficiency */}
            <div className="p-4 w-64">
              <div className="px-4 py-6 transform transition-transform duration-500 hover:scale-110">
                <div className="flex justify-center">
                  <img 
                    src="https://image3.jdomni.in/banner/13062021/16/7E/7E/5A9920439E52EF309F27B43EEB_1623568010437.png?output-format=webp" 
                    alt="Time Efficiency" 
                    className="w-20 h-20 mb-3"
                  />
                </div>
                <h2 className="text-xl sm:text-2xl text-gray-900">Time Efficiency</h2>
              </div>
            </div>
            {/* Expertise in Industry */}
            <div className="p-4 w-64">
              <div className="px-4 py-6 transform transition-transform duration-500 hover:scale-110">
                <div className="flex justify-center">
                  <img 
                    src="https://image3.jdomni.in/banner/13062021/EB/99/EE/8B46027500E987A5142ECC1CE1_1623567959360.png?output-format=webp" 
                    alt="Expertise in Industry" 
                    className="w-20 h-20 mb-3"
                  />
                </div>
                <h2 className="text-xl sm:text-2xl text-gray-900">Expertise in Industry</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
