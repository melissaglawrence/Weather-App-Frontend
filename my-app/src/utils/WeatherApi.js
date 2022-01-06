class Api {
  constructor(apiKey) {
    this._apiKey = apiKey;
  }

  _handleResponse = (res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error ${res.status}`);
    }
  };

  getCityWeather(cityName) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${this._apiKey}`,
      {
        headers: {
          // Authorization: `${this._apiKey}`,
          'Content-Type': 'application/json',
        },
      }
    ).then(this._handleResponse);
  }

  getZipWeather(zipCode) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&units=imperial&appid=${this._apiKey}`,
      {
        headers: {
          Authorization: `${this._apiKey}`,
          'Content-Type': 'application/json',
        },
      }
    ).then(this._handleResponse);
  }

  getWeatherAlerts() {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.weather.gov/alerts/active`,
      {
        headers: {
          Authorization: `${this._apiKey}`,
          'Content-Type': 'application/json',
        },
      }
    ).then(this._handleResponse);
  }

  getWeatherMap() {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://openweathermap.org/weathermap?basemap=map&cities=false&layer=precipitation&lat=38.1346&lon=-95.1855&zoom=4&${this._apiKey}`,
      {
        headers: {
          Authorization: `${this._apiKey}`,
          'Content-Type': 'application/json',
        },
      }
    ).then(this._handleResponse);
  }
}

const api = new Api('f9dca6765762554e8625629f29a25f91');

export default api;
