import React from 'react';
import WeatherSearch from '../WeatherSearch/WeatherSearch';

export default function Main(props) {
  return (
    <>
      <WeatherSearch
        isLoading={props.isLoading}
        isWeather={props.isWeather}
        isTitle={props.isTitle}
      ></WeatherSearch>
    </>
  );
}
