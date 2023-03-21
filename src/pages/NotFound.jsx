import React from "react";
import { Link } from "react-router-dom";
import sadFace from "../assets/images/sad-face.png";
import "../external/styles/NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <img src={sadFace} alt="Sad face" className="not-found-image" />
      <h1 className="not-found-title">404</h1>
      <p className="not-found-subtitle">Page Not Found</p>
      <p className="not-found-message">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link to="/" className="not-found-link">
        Return Home
      </Link>
    </div>
  );
};

export default NotFound;
