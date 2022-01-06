import React from 'react';
import WeatherSearch from '../WeatherSearch/WeatherSearch';

export default function Main(props) {
  return (
    <>
      <WeatherSearch
        isLoading={props.isLoading}
        isWeather={props.isWeather}
        isTitle={props.isTitle}
        getWeather={props.getWeather}
        weatherName={props.weatherName}
        weatherIcon={props.weatherIcon}
        weatherDesc={props.weatherDesc}
        weatherTemp={props.weatherTemp}
        weatherLow={props.weatherLow}
        weatherHigh={props.weatherHigh}
        weatherHumidity={props.weatherHumidity}
        weatherWind={props.weatherWind}
      ></WeatherSearch>
    </>
  );
}
