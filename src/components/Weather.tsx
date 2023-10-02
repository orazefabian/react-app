import React, { useEffect, useState } from "react";
import sun_icon from "../assets/clear.png";
import drizzle_icon from "../assets/drizzle.png";
import cloud_icon from "../assets/cloud.png";
import snow_icon from "../assets/snow.png";
import rain_icon from "../assets/rain.png";
import axios from "axios";
import Alert from "./Alert";
import Loading from "./Loading";

const Weather: React.FC<{ city: string | null }> = ({ city }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [temperature, setTemperature] = useState<any>("");
  const [weatherIcon, setWeatherIcon] = useState<any>("");

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
    setLoading(true);
    axios
      .request(options)
      .then((response) => {
        setTemperature(response.data.current.temp_c);
        const text = response.data.current.condition.text;
        if (
          text.toLowerCase().includes("sunny") ||
          text.toLowerCase().includes("clear")
        ) {
          setWeatherIcon(sun_icon);
        } else if (text.toLowerCase().includes("cloudy")) {
          setWeatherIcon(cloud_icon);
        } else if (text.toLowerCase().includes("rain")) {
          setWeatherIcon(drizzle_icon);
        } else if (text.toLowerCase().includes("snow")) {
          setWeatherIcon(snow_icon);
        } else if (text.toLowerCase().include("thunder")) {
          setWeatherIcon(rain_icon);
        }
      })
      .catch((error) => {
        console.log("An error occurred:", error);
        setTemperature(null);
        setWeatherIcon(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [city]);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="container mt-5 row justify-content-center input-group">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {temperature ? (
          <>
            <img src={weatherIcon}></img>
            <h1>
              Temperature in {city} is {temperature} °C
            </h1>
          </>
        ) : (
          <div>
            {city ? (
              <>
                <Alert>City {city} not found</Alert>
              </>
            ) : (
              <h2>Input City...</h2>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
