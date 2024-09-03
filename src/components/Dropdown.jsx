import React from 'react';
import MenuItems from './MenuItems';

// direction: 0 = horizontal, 1 = vertical
const Dropdown = ({ submenus, direction }) => {
  return (
    <ul className={`${
      direction === 0 ? 'flex flex-col' : 'flex-col' // Flex row for horizontal, column for vertical
    } bg-white text-black p-4 border border-gray-300 rounded-md`}>
      {submenus.map((submenu, index) => (
        <MenuItems key={index} items={submenu} direction={direction} />
      ))}
    </ul>
  );
};

export default Dropdown;



