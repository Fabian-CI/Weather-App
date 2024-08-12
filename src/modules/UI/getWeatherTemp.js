export default function getWeatherTemp () {
    const content = document.getElementById("content");

    const weatherTemp = document.createElement('div');
    weatherTemp.classList.add("weather-temp");
    content.appendChild(weatherTemp);

    const status = document.createElement('span');
    weatherTemp.appendChild(status);
    const temp = document.createElement('h2');
    weatherTemp.appendChild(temp);
    const feelsLike = document.createElement('p');
    weatherTemp.appendChild(feelsLike);
}