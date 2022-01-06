import React from 'react';
import Preloader from '../Preloader/Preloader';
import WeatherDay from '../WeatherDay/WeatherDay';

export default function WeatherSearch({ children, ...props }) {
  const [isInput, setIsInput] = React.useState('');
  const [isRadio, setIsRadio] = React.useState('city');

  const handleSearchWeather = (e) => {
    e.preventDefault();
    props.getWeather(isInput, isRadio);
    setIsInput('');
  };
  return (
    <section className="search">
      <div className="search__container">
        {props.isLoading ? <Preloader /> : null}
        {props.isWeather ? (
          <WeatherDay
            weatherName={props.weatherName}
            weatherDesc={props.weatherDesc}
            weatherIcon={props.weatherIcon}
            weatherTemp={props.weatherTemp}
            weatherLow={props.weatherLow}
            weatherHigh={props.weatherHigh}
            weatherHumidity={props.weatherHumidity}
            weatherWind={props.weatherWind}
          />
        ) : null}
        {props.isTitle ? (
          <h1 className="search__title">
            Enter your city for the latest weather updates!
          </h1>
        ) : null}
        <form onSubmit={handleSearchWeather}>
          <div>
            <input
              type="text"
              className="search-bar"
              placeholder="Enter your city"
              value={isInput}
              onChange={(e) => setIsInput(e.target.value)}
            />
            <button type="submit" className="button search-bar__button">
              Search
            </button>
          </div>
          <div className="search__radio-container">
            <label htmlFor="citySearch" className="search__label">
              City
            </label>
            <input
              type="radio"
              name="searchInput"
              className="search__radio-input"
              id="citySearch"
              value="city"
              onChange={(e) => setIsRadio('city')}
              checked={isRadio === 'city'}
            />
            <label htmlFor="zipSearch" className="search__label">
              Zip Code
            </label>
            <input
              type="radio"
              name="searchInput"
              className="search__radio-input"
              id="zipSearch"
              value="Zip"
              onChange={(e) => setIsRadio('zip')}
              checked={isRadio === 'zip'}
            />
          </div>
        </form>
      </div>
    </section>
  );
}
