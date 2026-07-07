import React from 'react'
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <div classname =" flex justify-center gap-x-10 text-sm mb=1">
      
      <NavLink className= {(e) => e.isActive && "text-red-400"} to="/">
       Home
      </NavLink>
        <NavLink className= {(e) => e.isActive && "text-red-400"} to="/Recipes">
       Recipes
      </NavLink>
        <NavLink className= {(e) => e.isActive && "text-red-400"} to="/About">
       About
      </NavLink>
     
    </div>
  )
}

export default Navbar
