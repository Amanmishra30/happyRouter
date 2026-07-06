import React from 'react'
import { useNavigate ,useParams } from 'react-router-dom';
const ServiceDetails = () => {
     const navigate = useNavigate();
    
  return (
    <div>
      <h1 className='text-4xl font-thin mb-3'>more services </h1>
      <h2 className="text-2xl font-thin mb-5">choose us for better details </h2>
       <button onClick={ ( ) => Navigate(-1)}
        className='bg-white text-black px-4 py-2 rounded'>
          Go Back
        </button>
    </div>
  )
}

export default ServiceDetails