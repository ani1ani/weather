const apikey = "5ac51dc614aa02bdd7d0797eb57ade90";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
const changeButton = document.getElementById("btn");
const cityNameElement = document.getElementById("city");

changeButton.addEventListener("click", () => {
  const newCityName = prompt("Enter new city name:");
  if (newCityName !== null && newCityName !== "") {
    cityNameElement.innerText = newCityName;
  }
});

async function checkWeather(city) {
  const response = await fetch(apiurl + city + "&appid=${apikey}");
  let data = await response.json();
  console.log(data);

  checkWeather();
  document.querySelector("city").innerHTML = data.name;
  document.querySelector(".tempbtn").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".Humiditybtn").innerHTML = data.main.humidity + "%";
  document.querySelector(".Windbtn").innerHTML = data.wind.speed + "km/h";
  document.querySelector(".visibilitybtn").innerHTML = data.visibility;
  document.querySelector(".Feelslikebtn").innerHTML = data.main.feels_like;
}
