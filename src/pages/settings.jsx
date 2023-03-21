import React, { useState, useEffect } from "react";
import "./settings.css"

function Settings() {
  const [defaultLocation, setDefaultLocation] = useState("");
  const [tempUnit, setTempUnit] = useState("D");
  const [trackLocation, setTrackLocation] = useState(false);

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

  const saveSettings = () => {
    localStorage.setItem("defaultLocation", defaultLocation);
    localStorage.setItem("tempUnit", tempUnit);
    localStorage.setItem("trackLocation", JSON.stringify(trackLocation));
  };

  return (
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
            <option value="D">Degrees Celsius</option>
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
      </div>
    </div>
  );
}

export default Settings;