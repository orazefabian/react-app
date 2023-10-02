import { useState } from "react";
import search_icon from "../assets/search.png";
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

  return (
    <div className="logo container row mt-5 justify-content-center ">
      <div>
        <img src={search_icon} className="col-sm img-fluid"></img>
        <input
          className="col-sm form-control rounded border-0"
          type="text"
          placeholder="City..."
          value={query}
          onChange={handleInputChange}
        />
      </div>
      <button
        className="col-sm input-group-append btn btn-primary rounded"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
