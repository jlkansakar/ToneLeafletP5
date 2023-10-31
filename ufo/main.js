

const ufoSightingArray = ufoSightings.Sheet1;

const latlng = [];

ufoSightingArray.forEach(function(sighting) {
    const latlngIndividual = sighting["lat, lng"]
    const latlngIndividualArray = latlngIndividual.split(", ")
    const lat = parseFloat(latlngIndividualArray[0])
    const lng = parseFloat(latlngIndividualArray[1])
    console.log(lng)
    const ufoMap = L.map("map").setView([lat, lng])
});