import React from 'react'

import {Route ,Routes} from "react-router-dom";
import Home from "../components/Home";
import Product from "../components/Product";
import Service from "../components/Service";
import About from "../components/About";

const Mainroutes = () => {
  return (
     <Routes>
      <Route path="/" element ={<Home/>} />
       <Route path="/product/detail" element ={<ProductDetails/>} />
        <Route path="/service" element ={<Service/>} />
        <Route path="/about" element ={<About/>} />
    </Routes>
  )
}

export default Mainroutes
