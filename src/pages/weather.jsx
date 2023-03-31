import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import axios from 'axios';
import { NavContainer, Nav, WeatherWrapper, Temperature, SearchBar, LocationContainer, CurrentLocationLabel, CurrentLocation, WeatherInfoBox, WeatherInfoContainer, MainContainer, ContentContainer, WeatherIcon, WeatherInfoBoxWrapper, WeatherInfoColumn } from '../components/weatherComponent'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import WeatherPopup from '../components/WeatherPopup';
import StyledMapComponent from '../components/mapComponent';

const Weather = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const API_KEY = '5eb3443a85dd092f1a29ccb357130b4a';
    const location = useLocation();
    const queryCity = new URLSearchParams(location.search).get('city');
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${queryCity}&appid=${API_KEY}&units=metric`;
    const navigate = useNavigate();

    const CurrentDateTime = () => {
      const now = new Date();
      const options = { weekday: 'long', hour: 'numeric', minute: 'numeric', hour12: true, timeZone: 'Europe/London', formatMatcher: 'best fit' };
      const formattedDate = now.toLocaleDateString('en-GB', options);
      return <p>{formattedDate}</p>;
    };

    const handleSearch = (e) => {
      e.preventDefault();
      navigate(`/weather?city=${city}`);
    };

    if (!localStorage.getItem("defaultLocation")) {
      localStorage.setItem("defaultLocation", "Manchester");
    }

    useEffect(() => {
      const savedLocation = localStorage.getItem("defaultLocation");

      if (queryCity) {
        // Use the location from query params
        const fetchWeatherData = async () => {
          try {
            const response = await axios.get(API_URL);
            setWeatherData({
              temperature: Math.ceil(response.data.main.temp),
              description: response.data.weather[0].description
              .split(" ")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" "),
              icon: response.data.weather[0].icon,
              country: response.data.sys.country,
              precipitation: response.data.rain?.["1h"] || response.data.snow?.["1h"] || 0,
              humidity: response.data.main.humidity / 100,
              wind: Math.round(response.data.wind.speed * 2.237), // convert m/s to mph
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
              description: response.data.weather[0].description
              .split(" ")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" "),
              icon: response.data.weather[0].icon,
              country: response.data.sys.country,
              precipitation: response.data.rain?.["1h"] || response.data.snow?.["1h"] || 0,
              humidity: response.data.main.humidity / 100,
              wind: Math.round(response.data.wind.speed * 2.237), // convert m/s to mph
            });
          } catch (error) {
            console.error(error);
          }
        };
        fetchDefaultWeatherData();
      }
    }, [API_URL, queryCity]);

    const handleCityChange = (e) => {
      setCity(e.target.value);
    };

    return (
      <WeatherWrapper>
        <NavContainer>
          <Nav>
          </Nav>
          <div>
            <SearchBar>
              <input 
              placeholder="Enter location name..." 
              value={city} 
              onChange={handleCityChange}
              />
              
              <button type="submit" onClick={handleSearch}>Search</button>
            </SearchBar>
          </div>
          <div></div>
        </NavContainer>
          {weatherData ? (
          <>
            <MainContainer>
              <ContentContainer>
                <div id="surround" style={{ display: 'flex', gap: '1rem', justifyContent: 'space-between', alignItems: 'flex-end'}}>

                  <LocationContainer>
                    <CurrentLocationLabel>Current Location</CurrentLocationLabel>
                    <CurrentLocation>{queryCity || localStorage.getItem("defaultLocation")}, {weatherData.country}</CurrentLocation>
                    <StyledMapComponent city={city} />
                  </LocationContainer>
                  <WeatherInfoContainer>
                    <WeatherInfoColumn>
                      <WeatherInfoBoxWrapper>
                        <WeatherInfoBox>
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                            <div style={{ marginRight: '4rem' }}>
                              <Temperature>{weatherData.temperature}° C</Temperature>
                              <CurrentDateTime />
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                              <WeatherIcon
                                src={`http://openweathermap.org/img/w/${weatherData.icon}.png`}
                                alt={weatherData.description}
                              />
                              <p>{weatherData.description}</p>
                            </div>
                          </div>
                        </WeatherInfoBox>

                        <WeatherInfoBox>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                            <div>
                              <p>Precipitation</p>
                              <h1>{weatherData.precipitation}%</h1>
                            </div>
                        </div>
                        </WeatherInfoBox>
                      </WeatherInfoBoxWrapper>
                    </WeatherInfoColumn>

                    <WeatherInfoColumn>  
                      <WeatherInfoBoxWrapper>
                        <WeatherInfoBox>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                            <div>
                              <p>Humidity</p>
                              <h1>{weatherData.humidity}%</h1>
                            </div>
                        </div>
                        </WeatherInfoBox>  

                        <WeatherInfoBox>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                            <div>
                              <p>Wind</p>
                              <h1>{weatherData.wind}MPH</h1>
                            </div>
                        </div>
                        </WeatherInfoBox>
                      </WeatherInfoBoxWrapper>
                    </WeatherInfoColumn>                          
                  </WeatherInfoContainer>

                </div>
                <WeatherPopup queryCity={queryCity || localStorage.getItem("defaultLocation")} />
              </ContentContainer>
            </MainContainer>
          </>
          ) : (
          <p>Loading...</p>
          )}
      </WeatherWrapper>
    );
};
        
export default Weather;
