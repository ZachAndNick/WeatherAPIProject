(function(){
    $.get("http://api.openweathermap.org/data/2.5/forecast/", {
        APPID: "e9545dca3bd8784069868855b7f24779",
        id:     "4726206",
        units: "imperial",
        cnt: "3"
    }).done(function(data){
        console.log(data);
        var forecast = data.list.forEach(function(element, index){
            var forecast = {

                highTemp: element.main.temp_max,
                lowTemp: element.main.temp_min,
                cloudIcon: element.weather[0].icon,
                cloudDescription: element.weather[0].description,
                humidity: element.main.humidity,
                wind: element.wind.speed,
                pressure: element.main.pressure
            };

            console.log(forecast);
            return forecast
        });
        console.log(forecast)







    });


})();