const apikey = "9d973162005ab3ce97903bf6b8030e94";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(City){
    const response = await fetch(apiUrl +City + `&appid=${apikey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°c'; //math.round used to round figure number
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.Wind').innerHTML = data.wind.speed + 'Km/h';

    if(data.weather[0].main == 'Clouds'){
        weatherIcon.src="img/clouds.png";
    }
    else  if(data.weather[0].main == 'Clear'){
        weatherIcon.src="img/clear.png";
    }
    else if(data.weather[0].main == 'Rain'){
        weatherIcon.src="img/rain.png";
    }
    else if(data.weather[0].main == 'Drizzle'){
        weatherIcon.src="img/drizzle.png";
    }
    else if(data.weather[0].main == 'Mist'){
        weatherIcon.src="img/mist.png";
    }
}

searchbtn.addEventListener('click', ()=>{
    checkWeather(searchBox.value);
});