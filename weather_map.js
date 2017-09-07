(function(){
    var options = {
        APPID: "e9545dca3bd8784069868855b7f24779",
        lat:    29.423017,
        lon:   -98.48527,
        units: "imperial",
        cnt: "3"
    };


    $.get("http://api.openweathermap.org/data/2.5/forecast/", options).done(function(data){
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
    $("#showTheWeather").click(function(){
        options.lat = parseFloat($("#inputLatitude")[0].value);
        options.lon = parseFloat($("#inputLongitude")[0].value);
        console.log(options.lat);
        console.log(options.lon);
        $.get("http://api.openweathermap.org/data/2.5/forecast/", options).done(function(data){
            console.log();
            var cityName = data.city.name;
            $("#city").html(cityName);

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

    });



})();