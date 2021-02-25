import "./App.css";
import "./index.css";
import genID from "./generateID";

import Recipe from "./components/Recipe";
import React, { useState, useEffect } from "react";
import Search from "./components/Search";

function App() {
  const APP_ID = process.env.REACT_APP_ID; //"71ea721b"
  const APP_KEY = process.env.REACT_APP_KEY; // "6f1a41bf29dfaa59fd925bc6e4c4fbb5"

  const [recipes, setRecipes] = useState([]);
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("chicken");

  const getData = async (searchTerm) => {
    const url = `https://api.edamam.com/search?q=${searchTerm}&app_id=${APP_ID}&app_key=${APP_KEY}`;

    const res = await fetch(url);
    const data = await res.json();
    setRecipes(data.hits);
  };

  useEffect(() => {
    getData(query);
  }, [query]);

  return (
    <div className="App">
      <div className="AppHeader">What are you planning on cooking today ?</div>
      <Search input={input} setInput={setInput} setQuery={setQuery} />
      <div className="RecipesContainer">
        {recipes.length > 0 ? (
          recipes.map((recipe, index) => {
            return <Recipe item={recipe.recipe} key={genID()} />;
          })
        ) : (
          <div className="Warning">
            Sorry we couldn't find any recipes matching that query term
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
