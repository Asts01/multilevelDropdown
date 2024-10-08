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
          <ul className="flex flex-col p bg-slate-400 left-0">
            {/* Render menuItemsData dynamically */}
            {   
              // Represents current item and the index -> LEVEL-1 MAPPING
              menuItemsData.map((menu, index) => (
                <MenuItems items={menu} key={index} direction={1} className="bg-slate-100 hover:bg-slate-300"/>
              ))
            }
          </ul>
        </div>
      </nav>
    </div>
  );
}


export default NavbarCol
