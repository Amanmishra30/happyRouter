import { createContext, useState } from "react"

export const Recipecontext = createContext(null);
const RecipeContext = (props) => {
    const [data,setdata] = useState([]);
  return (
    <Recipecontext.Provider value = {{data,setdata}}>
       {props.children}
    </Recipecontext.Provider>
  )
}

export default RecipeContext
