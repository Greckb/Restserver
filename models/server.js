const express = require('express')
const cors = require('cors')

class Server{

    constructor() {
        this.app = express()
        this.PORT= process.env.PORT
        this.usuariosPath = '/api/usuarios'

        //Llamamos a los middelwares
        this.middelwares();

        //Rutas de mi app
        this.routes();
        
    }

    middelwares(){
        //Cors para autorizaciones
        this.app.use(cors())

        //Lectura y parse del body
        this.app.use(express.json())

        //Directorio publico
        this.app.use(express.static('public'))
    }

    routes(){
        //Creamos un middelware para todas las rutas
        this.app.use(this.usuariosPath,require('../routes/usuarios'))
    }

    listen(){
        this.app.listen(this.PORT,()=>{
            console.log(`Server on port ${this.PORT}`)
        })
       
    }

}

module.exports = Server;