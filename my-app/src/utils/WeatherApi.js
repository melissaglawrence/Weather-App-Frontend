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
      `/data/2.5/weather?q=${cityName}&units=imperial&appid=${this._apiKey}`,
      {
        headers: {
          Authorization: `${this._apiKey}`,
          'Content-Type': 'application/json',
        },
      },
    ).then(this._handleResponse);
  }

  getZipWeather(zipCode) {
    return fetch(
      `/data/2.5/weather?zip=${zipCode},us&units=imperial&appid=${this._apiKey}`,
      {
        headers: {
          Authorization: `${this._apiKey}`,
          'Content-Type': 'application/json',
        },
      },
    ).then(this._handleResponse);
  }

  getWeatherAlerts(lat, lon) {
    return fetch(
      `/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${this._apiKey}
`,
      {
        headers: {
          Authorization: `${this._apiKey}`,
          'Content-Type': 'application/ld+json',
        },
      },
    ).then(this._handleResponse);
  }
}

const api = new Api('f9dca6765762554e8625629f29a25f91');

export default api;
