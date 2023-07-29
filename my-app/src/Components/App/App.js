import '../../index.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import api from '../../utils/WeatherApi';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import About from '../About/About';
import WeatherSearch from '../WeatherSearch/WeatherSearch';

export default function App() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isWeather, setIsWeather] = React.useState(false);
  const [isTitle, setIsTitle] = React.useState(true);
  const [isAlerts, setIsAlerts] = React.useState(false);
  const [weatherData, setWeatherData] = React.useState({});
  const [alerts, setAlerts] = React.useState({});
  const [location, setLocation] = React.useState({});
  const [headerMessage, setHeaderMessage] = React.useState(
    'Enter your city for the latest weather updates!',
  );

  const handleGetWeather = (input, radio) => {
    setIsLoading(true);
    setIsTitle(false);
    setIsWeather(false);
    if (radio === 'city') {
      api
        .getCityWeather(input)
        .then((res) => {
          if (!res) {
            setHeaderMessage(
              'Sorry, something went wrong during the request. There may be a connection issue or the server may be down. Please try again later.',
            );
            setIsLoading(false);
            setIsWeather(false);
            setIsTitle(true);
          }
          setIsTitle(false);
          setIsLoading(false);
          setIsWeather(true);
          setWeatherData({
            name: res.name,
            desc: res.weather[0].description,
            temp: Math.round(res.main.temp),
            low: Math.round(res.main.temp_min),
            high: Math.round(res.main.temp_max),
            humidity: res.main.humidity,
            wind: Math.round(res.wind.speed),
            main: res.weather[0].main.toLowerCase(),
          });
          setLocation({
            lat: res.coord.lat,
            lon: res.coord.lon,
          });
        })
        .catch(() => {
          setIsTitle(true);
          setIsWeather(false);
          setIsLoading(false);
          return setHeaderMessage('City not found');
        });
    } else {
      api
        .getZipWeather(input)
        .then((res) => {
          if (!res) {
            setHeaderMessage(
              'Sorry, something went wrong during the request. There may be a connection issue or the server may be down. Please try again later.',
            );
            setIsLoading(false);
            setIsWeather(false);
            setIsTitle(true);
          }
          setIsTitle(false);
          setIsLoading(false);
          setIsWeather(true);
          setWeatherData({
            name: res.name,
            desc: res.weather[0].description,
            temp: Math.round(res.main.temp),
            low: Math.round(res.main.temp_min),
            high: Math.round(res.main.temp_max),
            humidity: res.main.humidity,
            wind: Math.round(res.wind.speed),
            main: res.weather[0].main.toLowerCase(),
          });
          setLocation({
            lat: res.coord.lat,
            lon: res.coord.lon,
          });
        })
        .catch(() => {
          setIsTitle(true);
          setIsWeather(false);
          setIsLoading(false);
          return setHeaderMessage('City not found');
        });
    }
  };
  console.log(weatherData);

  //If there are weather alerts for area render for scroll
  React.useEffect(() => {
    api
      .getWeatherAlerts(location.lat, location.lon)
      .then((res) => {
        if (res.alerts) {
          setIsAlerts(true);
          setAlerts({
            sender: res.alerts[0].sender_name,
            alerts: res.alerts[0].description,
          });
        }
      })
      .catch((err) => console.log('No weather alerts'));
  }, [handleGetWeather]);

  return (
    <div
      className={`page ${isWeather} ? page__background_${weatherData.main} : page__background_main`}
    >
      <Header weatherAlerts={alerts} isAlerts={isAlerts} />
      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
        <Route path='/search'>
          <WeatherSearch
            isLoading={isLoading}
            isWeather={isWeather}
            isTitle={isTitle}
            getWeather={handleGetWeather}
            headerMessage={headerMessage}
            weatherName={weatherData.name}
            weatherIcon={weatherData.main}
            weatherDesc={weatherData.desc}
            weatherTemp={weatherData.temp}
            weatherLow={weatherData.low}
            weatherHigh={weatherData.high}
            weatherHumidity={weatherData.humidity}
            weatherWind={weatherData.wind}
          />
        </Route>

        <Route path='/about'>
          <About />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}
