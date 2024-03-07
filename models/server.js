


const express = require('express');
var cors = require('cors')

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        this.usuariosPath = '/api/usuarios';
        // middleawers
        this.middlewares();

        //rutas de mi aplicacion

        this.routes();

    }

    middlewares(){

        //cors
        this.app.use(cors())
        // directorio publico

        // parseo y lectura del body

        this.app.use(express.json());

        this.app.use(express.static('public'));
    }

    routes (){

        this.app.use(this.usuariosPath, require('../routes/usuarios'));
        
    }

    listen(){
        this.app.listen(this.port, () =>{
            console.log('Servidor corriendo en puerto', process.env.PORT);
        });
        
        
    }

}

module.exports = Server;