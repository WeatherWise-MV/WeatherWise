import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PopupContainer, Title } from './WeatherPopupStyles';
import RainChart from './RainChart';
import ThreeDayForecast from './ThreeDayForecast';

const WeatherPopup = ({ isOpen, onClose, queryCity }) => {
  const [hourlyData, setHourlyData] = useState([]);
  const API_KEY = '5eb3443a85dd092f1a29ccb357130b4a';
  const API_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${queryCity}&appid=${API_KEY}&units=metric`;

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(API_URL);
        const hourlyRainData = response.data.list.slice(0, 9).map(item => item.rain ? item.rain['3h'] : 0);
        setHourlyData(hourlyRainData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchWeatherData();
  }, [API_URL]);

  return (
    <PopupContainer isOpen={isOpen} onClose={onClose}>
      <Title>Chance of Rain</Title>
      <RainChart data={hourlyData} />
 
      
      <Title>3 Day Forecast</Title>
      <ThreeDayForecast queryCity={queryCity} />
    </PopupContainer>
  );
};

export default WeatherPopup;
