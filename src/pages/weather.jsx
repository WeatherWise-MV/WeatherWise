import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { WeatherWrapper, Temperature, Description } from '../components/weatherComponent'
import { useLocation } from 'react-router-dom';

const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);
    const API_KEY = '5eb3443a85dd092f1a29ccb357130b4a';
    const location = useLocation();
    const CITY = new URLSearchParams(location.search).get('city');
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`;

    useEffect(() => {
        const fetchWeatherData = async () => {
          try {
            const response = await axios.get(API_URL);
            setWeatherData({
              temperature: Math.ceil(response.data.main.temp),
              description: response.data.weather[0].description,
            });
          } catch (error) {
            console.error(error);
          }
        };

        fetchWeatherData();
    }, [API_URL]);
  
    return (
    <WeatherWrapper>
        {weatherData ? (
        <>
            <Temperature>{weatherData.temperature}°</Temperature>
            <Description>{weatherData.description}</Description>
        </>
        ) : (
        <p>Loading...</p>
        )}
    </WeatherWrapper>
    );
};

export default Weather;