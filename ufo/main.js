

const ufoSightingArray = ufoSightings.Sheet1;

const latlng = [];
const map = L.map("map").setView([56, 11.6], 6);

const tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

L.circle([56.8033777, 9.5168986]).addTo(map);



}
ufoSightingArray.forEach(function(sighting) {
    const latlngIndividual = sighting["lat, lng"]
    const latlngIndividualArray = latlngIndividual.split(", ")
    const lat = parseFloat(latlngIndividualArray[0])
    const lng = parseFloat(latlngIndividualArray[1])
    console.log(lat)


});
