function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = '7599d74b3f82cfe8ee21825f50c14bea';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = '';

            const weatherDescription = data.weather[0].description;
            const temperature = Math.round(data.main.temp - 273.15);

            const weatherIcon = document.createElement('img');
            weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

            const weatherText = document.createElement('p');
            weatherText.textContent = `Погода: ${weatherDescription}, Температура: ${temperature}°C`;

            let clothingSuggestion = '';
            if (weatherDescription.includes('rain')) {
                clothingSuggestion = 'Візьміть дощовик та парасольку.';
            } else if (temperature>25) {
                clothingSuggestion = 'Шорти та футболка буде найкращим вибором.';
            } else if (temperature>15) {
                clothingSuggestion = 'Радимо одягнути светр.';
            } else if (temperature>0) {
                clothingSuggestion = 'Одягніть куртку або пальто, щоб не змерзти.';
            }

            const clothingAdvice = document.createElement('p');
            clothingAdvice.textContent = `Рекомендації з одягу: ${clothingSuggestion}`;

            weatherInfo.appendChild(weatherIcon);
            weatherInfo.appendChild(weatherText);
            weatherInfo.appendChild(clothingAdvice);
        })
        .catch(error => {
            console.error('Error fetching weather data: ', error);
        });
}