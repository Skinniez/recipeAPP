import React from "react";
import RecipeView from "./RecipeView";

function RecipeList({ recipes, deleteRecipe }) { 
  return (
    <React.Fragment>  
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {recipes.map((recipe, i) => (
            <RecipeView
              deleteRecipe={() => deleteRecipe(i)}
              key={i}
              recipe={recipe}
            />
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default RecipeList;