mapboxgl.accessToken = 'pk.eyJ1IjoibmFpaS03MiIsImEiOiJja21sd2NldWwxZW53MnBuejkzNjBtaDk2In0.SPfWDzJVaPsD9aj0VnyCEA';

var map = new mapboxgl.Map({
	container: 'map', // container id
	style: 'mapbox://styles/mapbox/streets-v11', // style URL
	center: [-110.3, 40], // starting position [lng, lat]
	zoom: 9 // starting zoom
});

map.addControl(
	new MapboxGeocoder({
		accessToken: mapboxgl.accessToken,
		mapboxgl: mapboxgl
	}),
	'top-right'
);

var marker1 = new mapboxgl.Marker()
	.setLngLat([-118.328027, 33.9203632])
	.addTo(map);

// Marker.
var marker2 = new mapboxgl.Marker({ color: 'black', rotation: 45 })
	.setLngLat([9.0999715, 60.5000209])
	.addTo(map);



document.getElementById('vlieg').addEventListener('click', function () {
	map.flyTo({
		center: [
			-118.328027,
			33.9203632],
		essential: true // zooms
	});
});

document.getElementById('vlieg2').addEventListener('click', function () {
	map.flyTo({
		center: [
			9.0999715,
			60.5000209],
		essential: true // Animation
	});
});


function USA() {

	var url = 'http://api.openweathermap.org/data/2.5/air_pollution';
	var apiKey = '8061b55af10e28aedbf3a64387a52f9b';
	var unit = 'metric';
	var lat = '33.9203632';
	var lon = '-118.328027';

	var request = url + '?appid=' + apiKey + '&unit=' + unit + '&lat=' + lat + '&lon=' + lon;

	// current weather
	fetch(request)

		// 
		.then(function (response) {
			return response.json();
		})

		// 
		.then(function (response) {
			var ozone = response.list[0].components.o3;
			var co = response.list[0].components.co;
			var weatherbox = document.getElementById('weather');
			weatherbox.innerHTML ='Locatie 1 <br />' + 'ozone vervuiling: ' +  ozone + '<br>' + 'carbon vervuiling: ' + co;
		})
}

function noorwegen() {

	var url = 'http://api.openweathermap.org/data/2.5/air_pollution';
	var apiKey = '8061b55af10e28aedbf3a64387a52f9b';
	var unit = 'metric';
	var lat = '9.0999715';
	var lon = '9.0999715';

	// 
	var request = url + '?appid=' + apiKey + '&unit=' + unit + '&lat=' + lat + '&lon=' + lon;

	// get current weather
	fetch(request)

		
		.then(function (response) {
			return response.json();
		})

		.then(function (response) {
			var ozone = response.list[0].components.o3;
			var co = response.list[0].components.co;
			var weatherbox = document.getElementById('weather2');
			weatherbox.innerHTML = 'Locatie 2 <br />' + 'ozone vervuiling: ' +  ozone + '<br>' + 'carbon vervuiling: ' + co;
		})
}

USA();
noorwegen();