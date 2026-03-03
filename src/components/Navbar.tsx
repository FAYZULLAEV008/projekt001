import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
      <ul className='hidden md:flex'>
        <li className='p-4 cursor-pointer hover:text-[#00df9a] transition-colors'>Home</li>
        <li className='p-4 cursor-pointer hover:text-[#00df9a] transition-colors'>Company</li>
        <li className='p-4 cursor-pointer hover:text-[#00df9a] transition-colors'>Resources</li>
        <li className='p-4 cursor-pointer hover:text-[#00df9a] transition-colors'>About</li>
        <li className='p-4 cursor-pointer hover:text-[#00df9a] transition-colors'>Contact</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden cursor-pointer'>
          {nav ? <X size={20}/> : <Menu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 z-50' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
          <li className='p-4 border-b border-gray-600 cursor-pointer hover:text-[#00df9a]'>Home</li>
          <li className='p-4 border-b border-gray-600 cursor-pointer hover:text-[#00df9a]'>Company</li>
          <li className='p-4 border-b border-gray-600 cursor-pointer hover:text-[#00df9a]'>Resources</li>
          <li className='p-4 border-b border-gray-600 cursor-pointer hover:text-[#00df9a]'>About</li>
          <li className='p-4 cursor-pointer hover:text-[#00df9a]'>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
