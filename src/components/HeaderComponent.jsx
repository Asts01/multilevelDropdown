
import React from 'react';
import Navbar from './Navbar'; // Ensure the Navbar component is imported

function HeaderComponent() {
  return (
    <div>
      <header className='m-0 p-0 bg-slate-400 flex justify-center'>
        <div className="hidden sm:block">
          <Navbar />
        </div>
        
      </header>
    </div>
  );
}

export default HeaderComponent;
