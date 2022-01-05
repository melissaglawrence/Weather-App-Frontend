import React from 'react';

export default function WeatherDay() {
  return (
    <>
      <div className="weather__container">
        <h1 className="weather__city"></h1>
        <img className="weather__img" src="" />
        <h2 className="weather__name"></h2>
        <ul className="weather__list"></ul>
      </div>
    </>
  );
}
