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
      `/data/2.5/weather?q=${cityName}&units=imperial&appid=${this._apiKey}`,
      {
        headers: this._headers,
      },
    ).then(this._handleResponse);
  }

  getZipWeather(zipCode) {
    return fetch(
      `/data/2.5/weather?zip=${zipCode},us&units=imperial&appid=${this._apiKey}`,
      {
        headers: this._headers,
      },
    ).then(this._handleResponse);
  }

  getWeatherAlerts(lat, lon) {
    return fetch(
      `/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${this._apiKey}
`,
      {
        headers: this._headers,
      },
    ).then(this._handleResponse);
  }
}

const api = new Api('f9dca6765762554e8625629f29a25f91', {
  Authorization: 'f9dca6765762554e8625629f29a25f91',
  'Content-Type': 'application/json',
});

export default api;
