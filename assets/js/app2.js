const send = document.querySelector('#send');
const clima = document.querySelector('#clima')
send.addEventListener('click',queryWeather);
function queryWeather(e){
    e.preventDefault()
    const city = document.querySelector('#city').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8684198c2eb23343d85874dac76f1006&units=metric`

    const weather = fetch(url)
                        .then(res => res.json())
                        .then(data => showIntoDOM(data))
}
function showIntoDOM(data){
    clearHTML()
    const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    const { main:{temp,humidity,feels_like}} = data;
    const city = document.querySelector('#city').value;
    const cityname = document.createElement('p');
    const celsius = document.createElement('p');
    const icono = document.createElement('img');
    const humedad = document.createElement('p');
    const sensaciontermica = document.createElement('p');
    icono.src = iconUrl;
    celsius.textContent = `Temperatura: ${Math.ceil(temp)}°C`
    cityname.textContent = `Ciudad: ${city}`
    humedad.textContent = `Humedad: ${humidity}`
    sensaciontermica.textContent = `Sensación térmica: ${Math.ceil(feels_like)}°C`
    clima.appendChild(cityname)
    clima.appendChild(icono)
    clima.appendChild(celsius)
    clima.appendChild(humedad)
    clima.appendChild(sensaciontermica)
    console.log(data);
}
function clearHTML(){
    clima.innerHTML = '';
}