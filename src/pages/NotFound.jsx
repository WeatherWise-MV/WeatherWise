import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";
const NotFound = () => {

  return (
    <div className="e404-container">
      <img src="./asse" className="logo" alt="sad face" />
      <h1 className="e404-title">404</h1>
      <p className="e04-subtitle">Page Not Found</p>
      <p className="e404-message">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link to="/">Return Home</Link>
    </div>
  );
};

export default NotFound;
