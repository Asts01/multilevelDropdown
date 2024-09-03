import { menuItemsData } from "../MenuItemsData";
import React from 'react'
import MenuItems from "./MenuItems";
//todo-import MenuItems

//horizontal-0
//vertical-1
function Navbar() {
  return (
    <div>
      <nav className="w-full bg-slate-400 p-4">
        {/* Optional: Add a container to center content if needed */}
        <div className="container mx-auto">
          {/* <h2 className="flex-row gap-4 p-6 text-white justify-start">MultilevelDropdown</h2> */}
          <ul className="flex flex-row gap-3">
            {/* Render menuItemsData dynamically */}
            {   
              // Represents current item and the index -> LEVEL-1 MAPPING
              menuItemsData.map((menu, index) => (
                <MenuItems items={menu} key={index} direction={0} />
              ))
            }
          </ul>
        </div>
      </nav>
    </div>
  );
}


export default Navbar
