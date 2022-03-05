var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

mapboxgl.accessToken = 'pk.eyJ1Ijoic2VyZ2lzbSIsImEiOiJjbDA4NW90MTIwMDZ2M3BxdDZmczJ1eW9iIn0.0ihUy8UHxeUWBxzugaLSSw';
var map = new mapboxgl.Map({
  container: 'YOUR_CONTAINER_ELEMENT_ID',
  style: 'mapbox://styles/mapbox/streets-v11'
});
