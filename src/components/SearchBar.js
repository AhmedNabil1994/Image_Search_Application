import "./SearchBar.css";
import { useState } from "react";
function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(term);
  };
  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  const handleClick = (e) => {
    setTerm("");
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={term}
          onChange={handleChange}
          placeholder="Enter Search Term"
        />
        <input type="reset" onClick={handleClick} />
      </form>
    </div>
  );
}

export default SearchBar;
