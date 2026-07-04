  
import { useNavigate } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate();
const NavigationHandler = () => {
  navigate ("/product/detail");
};

  return 
    <div>
     

      <h1 className='text-5xl font-thin mb-5'> product </h1>
      <div className="mb-10">
        <h1 className='text-2x font-thin mb-3 '>Product 1</h1>
        <button 
         onClick= {NavigationHandler}
        className='bg-white text-black px-4 py-2 rounded'>
          see details
        </button>
      </div>

      <div>
        <h1 className='text-2xl font-thin '>Product 1</h1>
        <button 
         onClick= {NavigationHandler}
         className='bg-white text-black px-4 py-2 rounded'>
          see details
        </button>
      </div>

      <div>
        <h1 className='text-2xl font-thin '>Product 1</h1>
        <button 
        onClick= {NavigationHandler}
        className='bg-white text-black px-4 py-2 rounded'>
          see details
        </button>
      </div>
    </div>
  
}

export default Product
