var map;

/** **/
var odinsgade = {
    lat: 55.697599,
    lng: 12.550017
};

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: odinsgade,
        zoom: 18
    });
}
