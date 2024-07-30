const apiKey = 'SCL34A85JWNGSDJ2DMHQECLGH'
const city = 'london'
const URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=${apiKey}&contentType=json`;

async function fetchWeather(url) {
    try {
        const response = await fetch(url, {mode: 'cors'});
        if(response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw Error(response.statusText);
        }
    }catch(er) {
        alert(
            "City not found. Please check for any errors in your spelling or your internet connection."
        );
    }   
}

// fetchWeather(URL).then(object => console.log(object));