const apiKey = "c003bcb0d1b8267219cf48a07364f689";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
const data = await response.json();
    console.log(data);

document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

if(data.weather[0].main == "Clouds"){
    weatherIcon.src = "images/clouds.png"
}
else if(data.weather[0].main == "Clear"){
    weatherIcon.src = "images/clear.png"
}
else if(data.weather[0].main == "drizzle"){
    weatherIcon.src = "images/drizzle.png"
}
else if(data.weather[0].main == "humidity"){
    weatherIcon.src = "images/humidity.png"
}
else if(data.weather[0].main == "mist"){
    weatherIcon.src = "images/mist.png"
}
else if(data.weather[0].main == "rain"){
    weatherIcon.src = "images/rain.png"
}
else if(data.weather[0].main == "snow"){
    weatherIcon.src = "images/snow.png"
}
else if(data.weather[0].main == "wind"){
    weatherIcon.src = "images/wind.png"
}

document.querySelector(".weather").style.display = "block";
document.querySelector(".error").style.display = "none";

    }

}

searchBox.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) { 
        event.preventDefault();
        checkWeather(searchBox.value);
    }
});

searchBtn.addEventListener("click", ()=> {
   checkWeather(searchBox.value); 
})
