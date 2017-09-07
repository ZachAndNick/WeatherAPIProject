(function(){
    $.get("http://api.openweathermap.org/data/2.5/forecast/daily", {
        APPID: "e9545dca3bd8784069868855b7f24779",
        id:     "4726206",
        units: "imperial"
        // cnt: "3"
    }).done(function(data){
        console.log(data);

    });
})();