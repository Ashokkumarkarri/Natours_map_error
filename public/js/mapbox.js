const locations = JSON.parse(document.getElementById('map').dataset.locations);
console.log(locations);

var map = L.map('map').setView([17.807594449529894, 83.19731736022779], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);
