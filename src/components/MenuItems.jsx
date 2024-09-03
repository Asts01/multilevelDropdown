import React, { useState } from 'react';
import Dropdown from './Dropdown';
import { NavLink } from 'react-router-dom';
import { MdArrowForwardIos } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";

// 0 - horizontal, 1 - vertical
const MenuItems = ({ items, direction }) => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <li
      className="relative group"
      onMouseEnter={() => setDropdown(true)}
      onMouseLeave={() => setDropdown(false)}
    >
      {items.submenu ? (
        <>
          <button
            type="button"
            className="px-4 py-2 text-black rounded-md focus:outline-none hover:bg-gray-100"
            aria-haspopup="menu"
          >
            <div className="flex flex-row justify-start align-bottom">
              {items.title} {!direction ? <MdArrowForwardIos className="mt-1 pl-1" /> : <FaChevronDown className='mt-1 px-1'/>}
            </div>
          </button>
          {dropdown && (
            <div
              className={`absolute ${
                direction === 0
                  ? 'top-0 left-full' // Horizontal layout for desktop
                  : 'top-full left-0' // Vertical layout
              } 
              w-48 bg-white border border-gray-300 rounded-md shadow-lg z-50
              lg:${direction === 0 ? 'left-full top-0' : 'left-0 top-full'}  // direction for desktop
              md:${direction === 1 ? 'left-0 top-full' : 'left-full top-0'}  // mobile-mode
              flex-row`}
            >
              <Dropdown submenus={items.submenu} direction={direction} />
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
