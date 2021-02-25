import React from "react";
import genID from "../generateID";

function Recipe({ item }) {
  return (
    <div className="RecipeCard">
      <img src={item.image} className="RecipeImg" alt="Dish"></img>

      <div className="RecipeTitle">{item.label}</div>
      <div className="RecipeCalories">
        <b>Calories: </b>
        {item.calories}
      </div>
      <ul className="RecipeIngredients">
        <b>Ingredients: </b>
        {item.ingredientLines.map((ingredient) => {
          return <li key={genID()}>{ingredient}.</li>;
        })}
      </ul>
    </div>
  );
}

export default Recipe;
