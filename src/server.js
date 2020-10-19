//importar dependencias
const express =require('express');
const path = require('path'); //para evitar erros de buscas nos diretorios em diferentes sistemas
const pages=require('./pages.js');

//inicindo o express
const server = express();

//utilizando os arquivos estaticos
server.use(express.static('public')) //cria a rota dos arquivos estaticos

//configurar template engine
server.set('views', path.join(__dirname, "views"))
server.set('view engine','hbs')

//rotas
server.get('/',pages.index)
server.get('/orphanage',pages.orphanage)
server.get('/orphanages',pages.orphanages)
server.get('/create-orphanage',pages.createOrphanage)

//ligar o servidor 
server.listen(5500)