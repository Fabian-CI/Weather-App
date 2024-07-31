export default async function fetchWeather(url) {
    try {
        const response = await fetch(url, {mode: 'cors'});
        if(response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw Error(response.statusText);
        }
    }catch(err) {
        alert(
            "City not found. Please check for any errors in your spelling or your internet connection."
        );
    }   
}
