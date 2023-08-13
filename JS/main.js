let apiKey = "c69b1000c85c4cf79c792803231208";
let dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
let dayOneCity = document.getElementById("dayOneCity");
let dayOneTemp = document.getElementById("dayOneTemp");
let dayOneIcon = document.getElementById("dayOneIcon");
let dayOneDesc = document.getElementById("dayOneDesc");
let dayOneDay = document.getElementById("dayOneDay");
let dayTwoDay= document.getElementById("dayTwoDay");
let dayTwoIcon= document.getElementById("dayTwoIcon");
let dayTwoMaxTemp= document.getElementById("dayTwoMaxTemp");
let dayTwoMinTemp= document.getElementById("dayTwoMinTemp");
let dayTwoDesc= document.getElementById("dayTwoDesc");
let dayThreeDay= document.getElementById("dayThreeDay");
let dayThreeIcon= document.getElementById("dayThreeIcon");
let dayThreeMaxTemp= document.getElementById("dayThreeMaxTemp");
let dayThreeMinTemp= document.getElementById("dayThreeMinTemp");
let dayThreeDesc= document.getElementById("dayThreeDesc");
let citySearch= document.getElementById("citySearch");

citySearch.addEventListener("keyup",function(){
  if(citySearch.value!=""){
    getWeather(citySearch.value);
  }else{
    getWeather("Cairo")
  }
})



async function getWeather(city) {
  let response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=c69b1000c85c4cf79c792803231208&q=${city}&days=3`
  );
  let dataWeather = await response.json();
  dayOneCity.innerHTML = dataWeather.location.name;
  dayOneTemp.innerHTML = dataWeather.forecast.forecastday[0].day.maxtemp_c + "°C";
  dayOneIcon.src = dataWeather.forecast.forecastday[0].day.condition.icon;
  dayOneDesc.innerHTML = dataWeather.forecast.forecastday[0].day.condition.text;
  let date1 = new Date(`${dataWeather.forecast.forecastday[0].date}`);
  dayOneDay.innerHTML = dayNames[date1.getDay()];
  let date2 = new Date(`${dataWeather.forecast.forecastday[1].date}`);
  dayTwoDay.innerHTML=dayNames[date2.getDay()];
  dayTwoIcon.src=dataWeather.forecast.forecastday[1].day.condition.icon;
  dayTwoMaxTemp.innerHTML=dataWeather.forecast.forecastday[1].day.maxtemp_c + "°C"
  dayTwoMinTemp.innerHTML=dataWeather.forecast.forecastday[1].day.mintemp_c + "°C"
  dayTwoDesc.innerHTML=dataWeather.forecast.forecastday[1].day.condition.text
  let date3=new Date(`${dataWeather.forecast.forecastday[2].date}`);
  dayThreeDay.innerHTML=dayNames[date3.getDay()]
  dayThreeIcon.src=dataWeather.forecast.forecastday[2].day.condition.icon;
  dayThreeMaxTemp.innerHTML=dataWeather.forecast.forecastday[2].day.maxtemp_c + "°C"
  dayThreeMinTemp.innerHTML=dataWeather.forecast.forecastday[2].day.mintemp_c + "°C"
  dayThreeDesc.innerHTML=dataWeather.forecast.forecastday[2].day.condition.text

}
getWeather("Cairo");
