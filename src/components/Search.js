import React from "react";

function Search({ input, setInput, setQuery }) {
  const handleSubmit = (inp) => {
    if (inp.trim().length > 0) {
      setQuery(inp.trim());
    }
  };

  const handleSubmitWrapper = (e) => {
    e.preventDefault();
    handleSubmit(input);
    setInput("");
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <form className="Search" onSubmit={handleSubmitWrapper}>
      <input
        type="text"
        className="SearchInput"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter a keyword to search for a recipe.."
      />
      <input type="submit" className="SearchBtn hidden" />
      <i onClick={handleSubmitWrapper} className="fas fa-search SearchBtn"></i>
    </form>
  );
}

export default Search;
