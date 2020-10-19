const orphanages = require('./database/fakedata.js') //puxando o arquivo

//definindo os requests e reponses
module.exports={

    index(req, res){
        return res.render('index')
    },

    orphanage(req, res){
        return res.render('orphanage')
    },

    orphanages(req, res){
        return res.render('orphanages',{orphanages})//passando alguns dados do backend para o frontend
    },

    createOrphanage(req, res){
        return res.render('create-orphanage')
    }
}