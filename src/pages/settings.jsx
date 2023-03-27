import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../external/styles/settings.css";
import { ReactComponent as BackIcon } from "../assets/svg/back.svg";

function Settings() {
  const navigate = useNavigate();
  const [defaultLocation, setDefaultLocation] = useState("");
  const [tempUnit, setTempUnit] = useState("D");
  const [trackLocation, setTrackLocation] = useState(false);
  const [savedMessage, setSavedMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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
  }, []);

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
      setSavedMessage("You have successfully saved.");
      setErrorMessage("");
    } catch (error) {
      setSavedMessage("");
      setErrorMessage("Error saving settings. Please try again.");
    }
  };

  return (
    <div className="settings-parent">
    <div className="settings-container">
      <h1>Settings</h1>
      <div className="settings-form">
        <div>
          <label htmlFor="defaultLocation">Default Location:</label>
          <input
            type="text"
            id="defaultLocation"
            value={defaultLocation}
            onChange={(e) => setDefaultLocation(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="tempUnit">Temperature Unit:</label>
          <select
            id="tempUnit"
            value={tempUnit}
            onChange={(e) => setTempUnit(e.target.value)}
          >
            <option value="D">Default</option>
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
    <button onClick={() => navigate(-1)} className="back-button">
    <BackIcon className="back-icon" />
  </button>
    </div>
  );
}

export default Settings;
