const express=require("express")
const cors=require("cors");
const { socketController } = require("../sockets/controller");

class Server {
    constructor(){
        this.app= express();
        this.port= process.env.PORT;
        //agregamos socketIo a la aplicacion de express
        //este es el server que se levanta, no es el de ex
        this.server=require("http").createServer(this.app);
        //io es la info de mis sockets conectados
        this.io=require("socket.io")(this.server);

        this.paths={}
        
        //middlewares
        this.middlewares();
        //ruta de mi aplicacion
        this.routes();
        //sockets
        this.sockets();
    }
    
    //esto se ejecuta antes de mandar a la ruta
    middlewares(){
        //CORS 
        this.app.use(cors());
        //directorio publico
        this.app.use( express.static("public") );
    }
    routes(){//this.app.use(this.paths.auth, require("../routes/auth"));
            }
    sockets(){
        this.io.on("connection",socketController);
    }
    listen(){
        this.server.listen(this.port, () =>{
            console.log("Servidor corriendo en puerto",process.env.PORT)
        })
    }
}

module.exports= Server;