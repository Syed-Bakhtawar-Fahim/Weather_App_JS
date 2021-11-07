function getWeather() {
    const cityName = document.getElementById("cityName").value

    
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=363a0329911c1b074081245aae1023c3&units=metric`)

    .then(function(response){
        console.log(response)
        console.log(response.data.main.temp);

        document.getElementById("result").innerHTML = `The Temperature Of ${cityName} ` + response.data.main.temp;
    })
}