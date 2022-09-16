import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";
import "./TodoSearch.css";

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };
  return (
    <div className="searchBarContainer">
      <input
        className="searchBar"
        placeholder="Search... 🔎"
        onChange={onSearchValueChange}
        value={searchValue}
      />
    </div>
  );
}

export { TodoSearch };
