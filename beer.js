"use strict;"
var map;
var infowindow;

function clickedon2() {

	let city = document.getElementById("city").value
	let state = document.getElementById("state").value
	let co = document.getElementById("city_output")
	let so = document.getElementById("state_output")

	co.innerHTML = city
	so.innerHTML = state

	var pyrmont = {lat: 47.2043, lng: -121.9915};

	map = new google.maps.Map(document.getElementById('map'), {
		center: pyrmont,
	    zoom: 15
	  });

	infowindow = new google.maps.InfoWindow();
	var service = new google.maps.places.PlacesService(map);
	service.nearbySearch({
		location: pyrmont,
	    radius: 5000,
	    type: ['bar']
	  }, callback);
	}

function callback(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
}

function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}