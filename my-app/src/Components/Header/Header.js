import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import WeatherAlerts from '../WeatherAlerts/WeatherAlerts';

export default function Header(props) {
  return (
    <header className="header">
      <Link to="/" className="button header__name">
        Weather
      </Link>
      <WeatherAlerts
        weatherAlerts={props.weatherAlerts}
        isAlerts={props.isAlerts}
      />
      <Navigation />
    </header>
  );
}
