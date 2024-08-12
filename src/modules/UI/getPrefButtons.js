export default function getPrefButtons () {
    const content = document.getElementById("content");

    const prefButtons = document.createElement('div');
    prefButtons.classList.add("pref-buttons");
    content.appendChild(prefButtons);

    const kmToMi = document.createElement('div');
    kmToMi.classList.add("preference");
    prefButtons.appendChild(kmToMi);
    const km = document.createElement('button');
    km.id = "km";
    km.innerText = "km/h";
    kmToMi.appendChild(km);
    const mi = document.createElement('button');
    mi.id = "mi";
    mi.innerText = "mi/h";
    kmToMi.appendChild(mi);

    const cToF = document.createElement('div');
    cToF.classList.add("preference");
    prefButtons.appendChild(cToF);
    const celsius = document.createElement('button');
    celsius.id = "C";
    celsius.innerText = "°C";
    cToF.appendChild(celsius);
    const fahrenheit = document.createElement('button');
    fahrenheit.id = "F";
    fahrenheit.innerText = "°F";
    cToF.appendChild(fahrenheit);
}
