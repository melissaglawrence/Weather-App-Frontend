import React from 'react';
import Preloader from '../Preloader/Preloader';
import WeatherDay from '../WeatherDay/WeatherDay';

export default function WeatherSearch({ children, ...props }) {
  const [input, setInput] = React.useState('');
  const [radio, setRadio] = React.useState('city');

  const handleSearchWeather = (e) => {
    e.preventDefault();
    props.getWeather(input, radio);
    setInput('');
  };
  return (
    <section className='search'>
      <div className='search__container'>
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
          <h1 className='search__title'>{props.headerMessage}</h1>
        ) : null}
        <form onSubmit={handleSearchWeather}>
          <div>
            <input
              type='text'
              className='search-bar'
              placeholder={`Enter your ${radio}`}
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type='submit' className='button search-bar__button'>
              Search
            </button>
          </div>
          <div className='search__radio-container'>
            <label htmlFor='citySearch' className='search__label'>
              City
            </label>
            <input
              type='radio'
              name='searchInput'
              className='search__radio-input'
              id='citySearch'
              value='city'
              onChange={(e) => setRadio('city')}
              checked={radio === 'city'}
            />
            <label htmlFor='zipSearch' className='search__label'>
              Zip Code
            </label>
            <input
              type='radio'
              name='searchInput'
              className='search__radio-input'
              id='zipSearch'
              value='Zip'
              onChange={(e) => setRadio('zip code')}
              checked={radio === 'zip code'}
            />
          </div>
        </form>
      </div>
    </section>
  );
}
