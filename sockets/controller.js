

const socketController= (socket)=>{

    console.log("cliente conectado",socket.id);
    socket.on("disconnect",()=>{
        console.log("cliente desconectado");
    })


    socket.on("enviar-mensaje", ( payload, callback ) => {
        
        const id=23456;
        callback(id);


        socket.broadcast.emit("enviar-mensaje",payload);

    })

}


module.exports={socketController}