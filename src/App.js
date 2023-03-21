import React from "react";
import { BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import Home from "./pages/home";
import Settings from "./pages/settings";
import Weather from "./pages/weather";
import WeatherForecast from "./pages/weatherForecast";
import NotFound from "./pages/notFound";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/weatherforecast" element={<WeatherForecast />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>
  );
}

export default App;
