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
  Temperature,
  TemperatureArrow,
  Day,
} from './WeatherPopupStyles';

const ThreeDayForecast = ({ queryCity }) => {
  const [forecastData, setForecastData] = useState([]);

  const API_KEY = '5eb3443a85dd092f1a29ccb357130b4a';
  const API_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${queryCity}&appid=${API_KEY}&units=metric`;

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(API_URL);
        const dailyData = response.data.list
          .filter((item) => item.dt_txt.includes('12:00:00'))
          .slice(0, 3);
        setForecastData(dailyData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchWeatherData();
  }, [API_URL]);

  return (
    <ForecastContainer>
      {forecastData.map((data) => (
        <DayContainer key={data.dt}>
          <HighLowContainer>
            <HighLow>
              <Temperature>{Math.round(data.main.temp_max)}°</Temperature>
              <TemperatureArrow>&#x2193;</TemperatureArrow>
              <Temperature>{Math.round(data.main.temp_min)}°</Temperature>
              <TemperatureArrow>&#8593;</TemperatureArrow>
            </HighLow>
          </HighLowContainer>
          <WeatherInfoContainer>
            <WeatherIcon
              src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
              alt={data.weather[0].description}
            />
            <div>
              <Day>{new Date(data.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' })}</Day>
              <Condition style={{ textTransform: 'capitalize' }}>{data.weather[0].description}</Condition>
            </div>
          </WeatherInfoContainer>
        </DayContainer>
      ))}
    </ForecastContainer>
  );
};

export default ThreeDayForecast;