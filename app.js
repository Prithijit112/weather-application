const apikey = "1d14c7493de419b6b779ac660bf7426b";
const apiurl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiurl + city + `&appid=${apikey}`);
  let data = await response.json();

  // Check if the response is valid (200 OK)
  if (data.cod === "404") {
    alert("City not found!");
    return;
  }

  console.log(data);

  document.querySelector(".city-name").innerHTML = data.name;
  document.querySelector(".temp").innerHTML =
    Math.round(data.main.temp) + "&deg;c";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

  if (data.weather[0].main === "Clouds") {
    weathericon.src = "image/clouds.png";
  } else if (data.weather[0].main === "Clear") {
    weathericon.src = "image/clear.png";
  } else if (data.weather[0].main === "Rain") {
    weathericon.src = "image/rain.png";
  } else if (data.weather[0].main === "Drizzle") {
    weathericon.src = "image/drizzle.png";
  } else if (data.weather[0].main === "Wind") {
    weathericon.src = "image/wind.png";
  } else if (data.weather[0].main === "Snow") {
    weathericon.src = "image/snow.png";
  } else if (data.weather[0].main === "Mist") {
    weathericon.src = "image/mist.png";
  }
}

// Event listener for the search button
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value); // Get the city from the search input
});

// Optional: You can call checkWeather with a default city when the page loads
checkWeather("kolkata"); // Or remove this line if you only want to search after user input
