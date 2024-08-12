export default function getWeatherForcast(forecastDay) {
    return {
        icon: forecastDay.icon,
        temp: forecastDay.temp,
        feelslike: forecastDay.feelslike,
        
        humidity: forecastDay.humidity
    }
}