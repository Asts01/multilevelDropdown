import React from 'react';
import MenuItems from './MenuItems';

const Dropdown = ({ submenus }) => {
  return (
    <ul className="bg-white text-black p-4 relative start-7">
      {
        submenus.map((submenu, index) => (
          <MenuItems key={index} items={submenu} />
        ))
      }
    </ul>
  );
};

export default Dropdown;
