// src/components/Navbar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigaete=useNavigate()
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white font-bold text-lg">Byte Warden</h1>
        <button onClick={()=>
        {
          localStorage.removeItem('Userdata')
          navigaete('/login')
        }} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
