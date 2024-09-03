import React, { useState } from 'react';
import Dropdown from './Dropdown';
import { NavLink } from 'react-router-dom';

const MenuItems = ({ items }) => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <li className="relative">
      {items.submenu ? (
        <>
          <button
            type="button"
            className="px-4 py-2 text-black rounded-md focus:outline-none hover:bg-gray-100"
            onClick={() => setDropdown(!dropdown)}
            aria-haspopup="menu"
          >
            {items.title}
          </button>
          {dropdown && (
            <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-50">
              <Dropdown submenus={items.submenu} />
            </div>
          )}
        </>
      ) : (
        <NavLink 
          to={items.title || '/#'} 
          className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
        >
          {items.title}
        </NavLink>
        
      )}
    </li>
  );
};

export default MenuItems;
