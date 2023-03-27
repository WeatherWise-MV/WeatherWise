import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavContainer, Nav, NavItem, WeatherWrapper, Temperature, Description, LocationName, SearchBar } from '../components/weatherComponent'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Weather = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const API_KEY = '5eb3443a85dd092f1a29ccb357130b4a';
    const location = useLocation();
    const queryCity = new URLSearchParams(location.search).get('city');
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${queryCity}&appid=${API_KEY}&units=metric`;
    const navigate = useNavigate();

    // goes to settings
    const goToSetting = () => {
      navigate(`/settings`);
    }
    
    // goes to back page
    const goBack = () => {
      navigate(`/`);
    }

    const handleSearch = (event) => {
      setCity(event.target.value);
    };

    useEffect(() => {
      const savedLocation = localStorage.getItem("defaultLocation");

      if (queryCity) {
        // Use the location from query params
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
      } else if (savedLocation) {
        // Use the saved default location
        const defaultAPI_URL = `https://api.openweathermap.org/data/2.5/weather?q=${savedLocation}&appid=${API_KEY}&units=metric`;
        const fetchDefaultWeatherData = async () => {
          try {
            const response = await axios.get(defaultAPI_URL);
            setWeatherData({
              temperature: Math.ceil(response.data.main.temp),
              description: response.data.weather[0].description,
            });
          } catch (error) {
            console.error(error);
          }
        };
        fetchDefaultWeatherData();
      }
    }, [API_URL, queryCity]);

    return (
      <WeatherWrapper>
        <NavContainer>
          <Nav>
            <NavItem onClick={goBack}>Go Back</NavItem>
            <SearchBar>
                <input placeholder="Enter location name..." value={city} onChange={handleSearch}/>
                <button type="button" onClick={handleSearch}>Search</button>
            </SearchBar>
            <NavItem onClick={goToSetting}>Settings</NavItem>
          </Nav>
        </NavContainer>
          {weatherData ? (
          <>
              <LocationName>{queryCity || localStorage.getItem("defaultLocation") || "Manchester"}</LocationName>
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
