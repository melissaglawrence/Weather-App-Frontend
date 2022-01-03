const getCityWeather = (cityName) => {
  return fetch(
    `api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=f9dca6765762554e8625629f29a25f91`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error ${res.status}`);
    }
  });
};

const getZipWeather = (zipCode) => {
  return fetch(
    `api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&units=imperial&appid=f9dca6765762554e8625629f29a25f91`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error ${res.status}`);
    }
  });
};

// const getRandomWeather = () => {
//   return fetch(
//     `api.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,10&units=inperial&appid=f9dca6765762554e8625629f29a25f91`,
//     {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     },
//   ).then((res) => {
//     if (res.ok) {
//       return res.json();
//     } else {
//       return Promise.reject(`Error ${res.status}`);
//     }
//   });
// };

const getWeatherAlerts = () => {
  return fetch(
    `api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=alerts&appid=f9dca6765762554e8625629f29a25f91`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error ${res.status}`);
    }
  });
};

const getWeatherMap = () => {
  return fetch(
    `https://tile.openweathermap.org/map/precipitation_new/3/30/20.png?appid=f9dca6765762554e8625629f29a25f91`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error ${res.status}`);
    }
  });
};

// https:
module.exports = {
  getCityWeather,
  getZipWeather,
  getWeatherAlerts,
  // getRandomWeather,
  getWeatherMap,
};
