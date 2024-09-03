import { menuItemsData } from "../MenuItemsData";
import React from 'react'
import MenuItems from "./MenuItems";
//todo-import MenuItems

function NavbarCol() {
  return (
    <div>
      <nav className="w-full bg-slate-400 p-4">
        {/* Optional: Add a container to center content if needed */}
        <div className="container flex items-start fixed start-0 pl-8">
          {/* <h2 className="flex-row gap-4 p-6 text-white justify-start">MultilevelDropdown</h2> */}
          <ul className="flex flex-col gap-4 bg-slate-400">
            {/* Render menuItemsData dynamically */}
            {   
              // Represents current item and the index -> LEVEL-1 MAPPING
              menuItemsData.map((menu, index) => (
                <MenuItems items={menu} key={index} className="bg-slate-400"/>
              ))
            }
          </ul>
        </div>
      </nav>
    </div>
  );
}


export default NavbarCol
