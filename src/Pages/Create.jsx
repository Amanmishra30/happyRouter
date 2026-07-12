import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Recipecontext } from "../context/RecipeContext";


const Create = () => {
  const{data, setdata}= useContext(Recipecontext);
  const {register, handleSubmit,reset} = useForm();

  const SubmitHandler = (recipe) =>{
    recipe.id = nanoid();
    console.log(recipe);

   
    setdata([...data,recipe])
    reset();

  }
  return (
    <form >
      <input
      className=" block border-b outline-0 p-2"
       {...register("image")} 
       type = "url" 
       placeholder="enter image url"
       />
       <small className = "text-red-500"> 
       This is how the error is shown 
       </small>
       <textarea
      className="border-b outline-0 p-2"
       {...register("enter from here")} 
       placeholder="Recipes Title">
        </textarea>

        <input
      className="border-b outline-0 p-2"
       {...register("chef ")} 
       type = "text"
       placeholder="Chef Name">
        </input>

       
       <textarea
      className="border-b outline-0 p-2"
       {...register("ingredients")} 
       placeholder="// start from here ">
        </textarea>

       

       <textarea
      className="border-b outline-0 p-2"
       {...register("instructions")} 
       placeholder="//write ingredients seperated by comma">
        </textarea>

        
       <textarea
      className="border-b outline-0 p-2"
       {...register("instructions")} 
       placeholder="//write intructions  seperated by comma">
        </textarea>
        
      <Select 
      className="border-b outline-0 p-2"
       {...register("Category")} 
      >
       <option  value = "cat-1">Category 1  </option>
       <option  value = "cat-2">Category 2  </option>
       <option  value = "cat-3">Category 3  </option>
        </Select>

       

       <button className="mt-5 block bg-zinc-800 px-4 py-2 "> Save Recipe </button> 
    </form>
  )
}

export default Create
