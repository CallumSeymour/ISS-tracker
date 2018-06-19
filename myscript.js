// Map properties, incl. location
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(51.508742, -0.120850),
        zoom: 5,
        mapTypeId: google.maps.MapTypeId.HYBRID //Map type - roadmap, hybrid, satellite or terrain maps possible.
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}


// Map marker with animation
var marker = new google.maps.Marker({
    position: myCenter,
    animation: google.maps.Animation.BOUNCE
});

marker.setMap(map);

// Zoom to map point when clicking on marker
google.maps.event.addListener(marker, 'click', function () {
    map.setZoom(9);
    map.setCenter(marker.getPosition());
    window.setTimeout(function () {
        map.setZoom(pos);
    }, 3000); //get map back after 3 seconds
});
