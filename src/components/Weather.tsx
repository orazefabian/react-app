import React, { useEffect, useState } from "react";
import sun_icon from "../assets/clear.png";
import axios from "axios";

const Weather: React.FC<{ city: string | null }> = ({ city }) => {
  const [weatherData, setWeatherData] = useState<any>(null);

  const options = {
    method: "GET",
    url: "https://weatherapi-com.p.rapidapi.com/current.json",
    params: { q: city },
    headers: {
      "X-RapidAPI-Key": "88c6e9c30cmsh3d1f271990cf02fp135d81jsnba68844f15ef",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };
  useEffect(() => {
    axios
      .request(options)
      .then((response) => setWeatherData(response.data.current.temp_c))
      .catch((error) => {
        console.log("An error occurred:", error);
        setWeatherData(null);
      });
  }, [city]);

  return (
    <div className="container mt-5 row justify-content-center input-group">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {weatherData ? (
          <>
            <img src={sun_icon}></img>
            <h1>
              Temperature in {city} is {weatherData} °C
            </h1>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Weather;
