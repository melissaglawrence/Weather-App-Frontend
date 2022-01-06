import React from 'react';

export default function WeatherDay(props) {
  return (
    <>
      <div className="weather__container">
        <h1 className="weather__city">{props.weatherName}</h1>
        <div className={`weather__img weather__img_${props.weatherIcon}`} />
        <h2 className="weather__name">{props.weatherDesc}</h2>
        <p className="weather__temp">{props.weatherTemp}&#176;F</p>
        <ul className="weather__list">
          <li>Low: {props.weatherLow}&#176;F</li>
          <li>High: {props.weatherHigh}&#176;F</li>
          <li>Humidity: {props.weatherHumidity}%</li>
          <li>Wind Speed: {props.weatherWind} mph</li>
        </ul>
      </div>
    </>
  );
}
