const express = require("express");
const weatherApp = express.Router();
const request = require("request");
require("dotenv").config();


weatherApp.post("/weather", function (req, res) {
  let city = req.body.city;
  const weather_api = `${process.env.WEATHER_API_KEY}`;

  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${weather_api}`;
  request(url, function (err, response, body) {
    // On return, check the json data fetched
    if (err) {
      res.json({ weather: null, error: "Error, please try again" });
    } else {
      let weather = JSON.parse(body);
      //console.log(weather);

      if (weather.main == undefined) {
        res.json({
          weather: null,
          error: "Error, please try again",
        });
      } else {
        // we shall use the data got to set up your output
        let place = `${weather.name}, ${weather.sys.country}`,
          weatherTimezone = `${new Date(
            weather.dt * 1000 - weather.timezone * 1000
          )}`;
        let weatherTemp = `${weather.main.temp}`,
          humidity = `${weather.main.humidity}`,
          main = `${weather.weather[0].main}`,
          weatherFahrenheit;
        weatherFahrenheit = (weatherTemp * 9) / 5 + 32;

        // you shall also round off the value of the degrees fahrenheit calculated into two decimal places
        function roundToTwo(num) {
          return +(Math.round(num + "e+2") + "e-2");
        }
        weatherFahrenheit = roundToTwo(weatherFahrenheit);
        res.json({
          weather: weather,
          place: place,
          temp: weatherTemp,
          timezone: weatherTimezone,
          humidity: humidity,
          fahrenheit: weatherFahrenheit,
          main: main,
          error: null,
        });
      }
    }
  });
});

module.exports = weatherApp;
