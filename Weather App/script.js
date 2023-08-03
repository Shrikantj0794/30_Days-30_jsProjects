const apikey = "9d973162005ab3ce97903bf6b8030e94";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");    
const cardbackground = document.querySelector(".card")

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
        document.getElementById("card1").style.backgroundImage = "url('gif/cloud1.gif')";
    }
    else  if(data.weather[0].main == 'Clear'){
        weatherIcon.src="img/clear.png";
        document.getElementById("card1").style.backgroundImage = "url('gif/clear2.gif')";
    }
    else if(data.weather[0].main == 'Rain'){
        weatherIcon.src="img/rain.png";
        document.getElementById("card1").style.backgroundImage = "url('gif/rain2.gif')";
    }
    else if(data.weather[0].main == 'Drizzle'){
        weatherIcon.src="img/drizzle.png";
        document.getElementById("card1").style.backgroundImage = "url('gif/drizzle2.gif')";
    }
    else if(data.weather[0].main == 'Mist'){
        weatherIcon.src="img/mist.png";
        document.getElementById("card1").style.backgroundImage = "url('gif/mist.gif')";
    }
}

searchbtn.addEventListener('click', ()=>{
    checkWeather(searchBox.value);
});