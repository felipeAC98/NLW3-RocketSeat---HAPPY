let marker; //para manter o marker apos chamar a funcao

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

})

//Create and add marker
map.on('click',obtemLocalizacao)

//Funcao para obter a localizacao do click e inserir marcador
function obtemLocalizacao(event){
    //O event eh um objeto que possui atributos dentre eles lagitude e longitude

    const lat= event.latlng.lat;
    const lng=event.latlng.lng;

    document.querySelector('[name=lat]').value=lat;//colocando no input que possui o nome lat o valor obtido em lat no event
    document.querySelector('[name=lng]').value=lng;

    //Remove icon , if exists
    
    //marker && map.removeLayer(marker) //mesma coisa que o if abaixo
    if(marker){
        map.removeLayer(marker)
    }

    //add icon Layer
    marker=L.marker([lat,lng],{icon}).addTo(map); //Adicionando o marcador no local do click
}

//Photos upload

function addPhotoField(){
    //Pegar o container de fotos

    const container=document.querySelector("#images");

    //Pegar o container para duplicar

    const fieldsContainer=document.querySelectorAll('.new-upload');
    //realizar o clone da ultima imagem adicionada
    const newFieldContainer=fieldsContainer[fieldsContainer.length-1].cloneNode(true); //pegando o ultimo que foi adicionado

    //verificar se o campo esta vazio

    if ( newFieldContainer.children[0].value!==""){
        //adicionar o clone ao container de imagens
        container.appendChild(newFieldContainer)

        //Limpar o campo antes de adicionar ao container de imagens
        newFieldContainer.children[0].value=""

    }

}

function deleteField(event){
    const span=event.currentTarget;

    const fieldsContainer=document.querySelectorAll('.new-upload');

    //Nao deixar apagar quando soh tiver um
    if(fieldsContainer.length > 1){

        span.parentNode.remove(); //o pai eh o que ele esta contido

    }
    else{
        span.parentNode.children[0].value="" //O primeiro filho do pai do span eh o input, (ver html)
    }
}

//Troca do sim e nao
function toggleSelect(event){

    document.querySelectorAll('.button-select button')
   
    .forEach((button)=>{
        button.classList.remove('active')
    })

    const button=event.currentTarget;
    button.classList.add('active')

    const input=document.querySelector('[name="open_on_weenkends"]')

    input.value=button.dataset.value; //passando o valor do data-value para o input hidden
}

function validate(event){
    //Validar se lat e lng estao preenchidos

    const lat=document.querySelector('[name=lat]').value
    const lng=document.querySelector('[name=lng]').value

    if(lat===''){
        event.preventDefault() //evita que o formulario seja enviado
        alert('Favor selecionar localizacao no mapa')
    }

}