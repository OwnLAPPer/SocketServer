//llamamos a dotenv para que usea la configuracion 
require("dotenv").config();
//importamos la clase server
const Server=require("./models/server");
//creamos una constante tipo server con new(la clase server)
const server= new Server();
//configuracion de



//llamamos al metodo listen para reconocer el llamado
server.listen();