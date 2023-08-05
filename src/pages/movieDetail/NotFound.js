import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="error-text">Error 404</h1>
      <p className="warning-text">Page not found</p>
      <Link to="/">
        <button className="go-home-button">Go back to home page</button>
      </Link>
    </div>
  );
};

export default NotFound;
