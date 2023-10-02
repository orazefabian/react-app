import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import SearchBar from "./components/SearchBar";
import Weather from "./components/Weather";

function App() {
  const [city, setCity] = useState<string | null>(null);
  const handleSearch = (city: string) => {
    setCity(city);
  };

  return (
    <div className="main">
      <SearchBar onSearch={handleSearch} />
      <Weather city={city} />
    </div>
  );
}

export default App;
