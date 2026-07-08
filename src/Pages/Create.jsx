import { useForm } from "react-hook-form";


const Create = () => {
  const {register, handleSubmit} = useForm()
  return (
    <form >
      <input
      className=" block border-b outline-0 p-2"
       {...register("image")} 
       type = "file" 
       />
       <small className = "text-red-500"> 
       This is how the error is shown 
       </small>
       <textarea
      className="border-b outline-0 p-2"
       {...register("enter from here")} 
       placeholder="Recipes Title">
        </textarea>

       <small className = "text-red-500"> 
       This is how the error is shown 
       </small> 
       <textarea
      className="border-b outline-0 p-2"
       {...register("enter from here")} 
       placeholder="Recipes Title">
        </textarea>

       <small className = "text-red-500"> 
       This is how the error is shown 
       </small> 
    </form>
  )
}

export default Create
