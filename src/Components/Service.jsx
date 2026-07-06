import React from 'react'
import {useNavigate} from "react-route-dom";

const Service = () => {
  const navigate = useNavigate();
  return (
    <div>
     <h1 className= " text-5xl font-thin" > Service </h1>
       <button
        onClick={ ( ) => Navigate("/service/detail")}
        className='bg-white text-black px-4 py-2 rounded'>
          more details

        </button>
    
  <hr className='my-10'/>
  <outlet/>
     
    </div>
  )
}

export default Service
