const API_KEY = '7599d74b3f82cfe8ee21825f50c14bea';
const API_URL = 'https://api.openweathermap.org/data/2.5/forecast';

function getWeather() {
const city = document.getElementById('city').value;
const date = document.getElementById('date').value;

$.ajax({
    url: API_URL,
    data: {
        q: city,
        appid: API_KEY
    },
    success: function (data) {
        const weatherData = data.list.find(item => item.dt_txt.includes(date));
        if (weatherData) {
const temperature = Math.round(weatherData.main.temp - 273.15);
const description = weatherData.weather[0].description;
const icon = weatherData.weather[0].icon;

let clothing = 'clothing-icon';
let clothingIcon = '';
if (temperature > 20) {
    clothing = 'Шорти та футболка';
    clothingIcon = 'url(https://cdn.icon-icons.com/icons2/924/PNG/512/Football_2-46_icon-icons.com_72081.png)';
} else if (temperature > 15) {
    clothing = 'Штани та худі';
    clothingIcon = 'url(https://cdn-icons-png.flaticon.com/512/5258/5258076.png)';
} else if (temperature > 5) {
    clothing = 'Куртка';
    clothingIcon = 'url(https://cdn-icons-png.flaticon.com/512/5987/5987724.png)';
} else if (temperature > 0) {
    clothing = 'Пальто';
    clothingIcon = 'url(https://cdn-icons-png.flaticon.com/512/3753/3753348.png)';
} else if (temperature < 0) {
    clothing = 'Тепла куртка';
    clothingIcon = 'url(https://em-content.zobj.net/thumbs/160/facebook/105/coat_1f9e5.png)';
} else {
    clothing = 'Дощовик';
    clothingIcon = 'url(https://cdn-icons-png.flaticon.com/512/4291/4291787.png)';
}

const weatherInfo = `<h2>Погода у місті ${city} на ${date}</h2>
         <p>Температура: ${temperature}°C</p>
         <p>Опис: ${description}</p>
         <img src="https://openweathermap.org/img/w/${icon}.png" alt="Погодні умови">
         <p>Рекомендований одяг: ${clothing}</p>`;

$('#weather-info').html(weatherInfo);
        } else {
$('#weather-info').html('<p>Погода на вибрану дату не знайдена.</p>');
        }
    },
    error: function () {
        $('#weather-info').html('<p>Помилка отримання даних про погоду.</p>');
    }
});
        }
