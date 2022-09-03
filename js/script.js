//Do not use api here
const API_KEY = `8e27fa45023a89a5b84fd864a1a6a741`;
const loadWeather = city =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => displayWeather(data));
};
const displayWeather = data =>{
    console.log(data)
    const showTemp = document.getElementById("temperature");
    showTemp.innerText = data.main.temp;
}
loadWeather('chittagong');