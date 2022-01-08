import React from 'react';

export default function WeatherAlerts(props) {
  return (
    <>
      <div className="weather-alert">
        <div className="weather-alert__scroll">
          {props.isAlerts ? (
            <span>
              {props.weatherAlerts.sender}: {props.weatherAlerts.alerts}
            </span>
          ) : null}
        </div>
      </div>
    </>
  );
}
