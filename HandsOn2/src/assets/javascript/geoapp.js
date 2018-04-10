var pintamapa = function mapaFijo() {

    var latitudorigen = 40.444373299999995;
    var longitudorigen = -3.6724748;
    var latitude = parseFloat(document.getElementById("lat").value);
    var longitude = parseFloat(document.getElementById("long").value);
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;

    var map = new google.maps.Map(document.getElementById('otroMapa'), {
        zoom: 6,
        center: { lat: latitude, lng: longitude }
    });
    directionsDisplay.setMap(map);

    directionsService.route({
        origin: { lat: latitudorigen, lng: longitudorigen },//db waypoint start
        destination: { lat: latitude, lng: longitude },//db waypoint end
        travelMode: google.maps.TravelMode.WALKING
    }, function (response, status) {
        if (status === google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
        } else {
            window.alert('Ha fallado la comunicacion: ' + status);
        }
    });
}
