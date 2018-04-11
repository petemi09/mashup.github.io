"use strict;"
var map;
var infowindow;


function initMap(){ 	
    var Decorah = {lat: 43.3111, lng: -91.8036};
    var map = new google.maps.Map(document.getElementById('map'), {
       	zoom: 13,
        center: Decorah
       });
    }


function clickedon() {

	let city = document.getElementById("city").value
	let state = document.getElementById("state").value
	let co = document.getElementById("city_output")
	let so = document.getElementById("state_output")

	co.innerHTML = city
	so.innerHTML = state

	var pyrmont = {lat: 43.3033, lng: -91.7857};

	map = new google.maps.Map(document.getElementById('map'), {
		center: pyrmont,
	    zoom: 15
	  });

	infowindow = new google.maps.InfoWindow();
	var service = new google.maps.places.PlacesService(map);
	service.nearbySearch({
		location: pyrmont,
	    radius: 5000,
	    type: ['restaurant']
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


 	//var marker = new google.maps.Marker({
    //    position: luther,
    //    map: map
    //    });


    


	// var map;

	// function initMap() {
	//   // Create a map centered in Pyrmont, Sydney (Australia).
	//   map = new google.maps.Map(document.getElementById('map'), {
	//     center: {lat: -33.8666, lng: 151.1958},
	//     zoom: 15
	//   });

	//   // Search for Google's office in Australia.
	//   var request = {
	//     location: map.getCenter(),
	//     radius: '500',
	//     query: "Google Sydney"
	// }

	//   var service = new google.maps.places.PlacesService(map);
	//   service.textSearch(request, callback);
	// }

	// // Checks that the PlacesServiceStatus is OK, and adds a marker
	// // using the place ID and location from the PlacesService.
	// function callback(results, status) {
	//   if (status == google.maps.places.PlacesServiceStatus.OK) {
	//     var marker = new google.maps.Marker({
	//       map: map,
	//       place: {
	//         placeId: results[0].place_id,
	//         location: results[0].geometry.location
	//       }
	//     });
	//   }
// }