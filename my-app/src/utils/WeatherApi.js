// const getCityWeather = () =>
//   fetch(
//     `api.openweathermap.org/data/2.5/weather?q=reno&units=imperial&appid=f9dca6765762554e8625629f29a25f91`,
//     {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     }
//   ).then((res) => {
//     if (res.ok) {
//       return res.json();
//     }
//     return Promise.reject(`Error ${res.status}`);
//   });

// const getZipWeather = (zipCode) =>
//   fetch(
//     `api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&units=imperial&appid=f9dca6765762554e8625629f29a25f91`,
//     {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     }
//   ).then((res) => {
//     if (res.ok) {
//       return res.json();
//     }
//     return Promise.reject(`Error ${res.status}`);
//   });

// // const getRandomWeather = () => {
// //   return fetch(
// //     `api.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,10&units=inperial&appid=f9dca6765762554e8625629f29a25f91`,
// //     {
// //       headers: {
// //         'Content-Type': 'application/json',
// //       },
// //     },
// //   ).then((res) => {
// //     if (res.ok) {
// //       return res.json();
// //     } else {
// //       return Promise.reject(`Error ${res.status}`);
// //     }
// //   });
// // };

// const getWeatherAlerts = () =>
//   fetch(
//     'api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=alerts&appid=f9dca6765762554e8625629f29a25f91',
//     {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     }
//   ).then((res) => {
//     if (res.ok) {
//       return res.json();
//     }
//     return Promise.reject(`Error ${res.status}`);
//   });

// const getWeatherMap = () =>
//   fetch(
//     'https://tile.openweathermap.org/map/precipitation_new/3/30/20.png?appid=f9dca6765762554e8625629f29a25f91',
//     {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     }
//   ).then((res) => {
//     if (res.ok) {
//       return res.json();
//     }
//     return Promise.reject(`Error ${res.status}`);
//   });

// // https:
// module.exports = {
//   getCityWeather,
//   getZipWeather,
//   getWeatherAlerts,
//   // getRandomWeather,
//   getWeatherMap,
// };

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

  getCityWeather() {
    return fetch(
      `api.openweathermap.org/data/2.5/weather?q=reno&units=imperial&appid=${this._apiKey}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then(this._handleResponse);
  }

  getZipWeather() {
    return fetch(
      `api.openweathermap.org/data/2.5/weather?zip=89147,us&units=imperial&appid=${this._apiKey}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then(this._handleResponse);
  }

  getWeatherAlerts() {
    return fetch(
      `api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=alerts&appid=${this._apiKey}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then(this._handleResponse);
  }

  getWeatherMap() {
    return fetch(
      `https://tile.openweathermap.org/map/precipitation_new/3/30/20.png?appid=${this._apiKey}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then(this._handleResponse);
  }
}

const api = new Api('f9dca6765762554e8625629f29a25f91');

export default api;
