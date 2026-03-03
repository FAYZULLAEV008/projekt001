import React from 'react';
import {
  Facebook,
  Instagram,
  Twitter,
  Github,
  Dribbble,
} from 'lucide-react';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
        <p className='py-4'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.
        </p>
        <div className='flex justify-between md:w-[75%] my-6'>
            <Facebook size={30} className='cursor-pointer hover:text-[#00df9a]' />
            <Instagram size={30} className='cursor-pointer hover:text-[#00df9a]' />
            <Twitter size={30} className='cursor-pointer hover:text-[#00df9a]' />
            <Github size={30} className='cursor-pointer hover:text-[#00df9a]' />
            <Dribbble size={30} className='cursor-pointer hover:text-[#00df9a]' />
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
    <div>
        <h6 className='font-medium text-gray-400'>Solutions</h6>
        <ul>
            <li className='py-2 text-sm cursor-pointer hover:text-[#00df9a]'>Analytics</li>
            <li className='py-2 text-sm cursor-pointer hover:text-[#00df9a]'>Marketing</li>
            <li className='py-2 text-sm cursor-pointer hover:text-[#00df9a]'>Commerce</li>
            <li className='py-2 text-sm cursor-pointer hover:text-[#00df9a]'>Insights</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Support</h6>
        <ul>
            <li className='py-2 text-sm cursor-pointer hover:text-[#00df9a]'>Pricing</li>
            <li className='py-2 text-sm cursor-pointer hover:text-[#00df9a]'>Documentation</li>
            <li className='py-2 text-sm cursor-pointer hover:text-[#00df9a]'>Guides</li>
            <li className='py-2 text-sm cursor-pointer hover:text-[#00df9a]'>API Status</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Company</h6>
        <ul>
            <li className='py-2 text-sm cursor-pointer hover:text-[#00df9a]'>About</li>
            <li className='py-2 text-sm cursor-pointer hover:text-[#00df9a]'>Blog</li>
            <li className='py-2 text-sm cursor-pointer hover:text-[#00df9a]'>Jobs</li>
            <li className='py-2 text-sm cursor-pointer hover:text-[#00df9a]'>Press</li>
            <li className='py-2 text-sm cursor-pointer hover:text-[#00df9a]'>Careers</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Legal</h6>
        <ul>
            <li className='py-2 text-sm cursor-pointer hover:text-[#00df9a]'>Claim</li>
            <li className='py-2 text-sm cursor-pointer hover:text-[#00df9a]'>Policy</li>
            <li className='py-2 text-sm cursor-pointer hover:text-[#00df9a]'>Terms</li>
        </ul>
    </div>
      </div>
    </div>
  );
};

export default Footer;
