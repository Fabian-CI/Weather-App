import fetchWeather from "./modules/requests/fetchWeather.js";
import getWeatherForcast from "./modules/objects/getWeatherForcast.js";
import getWeatherToday from "./modules/objects/getWeatherToday.js";

const apiKey = 'SCL34A85JWNGSDJ2DMHQECLGH';
const city = 'bucharest';
const units = 'metric';
const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=${units}&key=${apiKey}&contentType=json`;

const weatherJson = await fetchWeather(url);
if(!weatherJson) {
    console.log("Receiving data...");
}

function getDateTime() {
    weatherJson.days.forEach(date => {
        //access each day
    });
}
// console.log(getWeatherToday(weatherJson.currentConditions));