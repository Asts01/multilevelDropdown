import React, { useState } from 'react';
import Navbar from './Navbar'; // Ensure the Navbar component is imported
import { GiHamburgerMenu, GiExitDoor } from 'react-icons/gi';
import NavbarCol from './NavbarCol';


function HeaderComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='bg-slate-400'>
      {/* Hamburger menu button for small screens */}
      <button onClick={toggleMenu} className='lg:hidden sm:hidden bg-slate-400 size-10 flex justify-normal p-3'>
        {isOpen ? <GiExitDoor /> : <GiHamburgerMenu onClick={()=>setIsOpen(!isOpen)}/>}
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


// import React from 'react';
// import Navbar from './Navbar'; // Ensure the Navbar component is imported
// import { GiHamburgerMenu,GiExitDoor} from 'react-icons/gi';
// import { useState } from 'react';

// function HeaderComponent() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };
//   return (
//     <div>
//       <button onClick={toggleMenu} className="text-white text-3xl md:hidden">
//         {!isOpen?<GiHamburgerMenu />:<GiExitDoor/>}
//       </button>

//       <header className='m-0 p-0 bg-slate-400 flex justify-center'>
//         <div className="hidden sm:block">
//           <Navbar />
//         </div>
//       </header>
//     </div>
//   );
// }

// export default HeaderComponent;
