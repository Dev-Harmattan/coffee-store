function createDriverDrivingsMap() {
    if(navigator.geolocation){
        var option = {
            enableHighAccuracy: true,
            maximumAge: 1000,
            timeout: 500
        };

        navigator.geolocation.getCurrentPosition(onSuccess, onError, option);
    }else{
        document.getElementById("map").innerHTML = "No Support for geolocation, We cant find you";
    }

    function onSuccess(position) {
        showMap(
            position.coords.latitude,
            position.coords.longitude
        );
    }
    
    function onError() {
        var mapDiv = document.getElementById("map");
    
        switch(error.code) {
            case error.PERMISSION_DENIED : 
                mapDiv.innerHTML = "User denied the request for Geolocation.";
                break;
            case error.POSITION_UNAVAILABLE :
                mapDiv.innerHTML = "Location information unavailable";
                break;
            case TIMEOUT :error.innerHTML = "The request to get user location time out";
                break;
            case error.UNKNOWN_ERROR:
                mapDiv.innerHTML = "Unknown error occurred";
                break;
        }
    }
    
    function showMap(lat, long) {
    
        let directionsService = new google.maps.DirectionsService();
        let directionsRenderer = new google.maps.DirectionsRenderer();
    
        let route = {
            origin: new google.maps.LatLng(lat, long),
            destination: "Ikeja, Lagos",
            travelMode: google.maps.DirectionsTravelMode.DRIVING
        };
    
        let mapOptions = {
            zoom: 10,
            center: new google.maps.LatLng(50.8504500, 4.3487800),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
    
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        directionsRenderer.setMap(map);
        directionsRenderer.setPanel(document.getElementById("driver-directions"));
        directionsService.route(route, function(result, status){
            if(status == google.maps.DirectionsStatus.OK){
                directionsRenderer.setDirections(result);
            }
        });
    }
    
    
}

