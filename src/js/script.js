import Axios from "../../node_modules/axios";
import moment from "../../node_modules/moment";


// get DOM
const iconEl = document.querySelector(`.icon`);
const locationEl = document.querySelector(`.location`);
const deegreEl = document.querySelector('.degree');
let city = document.querySelector(`.city-name`);
const dateEl = document.querySelector('.date');
const enterEl = document.querySelector('.enter');
const pressure = document.querySelector('.pressure-value');
const wind = document.querySelector('.wind-value');
const clouds = document.querySelector('.clouds-value');

// others variables
const currentDate = moment().format('Do MMMM YYYY');


// functions
const changeDate = date => dateEl.textContent = date;

const parseToString = element => JSON.stringify(element);

const convertToCelsius = degree => degree - 273.15; // 0 degrees Kelvin is equal to -273.15

const generateHTML = (deegres, hPressure, hWind, hClouds) => {
      deegres = Math.ceil(deegres);
      deegreEl.innerHTML = `${deegres}<sup>°</sup>`;
      pressure.innerHTML = `${hPressure} hPa`;
      wind.innerHTML = `${hWind} km/h`;
      clouds.innerHTML = `${hClouds}%`;
};


// listeners
document.addEventListener('DOMContentLoaded', () => {
      changeDate(currentDate);
});


// axios

enterEl.addEventListener('click', function() {
      const apiKey = `b3558828c993cc36e520273a80d6d652`;
      const generatedURL = `http://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}`;

      console.log(`${city.value}`);
      
      Axios.get(generatedURL)
      .then(Response => Response.data)
      .then(data => {
            console.log(data);
            generateHTML(convertToCelsius(data.main.temp), data.main.pressure, data.wind.speed, data.clouds.all);
      });
});



