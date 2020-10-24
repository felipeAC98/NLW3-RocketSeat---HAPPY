const Database = require('./database/db.js') //puxando o arquivo
const saveOrphanage = require('./database/saveOrphanage.js')

//definindo os requests e reponses
module.exports={

    index(req, res){
        return res.render('index')
    },

    async orphanage(req, res){

        //o req vem do url da pagina
        const id = req.query.id

        try{
            const db = await Database
            const results = await db.all(`SELECT * FROM orphanages WHERE id ='${id}'`)
            const orphanage = results[0]

            orphanage.images = orphanage.images.split(",")//string para array de volta
            orphanage.firstImage=orphanage.images[0]

            if(orphanage.open_on_weekends =="0"){ //somente para passar de numero para bool 
                orphanage.open_on_weekends= false
            }
            else{
                orphanage.open_on_weekends = true
            }
            return res.render('orphanage',{orphanage:orphanage})//passando alguns dados do backend para o frontend, o primeiro argumento eh a pagina html

        }
        catch (error){
            console.log(error)
            return res.send('Erro no banco de dados!')
        }
    },

    async orphanages(req, res){
        try{
            const db = await Database
            const orphanages = await db.all("SELECT * FROM orphanages")
            return res.render('orphanages',{orphanages})//passando alguns dados do backend para o frontend

            //O codigo a cima eh o mesmo que:
            /*Database.then(dn => {
                const orphanages = await db.all("SELECT * FROM orphanages")
                return res.render('orphanages',{orphanages})//passando alguns dados do backend para o frontend    
            })*/
        }
        catch (error){
            console.log(error)
            return res.send('Erro no banco de dados!')
        }
    },

    createOrphanage(req, res){
        return res.render('create-orphanage')
    },

    async saveOrphanage(req, res){

        const fields = req.body //pegando os campos do form do corpo da pagina

        //Validando campos

        if(Object.values(fields).includes('')){ //se o campo for vazio
            return res.send('Todos os campos devem ser preenchidos!')
        }

        //Salvar um orfanato

        try{
            const db = await Database
            await saveOrphanage(db,{
                lat: fields.lat,
                lng: fields.lng,
                name: fields.name,
                about: fields.about,
                whatsapp: fields.whatsapp,
                images: fields.images.toString(),
                instructions: fields.instructions,
                opening_hours: fields.opening_hours,
                open_on_weekends: fields.open_on_weekends,
            })

            //redirecionando para outra pagina
            return res.redirect('/orphanages')
        }
        catch(error){
            console.log(error)
            return res.send("Erro no banco de dados!")
        }

    }
}