import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  ForecastContainer,
  DayContainer,
  HighLow,
  HighLowContainer,
  Condition,
  WeatherIcon,
  WeatherInfoContainer,
  TemperatureHigh,
  TemperatureLow,
  TemperatureArrow,
  Day,
} from './WeatherPopupStyles';

const ThreeDayForecast = ({ queryCity }) => {
  const [temps, setTemps] = useState({});

  const API_KEY = '5eb3443a85dd092f1a29ccb357130b4a';
  const API_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${queryCity}&appid=${API_KEY}&units=metric`;

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(API_URL);
        const data = response.data;
    
        // Extract the high and low temperatures, icon code and description for each day
        const temps = {};
        for (const forecast of data.list) {
          const date = forecast.dt_txt.slice(0, 10);
          if (!(date in temps)) {
            temps[date] = { high: -100, low: 100, icon: '', description: '' };
          }
          const temp = forecast.main.temp;
          if (temp > temps[date].high) {
            temps[date].high = temp;
          }
          if (temp < temps[date].low) {
            temps[date].low = temp;
          }
          temps[date].icon = forecast.weather[0].icon;
          temps[date].description = forecast.weather[0].description;
        }
    
        setTemps(temps);
      } catch (error) {
        console.error(error);
      }
    };
    fetchWeatherData();
  }, [API_URL]);

  return (
    <ForecastContainer style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
      {Object.entries(temps)
        .filter(([date]) => {
          const currentDate = new Date();
          const forecastDate = new Date(date);
          const timeDifference = forecastDate.getTime() - currentDate.getTime();
          const dayDifference = timeDifference / (24 * 60 * 60 * 1000);
          return dayDifference >= 0 && dayDifference <= 3;
        })
        .map(([date, temps]) => (
          <DayContainer key={date}>
          <HighLowContainer>
            <HighLow>
              <TemperatureLow>{Math.round(temps.low)}°</TemperatureLow>
              <TemperatureArrow>&#x2193;</TemperatureArrow>
              <TemperatureHigh>{Math.round(temps.high)}°</TemperatureHigh>
              <TemperatureArrow>&#8593;</TemperatureArrow>
            </HighLow>
          </HighLowContainer>
          <WeatherInfoContainer>
          <WeatherIcon
            src={`http://openweathermap.org/img/w/${temps.icon}.png`}
            alt={temps.description}
          />
          <div>
            <Day>{new Date(date).toLocaleDateString('en-GB', { weekday: 'long' })}</Day>
            <Condition style={{ textTransform: 'capitalize' }}>{temps.description}</Condition>
          </div>
        </WeatherInfoContainer>
        </DayContainer>
      ))}
    </ForecastContainer>
  );
};

export default ThreeDayForecast
