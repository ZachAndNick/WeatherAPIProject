(function(){
    $.get("http://api.openweathermap.org/data/2.5/forecast/", {
        APPID: "e9545dca3bd8784069868855b7f24779",
        id:     "4726206",
        units: "imperial"
        // cnt: "3"
    }).done(function(data){
        console.log(data);

        var forecast = {
            highTemp: data.list[0].main.temp_max,
            lowTemp: data.list[0].main.temp_min,
            cloudIcon: data.list[0].weather[0].icon,
            cloudDescription: data.list[0].weather[0].description,
            humidity: data.list[0].main.humidity,
            wind: data.list[0].wind.speed,
            pressure: data.list[0].main.pressure
        }

        console.log(forecast)



    });


})();