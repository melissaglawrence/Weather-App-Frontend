import React from 'react';
import { Link } from 'react-router-dom';
import WeatherSearch from '../WeatherSearch/WeatherSearch';

export default function Main(props) {
  return (
    <>
      <section className="main">
        <div className="main__container">
          <h1 className="main__header">Find current weather data!</h1>
          <Link to="/search" className="button main__link">
            Get Started
          </Link>
        </div>
      </section>
    </>
  );
}
