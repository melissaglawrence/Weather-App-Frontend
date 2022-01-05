import React from 'react';
import Navigation from '../Navigation/Navigation';
import WeatherAlerts from '../WeatherAlerts/WeatherAlerts';

export default function Header() {
  return (
    <header className="header">
      <div className="header__name">Weather Alerts: </div>
      <WeatherAlerts />
      <Navigation />
    </header>
  );
}
