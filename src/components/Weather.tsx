import React, { useEffect, useState } from "react";
import sun_icon from "../assets/clear.png";
import drizzle_icon from "../assets/drizzle.png";
import cloud_icon from "../assets/cloud.png";
import snow_icon from "../assets/snow.png";
import rain_icon from "../assets/rain.png";
import fog_icon from "../assets/fog.png";
import axios from "axios";
import { fetchWeatherData } from "../api/weather";
import Alert from "./Alert";
import Loading from "./Loading";
import Time from "./Time";

interface WeatherProps {
  city: string | null;
  currentHours: string | null;
}

const Weather: React.FC<WeatherProps> = ({ city, currentHours }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [temperature, setTemperature] = useState<any>("");
  const [weatherIcon, setWeatherIcon] = useState<any>("");
  const [time, setTime] = useState<string | null>("");

  useEffect(() => {
    setLoading(true);
    fetchWeatherData(city)
      .then((response) => {
        console.log(response.data);
        setTemperature(response.data.current.temp_c);
        setTime(response.data.location.localtime);
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
        } else if (text.toLowerCase().includes("thunder")) {
          setWeatherIcon(rain_icon);
        } else if (text.toLowerCase().includes("overcast")) {
          setWeatherIcon(cloud_icon);
        } else if (text.toLowerCase().includes("mist")) {
          setWeatherIcon(cloud_icon);
        } else if (text.toLowerCase().includes("fog")) {
          setWeatherIcon(fog_icon);
        }
      })
      .catch((error) => {
        console.log("An error occurred:", error);
        setTemperature(null);
        setWeatherIcon(null);
        setTime(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [city]);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <>
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
              <img
                src={weatherIcon}
                style={{ width: "15em", height: "15em" }}
              ></img>
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
      {city && time ? (
        <>
          <Time time={time} />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Weather;
