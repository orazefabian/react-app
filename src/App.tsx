import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import Weather from "./components/Weather";

const App = () => {
  const [city, setCity] = useState<string | null>("");
  const handleSearch = (city: string) => {
    setCity(city);
  };

  return (
    <div className="main">
      <SearchBar onSearch={handleSearch} />
      <Weather city={city} currentHours={null} />
    </div>
  );
};

export default App;
