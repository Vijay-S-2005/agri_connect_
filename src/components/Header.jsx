// src/components/Header.js

import React from 'react';
import { Assets } from '../../public/assets/Assets';
import Image from 'next/image'; 

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-green-600 shadow-md">
      <div className="flex items-center">
        <Image src={Assets.Agriconnect_logo} alt="Agriconnect Logo" width={100} height={100} /> {/* Using Next.js's Image component */}
      </div>
      <div className="mx-4 w-full max-w-md">
        <div className="flex items-center bg-white rounded-full shadow-md overflow-hidden">
          <input 
            type="text" 
            placeholder="Search for products" 
            className="flex-1 px-4 py-2 text-gray-700 focus:outline-none"
          />
          <button className="bg-green-700 text-white px-4 py-2 rounded-full hover:bg-green-800 transition duration-300">
            Search
          </button>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Image src={Assets.languageIcon} alt="Language Icon" width={24} height={24} className="cursor-pointer hover:opacity-80 transition duration-300" />
        <Image src={Assets.profile} alt="Profile" width={24} height={24} className="rounded-full cursor-pointer hover:opacity-80 transition duration-300" />
      </div>
    </header>
  );
}

export default Header;