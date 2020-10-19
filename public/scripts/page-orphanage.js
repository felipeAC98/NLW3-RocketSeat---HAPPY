//Deixando o mapa estatico
const options ={
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

//Create map
const map = L.map('mapid',options).setView([-20.8070905,-49.4014284], 13); /*a funcao map retorna um objeto que possui a funcao setView*/

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

//Create and add marker
L.marker([-20.8070905,-49.4014284],{icon: icon}).addTo(map);

/*image gallery*/

function selectImage(event){

    //console.log(event.currentTarget);//Quem esta disparando o evento

    const button =event.currentTarget;

    //Remover todas classes ativas, para somente uma imagem ficar grande

    const buttons=document.querySelectorAll(".images button");//.images button retorna todos objetos de botoes dentro da classe .images
    //console.log(buttons);

    buttons.forEach(removeActiveClass);

    function removeActiveClass(button){
        button.classList.remove("active");
    }

    //Selecionar a imagem clicada
    const image = button.children[0]//pegando o primeiro elemento daquele botao que foi clicado, no caso eh a imagem que vai vir
    const imageContainer = document.querySelector(".orphanage-details >img") //pegando o primeiro nivel de elemento que esta la

    //Atualizar o container de imagem (a principal do momento)
    imageContainer.src= image.src;

    //Adicionar a classe .active para o botao que possui a imagem clicada
    button.classList.add("active");
}