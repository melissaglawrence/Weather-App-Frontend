import '../../index.css';
import React from 'react';
import { useHistory, Route, Switch, Redirect } from 'react-router-dom';
import api from '../../utils/WeatherApi';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Map from '../Map/Map';
import About from '../About/About';
// import Clouds from '../../images/icons/Clouds.svg';

export default function App() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isWeather, setIsWeather] = React.useState(false);
  const [isTitle, setIsTitle] = React.useState(true);
  const [isWeatherData, setIsWeatherData] = React.useState([]);
  const [isWeatherAlerts, setIsWeatherAlerts] = React.useState([]);

  const handleGetWeather = (input, radio) => {
    setIsLoading(true);
    setIsWeather(false);
    if (radio === 'city') {
      api
        .getCityWeather(input)
        .then((res) => {
          setIsWeatherData({
            name: res.name,
            desc: res.weather[0].description,
            temp: Math.round(res.main.temp),
            low: Math.round(res.main.temp_min),
            high: Math.round(res.main.temp_max),
            humidity: res.main.humidity,
            wind: Math.round(res.wind.speed),
            main: res.weather[0].main.toLowerCase(),
          });
        })
        .catch((err) => console.log(err));
    } else {
      api
        .getZipWeather(input)
        .then((res) => {
          setIsWeatherData({
            name: res.name,
            desc: res.weather[0].description,
            temp: Math.round(res.main.temp),
            low: Math.round(res.main.temp_min),
            high: Math.round(res.main.temp_max),
            humidity: res.main.humidity,
            wind: Math.round(res.wind.speed),
            main: res.weather[0].main.toLowerCase(),
          });
        })
        .catch((err) => console.log(err));
    }
    setIsTitle(false);
    setIsLoading(false);
    setIsWeather(true);
  };

  const handleGetMap = () => {
    api
      .getWeatherMap()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  // React.useEffect(() => {
  //   api.getWeatherAlerts().then((res) => setIsWeatherAlerts(res));
  // }, []);

  return (
    <div
      className={`page ${isWeather} ? page__background_${isWeatherData.main} : page__background_main`}
    >
      <Header />
      <Switch>
        <Route exact path="/">
          <Main
            isLoading={isLoading}
            isWeather={isWeather}
            isTitle={isTitle}
            getWeather={handleGetWeather}
            weatherName={isWeatherData.name}
            weatherIcon={isWeatherData.main}
            weatherDesc={isWeatherData.desc}
            weatherTemp={isWeatherData.temp}
            weatherLow={isWeatherData.low}
            weatherHigh={isWeatherData.high}
            weatherHumidity={isWeatherData.humidity}
            weatherWind={isWeatherData.wind}
          />
        </Route>
        <Route path="/map">
          <Map isLoading={isLoading} isMap={handleGetMap} />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}
