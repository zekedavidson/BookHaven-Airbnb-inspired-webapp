mapboxgl.accessToken = mapToken;

// Check if coordinates exist and are valid
let mapCoordinates = coordinates;
if (!coordinates || !Array.isArray(coordinates) || coordinates.length !== 2) {
    console.error('Invalid coordinates:', coordinates);
    // Fallback to default coordinates (New Delhi, India)
    mapCoordinates = [77.2088, 28.6139];
}

const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: "mapbox://styles/mapbox/streets-v12",
    center: mapCoordinates, // use the coordinates from the listing
    zoom: 10 // starting zoom
});

console.log('Map coordinates:', mapCoordinates);

const marker1 = new mapboxgl.Marker({color: "#fe424d"})
        .setLngLat(mapCoordinates)
        .setPopup(new mapboxgl.Popup({offset: 25})
        .setHTML(`<h6>Exact location provided after booking<h6>`))
        .addTo(map);