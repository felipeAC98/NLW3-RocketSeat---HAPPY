//Create map
const map = L.map('mapid').setView([-20.8070905,-49.4014284], 13); /*a funcao map retorna um objeto que possui a funcao setView*/

//Create and add tile Layer
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//Create icon 

const icon = L.icon({
    iconUrl:"./public/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor:[29,68],
    popupAnchor:[170,2]

})

//Create popup overlay 
const popup = L.popup({ //Criando o balaozinho com o nome do lugar e a flechina na frente para ir para outro link
    closeButton:false,
    className: 'map-popup',
    minWidth: 200,
    minHeight:240
}).setContent('Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg" </a>')

//Create and add marker
L.marker([-20.8070905,-49.4014284],{icon: icon}).addTo(map)
    .bindPopup(popup);