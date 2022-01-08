import React from 'react';

export default function WeatherDay(props) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [message, setMessage] = React.useState('More details...');

  const handleExpand = () => {
    setIsOpen(true);
    setMessage('Show less');
  };

  const handleCollapse = () => {
    setIsOpen(false);
    setMessage('More details...');
  };
  return (
    <>
      <div className="weather__container">
        <h1 className="weather__city">{props.weatherName}</h1>
        <div className={`weather__img weather__img_${props.weatherIcon}`} />
        <h2 className="weather__name">{props.weatherDesc}</h2>
        <p className="weather__temp">{props.weatherTemp}&#176;F</p>

        <ul className={`${isOpen ? 'weather__list' : 'weather__list_hidden'}`}>
          <li>Low: {props.weatherLow}&#176;F</li>
          <li>High: {props.weatherHigh}&#176;F</li>
          <li>Humidity: {props.weatherHumidity}%</li>
          <li>Wind Speed: {props.weatherWind} mph</li>
        </ul>
        <button
          className="button weather__list_button"
          onClick={isOpen ? handleCollapse : handleExpand}
        >
          {message}
        </button>
      </div>
    </>
  );
}
