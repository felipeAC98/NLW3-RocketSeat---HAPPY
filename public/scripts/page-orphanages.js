//Create map
const map = L.map('mapid').setView([-20.8070905,-49.4014284], 13); /*a funcao map retorna um objeto que possui a funcao setView*/

//Create and add tile Layer
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//Create icon 
const icon = L.icon({
    iconUrl:"/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor:[29,68],
    popupAnchor:[170,2]

})

function addMarker({id, name, lat, lng}){//Recendo o objeto orphanage ja desestruturado

    //Create popup overlay 
    const popup = L.popup({ //Criando o balaozinho com o nome do lugar e a flechina na frente para ir para outro link
        closeButton:false,
        className: 'map-popup',
        minWidth: 200,
        minHeight:240
    }).setContent(`${name} <a href="orphanage?id=${id}"> <img src="/images/arrow-white.svg" </a>`) //quando temos um texto que precisa ser alterado uma crase eh inserida no lugar das aspas que definem a string

    //Create and add marker
    L.marker([lat,lng],{icon: icon}).addTo(map)
        .bindPopup(popup);

}

const orphanagesSpan = document.querySelectorAll('.orphanages span')

orphanagesSpan.forEach(span=>{
    const orphanage ={
        id: span.dataset.id, //referente ao data-id do html
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng
    }

    addMarker(orphanage)
})

