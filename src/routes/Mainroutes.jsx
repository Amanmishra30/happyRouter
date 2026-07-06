import React from 'react'

import {Route ,Routes} from "react-router-dom";
import Home from "../components/Home";
import Product from "../components/Product";
import Service from "../components/Service";
import About from "../components/About";
import ProductDetails from '../Components/ProductDetails';
import ServiceDetails from '../Components/ServiceDetail';


const Mainroutes = () => {
  return (
     <Routes>
      <Route path="/" element ={<Home/>} />
       <Route path="/product/detail/:name" element ={<ProductDetails/>} />
        <Route path="/service" element ={<Service/>} >
            <Route path = "/service/detail" element = {<ServiceDetails/>}/>
            </Route>

        <Route path="/about" element ={<About/>} />
    </Routes>
  )
}

export default Mainroutes
