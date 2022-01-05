import React from 'react';

export default function WeatherAlerts(props) {
  return (
    <>
      <div className="weather-alert">
        <span className="weather-alert__scroll">{props.WeatherAlerts}</span>
      </div>
    </>
  );
}
