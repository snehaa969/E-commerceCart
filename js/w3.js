const apiKey = "XUXIFWUR9lLg7f6ef5ngtZKKYBI4OG6m";
const getWeatherButton = document.getElementById('getWeathert');
const cityInput = document.getElementById('cityInput');
const weatherInfo = document.getElementById('weatherInfo');
const errorElement = document.getElementById('error');

const cityName = document.getElementById('cityName');
const temperature = document.getElementById('temperature');
const humidity = document.getElementById('humidity');
const condition = document.getElementById('condition');

getWeatherButton.addEventListener('click', ()=>{
    const city = cityInput.value.trim();
    if(!city){
        showError("Please enter a valid Name");
        return;
    }
    fetchWeather(city);
});

function fetchWeather(city){
    const url = `https://api.tomorrow.io/v4/weather/realtime?location=${encodeURIComponent(city)}&apikey=${apiKey}`;

    fetch(url)
        .then((response) =>{
            if(!response.ok){
                throw new Error("City not found");
            }
            return response.json();
        })
        .then((data) =>{
            displayWeather(data);
        })
        .catch((error) =>{
            showError(error.message);
        });
     }

        function displayWeather(data){
            weatherInfo.classList.remove('hidden');
            errorElement.classList.add('hidden');

            cityName.textContent = data.location.name;
            temperature.textContent = data.data.value.temperature;
            humidity.textContent = data.data.value.humidity;
            condition.textContent = data.data.value.condition
        }

        function showError(message){
            weatherInfo.classList.add('hidden');
            errorElement.textContent = message;
            errorElement.classList.remove('hidden');
        }
