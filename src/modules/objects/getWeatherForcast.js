export default function getWeatherForcast(forecastDay) {
    return {
        location: forecastDay.resolvedAddress,
        description: forecastDay.description,
        datetime: forecastDay.days.datetime,

    }
}