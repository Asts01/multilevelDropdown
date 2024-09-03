import React, { useState } from 'react';
import Navbar from './Navbar'; // Ensure the Navbar component is imported
import { GiHamburgerMenu, GiExitDoor } from 'react-icons/gi';
import NavbarCol from './NavbarCol';
import { IoIosCloseCircle } from "react-icons/io";


function HeaderComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='bg-slate-400'>
      {/* Hamburger menu button for small screens */}
      <button onClick={toggleMenu} className='lg:hidden sm:hidden bg-slate-400 size-10 flex justify-normal p-3'>
        {isOpen ? <IoIosCloseCircle /> : <GiHamburgerMenu onClick={()=>setIsOpen(!isOpen)}/>}
      </button>
      
      <header className="m-0 p-0 bg-slate-400 flex justify-center">
        {/* Navbar for large screens */}
        <div className="hidden md:block">
          <Navbar/>      
        </div>
        <div className={`block sm:hidden ${!isOpen ? 'hidden' : ''}`}>
          <NavbarCol/>
        </div>
      </header> 
      
    </div>
  );
}

export default HeaderComponent;
