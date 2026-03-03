import React from 'react';
import { motion } from 'motion/react';

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-[#00df9a] font-bold p-2'
        >
          GROWING WITH DATA ANALYTICS
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'
        >
          Grow with data.
        </motion.h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Fast, flexible financing for
          </p>
          <span className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-[#00df9a]'>
            SaaS
          </span>
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500 px-4'>
          Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.
        </p>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'
        >
          Get Started
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;
