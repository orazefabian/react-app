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
    <div className="container-fluid mt-4 search">
      <div className="row">
        <img
          src={search_icon}
          className="col-sm img-fluid"
          style={{ maxHeight: "4em", maxWidth: "4em" }}
        ></img>
        <input
          className="rounded form-control border-0 col-sm"
          style={{ fontSize: "14pt" }}
          type="text"
          placeholder="City..."
          value={query}
          onChange={handleInputChange}
          onKeyUp={handleEnterSearch}
        />
      </div>
      <div className="row">
        <button className="btn btn-primary rounded" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
