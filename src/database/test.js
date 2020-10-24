const Database = require('./db');
const saveOrphanage = require('./saveOrphanage.js');

Database.then(async function(db){ //o async libera usar o await nas linhas para nao precisar ficando usar .then
    //Inserir dados na tableLayout manualmente
    /*await saveOrphanage(db,{
            lat: "-20.8970905",
            lng: "-49.8014284",
            name: "Lar das criancas",
            about: "Presta assistencia a criancas de 06 anos",
            whatsapp: "1234534534",
            images: ["https://images.unsplash.com/photo-1574559854225-4349f0fda8cd?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1574559854225-4349f0fda8cd?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"].toString()
            ,
            instructions: "Venha conferir qualquer dia ae",
            opening_hours: "Horario comercial",
            open_on_weekends: "0"
        }
    );*/

    //Consultar dados na tabela
    const selectesdOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectesdOrphanages)

    //Consultar somente 1 orphanato
    const orphanage = await db.all("SELECT * FROM orphanages WHERE id ='2'")
    console.log(orphanage)

    //Deletar dados
    //const deleteOrphanage = await db.run("DELETE FROM orphanages WHERE id ='4'")
    //console.log(deleteOrphanage)
})