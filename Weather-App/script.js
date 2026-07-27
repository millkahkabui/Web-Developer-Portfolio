function showWeather(){

    let city = document.getElementById("city").value;

    if(city===""){
        document.getElementById("result").innerHTML="Please enter a city.";
        return;
    }

    document.getElementById("result").innerHTML=
    "🌤 The weather in " + city + " is Sunny, 28°C";
}