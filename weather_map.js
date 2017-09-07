(function(){
    $.get("http://api.openweathermap.org/data/2.5/forecast/", {
        APPID: "e9545dca3bd8784069868855b7f24779",
        id:     "4726206",
        units: "imperial",
        cnt: "3"
    }).done(function(data){
        console.log(data);
        data.list.forEach(function(element, index){
            var forecast = {

                highTemp: element.main.temp_max,
                lowTemp: element.main.temp_min,
                cloudIcon: element.weather[0].icon,
                cloudDescription: element.weather[0].description,
                humidity: element.main.humidity,
                wind: element.wind.speed,
                pressure: element.main.pressure
            };
            var weatherIcon = "http://openweathermap.org/img/w/"+forecast.cloudIcon+".png"
            console.log($(".forecast-box")[index]);
            var forecastBox = $(".forecast-box")[index];
            console.log($(forecastBox).html());
            $(forecastBox).html("<li>" + forecast.highTemp +"&deg/"+forecast.lowTemp+ "&deg</li><li><img src='" + weatherIcon + "'></li><li>Clouds: " + forecast.cloudDescription +"</li><li>Humidity: "+ forecast.humidity +"</li><li>Wind: " + forecast.wind + "</li><li>Pressure: " +forecast.pressure+ "</li>")

        });







    });


})();