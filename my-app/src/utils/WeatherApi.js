class Api {
  constructor(apiKey, headers) {
    this._apiKey = apiKey;
    this._headers = headers;
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
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${this._apiKey}`,
      {
        headers: this._headers,
      },
    ).then(this._handleResponse);
  }

  getZipWeather(zipCode) {
    return fetch(
      `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${this._apiKey}`,
      {
        headers: this._headers,
      },
    ).then(this._handleResponse);
  }

  getWeatherAlerts(lat, lon) {
    return fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this._apiKey}`,
      {
        headers: this._headers,
      },
    ).then(this._handleResponse);
  }
}

const api = new Api('f9dca6765762554e8625629f29a25f91', {
  // Authorization: 'f9dca6765762554e8625629f29a25f91',
  'Content-Type': 'application/json',
});

export default api;
