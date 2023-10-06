import { useState } from "react";
import search_icon from "../assets/search.jpeg";
import "../App.css";
interface SearchBarProps {
  onSearch: (city: string) => void;
}
const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  const handleEnterSearch = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      onSearch(query);
    }
  };

  return (
    <div className="input container mt-4 search">
      <div className="row container">
        <img
          src={search_icon}
          className="col-sm img-fluid"
          style={{ maxHeight: "4em", maxWidth: "5em" }}
        ></img>
        <input
          className="rounded form-control border-0 col-sm"
          style={{ fontSize: "18pt" }}
          type="text"
          placeholder="City..."
          value={query}
          onChange={handleInputChange}
          onKeyUp={handleEnterSearch}
        />
      </div>
      <div className="row">
        <button className="cta" onClick={handleSearch}>
          <span className="span">Search</span>
          <span className="second">
            <svg width="50px" height="20px" viewBox="0 0 66 43" version="1.1">
              <g
                id="arrow"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <path className="one" fill="#FFFFFF"></path>
                <path className="two" fill="#FFFFFF"></path>
                <path className="three" fill="#FFFFFF"></path>
              </g>
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
