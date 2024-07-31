export default function getWeatherToday(forecastDay) {
    return {
        conditions: forecastDay.conditions,
        icon: forecastDay.icon,

        temp: forecastDay.temp,
        feelslike: forecastDay.feelslike,


        humidity: forecastDay.humidity,
        snow: forecastDay.snow,
        windspeed: forecastDay.windspeed,
    }
}