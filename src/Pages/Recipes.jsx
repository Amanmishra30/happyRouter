import { useContext } from "react ";
import {datacontext} from "../context/RecipeContext";

const Recipes = () => {

    const {data } = useContext(datacontext);
    const renderrecipes = data.map((recipe) => (
        <div key= {Recipes.id}>
            <h1>
                {recipe.title}
            </h1>
        </div>
    ))
  return 
    
  <div>Rrecipes</div>
}

export default Recipes
