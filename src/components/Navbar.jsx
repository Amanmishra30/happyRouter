import React from 'react'
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <div classname =" flex  item-center  justify-center gap-x-10 text-sm mb=1">
      
      <NavLink className= {(e) => e.isActive ?  "text-red-400" : " "} to="/">
       Home
      </NavLink>
        <NavLink className= {(e) => e.isActive ?  "text-red-400" : " "} to="/Recipes">
       Recipes
      </NavLink>
        <NavLink className= {(e) => e.isActive ?"text-red-400" : " "} to="/about">
       About
      </NavLink>
       <NavLink className= {` px-4 py-2 bg-gray-900 rounded $(e) => e.isActive ? "text-red-400" : " "`} 
       to="/Create-Reacipe">
       Create Recipes
      </NavLink>
     
    </div>
  )
}

export default Navbar
