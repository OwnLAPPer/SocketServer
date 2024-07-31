//referenias html
const lblOnline=document.querySelector("#lblonline");
const lblOffline=document.querySelector("#lbloffline");
const txtMensaje=document.querySelector("#txtMensaje");
const btnEnviar=document.querySelector("#btnEnviar");


//cliente
const socket= io();


//event listenen ( ON SIGNIFICA ESCUCHAR)
socket.on("connect",()=>{
    console.log("conectado");
    lblOffline.style.display="none";
    lblOnline.style.display="";
});

socket.on("disconnect",()=>{
    console.log("desconectado");
    lblOffline.style.display="";
    lblOnline.style.display="none";
});

socket.on("enviar-mensaje",(payload)=>{
    console.log(payload)
})

//emit es emitir un evento
btnEnviar.addEventListener( "click" ,()=>{

    const mensaje=txtMensaje.value;
    const payload={
        mensaje,
        id:"2345abc",
        fecha: new Date().getTime()
    }
    //con esta linea se le envia el mensaje al servidor
    socket.emit("enviar-mensaje",payload,(id)=>{
        console.log("desde el server", id);


    });

});