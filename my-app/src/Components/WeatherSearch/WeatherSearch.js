import React from 'react';
import Preloader from '../Preloader/Preloader';
import SearchBar from '../SearchBar/SearchBar';
import WeatherDay from '../WeatherDay/WeatherDay';

export default function WeatherSearch({ children, ...props }) {
  return (
    <section className='search'>
      <div className='search__container'>
        {props.isLoading ? <Preloader /> : null}
        {props.isWeather ? <WeatherDay /> : null}
        {props.isTitle ? (
          <h1 className='search__title'>
            Enter your city for the latest weather updates!
          </h1>
        ) : null}
        <form className='search__form'>
          <SearchBar />
          <div className='search__radio-container'>
            <label htmlFor='citySearch' className='search__label'>
              City
            </label>
            <input
              type='radio'
              name='searchInput'
              className='search__radio-input'
              id='citySearch'
              value=''
              checked='checked'
            />
            <label htmlFor='zipSearch' className='search__label'>
              Zip Code
            </label>
            <input
              type='radio'
              name='searchInput'
              className='search__radio-input'
              id='zipSearch'
              value=''
            />
          </div>
        </form>
      </div>
    </section>
  );
}
