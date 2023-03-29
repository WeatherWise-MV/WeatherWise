import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../external/styles/settings.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { cities } from '../external/scripts/cities'


function Settings() {
  const navigate = useNavigate();
  const [defaultLocation, setDefaultLocation] = useState("");
  const [tempUnit, setTempUnit] = useState("C");
  const [trackLocation, setTrackLocation] = useState(false);
  const [savedMessage, setSavedMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const savedLocation = localStorage.getItem("defaultLocation");
    const savedUnit = localStorage.getItem("tempUnit");
    const savedTrackLocation = localStorage.getItem("trackLocation");
  
    if (savedLocation) {
      setDefaultLocation(savedLocation);
    }
    if (savedUnit) {
      setTempUnit(savedUnit);
    }
    if (savedTrackLocation) {
      setTrackLocation(JSON.parse(savedTrackLocation));
    }
  
    // clear saved message after 1.5 seconds
    if (savedMessage) {
      const timer = setTimeout(() => {
        setSavedMessage(null);
      }, 1500);
      return () => clearTimeout(timer);
    }
  
    // clear error message after 1.5 seconds
    if (errorMessage) {
      const timer = setTimeout(() => {
        setErrorMessage(null);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [savedMessage, errorMessage]);

  const handleSelectChange = (e) => {
    setDefaultLocation(e.target.value);
  };

  // Auto complete suggestions
  const handleKeyDown = (e) => {
    const query = e.target.value;
    const filtered = cities.filter(
      (city) =>
        city.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
    setSuggestions(filtered);
  } 
  
  const saveSettings = async () => {
    setSavedMessage("");
    setErrorMessage("");

    if (defaultLocation) {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${defaultLocation}&appid=5eb3443a85dd092f1a29ccb357130b4a`
        );

        if (response.data.cod !== 200) {
          setErrorMessage("Invalid location. Please enter a valid location.");
          return;
        }
      } catch (error) {
        setErrorMessage("Error validating location. Please try again.");
        return;
      }
    }

    try {
      localStorage.setItem("defaultLocation", defaultLocation);
      localStorage.setItem("tempUnit", tempUnit);
      localStorage.setItem("trackLocation", JSON.stringify(trackLocation));
      setSavedMessage("Settings saved successfully");
      setErrorMessage("");
    } catch (error) {
      setSavedMessage("");
      setErrorMessage("There was an error saving your settings");
    }
  };
  
  return (
    <div className="settings-parent">
      <div className="settings-container">
        <div className="heading-back-btn">
        <button onClick={() => navigate(-1)} className="back-button">
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <h1>Settings</h1>
        </div>
        <div className="settings-form">
          <label htmlFor="defaultLocation">Default Location:</label>
          <div className="autocomplete">
            <select
              id="defaultLocation"
              value={defaultLocation}
              onChange={handleSelectChange}
              onKeyDown={handleKeyDown}
              onBlur={() => setSuggestions([])}
            >
              <option value="">Select a city...</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
            {suggestions.length > 0 && (
              <select onChange={handleSelectChange}>
                <option value="">Select a city...</option>
                {suggestions.map((suggestion) => (
                  <option key={suggestion} value={suggestion}>
                    {suggestion}
                  </option>
                ))}
              </select>
            )}
          </div>
          <div>
            <label htmlFor="tempUnit">Temperature Unit:</label>
            <select
              id="tempUnit"
              value={tempUnit}
              onChange={(e) => setTempUnit(e.target.value)}
            >
              <option value="C">Celsius</option>
              <option value="K">Kelvin</option>
              <option value="F">Fahrenheit</option>
            </select>
          </div>
          <div className="switch-align">
            <label htmlFor="trackLocation">Track Saved Location:</label>
            <div className="switch-container">
              <label className="switch">
                <input
                  type="checkbox"
                  id="trackLocation"
                  checked={trackLocation}
                  onChange={(e) => setTrackLocation(e.target.checked)}
                />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
          <button className="save-settings-button" onClick={saveSettings}>
            Save Settings
          </button>
          {savedMessage && <p className="success-message">{savedMessage}</p>}
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
      </div>
    </div>
  );
}

export default Settings;