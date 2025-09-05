function limpiar(){
    document.getElementById("usuario").value = ""
    mensaje = document.getElementById("mensaje").value = ""
}

function publicar(){
    var nombreUsuario = document.getElementById("usuario").value
    var mensaje = document.getElementById("mensaje").value
    var fechaHora = new Date()

    if (nombreUsuario == "" || mensaje == ""){
        alert("Debe rellenar los campos del formulario.")
    }
    else {
        var cajaComentarios = document.getElementById("caja_comentarios")
        var comentario = document.getElementById("comentario")
        var nuevoComentario = comentario.cloneNode(true);
        nuevoComentario.id = ""

        nuevoComentario.querySelector("#alias").innerText = nombreUsuario
        nuevoComentario.querySelector("#fecha").innerText = (fechaHora.getDay() + "/" + fechaHora.getMonth() 
                                + "/" + fechaHora.getFullYear() + " " + fechaHora.getHours() + ":" + fechaHora.getMinutes())
        nuevoComentario.querySelector("#comentario_texto").innerText = mensaje

        cajaComentarios.appendChild(nuevoComentario)

        limpiar()
    }
}