async function getWeather() {
    const cityInput = document.getElementById("cityInput").value.trim();
    if (!cityInput){
        document.getElementById("weatherResult").innerHTML = `<p>Error: Please enter a city name.</p>`;
        return;
    }

    const apiKey = "af32d385ac2a0b1c39ad444b8c21e5ad";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;
    try{
        const response = await fetch(url);
        if (!response.ok){
            throw new Error("City not found");
        }

        const data = await response.json();
        const weatherResult = document.getElementById("weatherResult");

        weatherResult.innerHTML = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
        `;
    }

    catch (error){
        document.getElementById("weatherResult").innerHTML = `<p>Error: ${error.message}</p>`;
    }
}