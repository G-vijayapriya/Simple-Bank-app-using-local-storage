let api_Key = "29d163c995ad426c84773802252411";
let result = document.getElementById("result");
let searchBtn = document.getElementById("searchBtn");
let cityName = document.getElementById("cityName");
let temp =document.getElementById("temp");
let humidity = document.getElementById("humidity");


searchBtn.addEventListener("click", () => {
    let city = document.getElementById("cityInput").value;
    getWeather(city);
});

function getWeather(city) {
    result.textContent = "Loading..."
    cityName.textContent = "";
    temp.textContent ="";
    humidity.textContent ="";


    fetch(`https://api.weatherapi.com/v1/current.json?key=${api_Key}&q=${city}`).then(response =>{
       return response.json();
    }).then(data => {
            result.textContent = "";
            cityName.textContent = data.location.name;
            temp.textContent = `Temperature: ${data.current.temp_c}°C`;
            humidity.textContent = `Humidity: ${data.current.humidity}%`;
            
            document.getElementById("img").src = "https:" + data.current.condition.icon;

        })
        .catch(() => {
            cityName.textContent ="";
            temp.textContent="";
            humidity.textContent="";
            result.textContent = "City not found";
            result.style.color = "red";
        });
}
