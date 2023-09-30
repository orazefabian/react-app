import { useState } from "react";
import search_icon from "../assets/search.png";

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
    <div className="container mt-5 row justify-content-center ">
      <div style={{ display: "flex" }}>
        <img src={search_icon} className="img-fluid"></img>
        <input
          className="form-control rounded border-0 float-right"
          type="text"
          placeholder="City..."
          value={query}
          onChange={handleInputChange}
        />
      </div>
      <button
        className="input-group-append btn btn-primary rounded"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
