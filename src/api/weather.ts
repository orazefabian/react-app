import axios from "axios"
import { weatherKey } from "./keys"

const baseUrl = "https://weatherapi-com.p.rapidapi.com/current.json"

interface WeatherData{
    data: {
    location: {
        country: string,
        lat: number,
        localtime: string,
        localtime_epoch: number,
        lon: number,
        name: string,
        region: string,
        tz_id: string
    },
    current: {
        last_updated_epoch: number,
        last_updated: string,
        temp_c: number,
        cloud: number,
        feelslike_c: number,
        feelslike_f: number,
        gust_kph: number,
        gust_mph: number,
        humidity: number,
        is_day: number,
        precip_in: number,
        precip_mm: number,
        pressure_in: number,
        pressure_mb: number,
        temp_f: number,
        uv: number,
        vis_km: number,
        vis_miles: number,
        wind_degree: number,
        wind_dir: string,
        wind_kph: number,
        wind_mph: number,
        condition: {
            text: string,
            icon: string,
            code: number
        }
    }
    }
}

export const fetchWeatherData = async (city: string | null): Promise<WeatherData> => {
    const options = {
        url: baseUrl,
        params: {q : city},
        headers: {
            "X-RapidAPI-Key" : weatherKey,
            "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
        }
    }
    return await axios.request(options);
}