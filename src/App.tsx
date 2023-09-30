import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Alert from "./components/Alert";
import SearchBar from "./components/SearchBar";
import Weather from "./components/Weather";

function App() {
  const [city, setCity] = useState<string | null>(null);
  const handleSearch = (city: string) => {
    setCity(city);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <Weather city={city} />
    </>
  );
}

export default App;
