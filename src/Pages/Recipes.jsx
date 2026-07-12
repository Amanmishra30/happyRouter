import { useContext } from "react ";
import { Recipecontext} from "../context/RecipeContext";

const Recipes = () => {

    const {data } = useContext(recipecontext);
    const renderrecipes = data.map((recipe) => (
        <div key= {Recipes.id}>
            <h1>
                {recipe.title}
            </h1>
        </div>
    ))

  return  
  <div> {renderrecipes}</div>
}

export default Recipes
