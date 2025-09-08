function limpiar(){
    document.getElementById("usuario").value = ""
    mensaje = document.getElementById("mensaje").value = ""
}

function publicar(){
    var nombreUsuario = document.getElementById("usuario").value
    var mensaje = document.getElementById("mensaje").value
    
    
    if (nombreUsuario == "" || mensaje == ""){
        alert("Debe rellenar los campos del formulario.")
    }
    else {

        // dar formato al string de fecha y hora
        var fechaHora = dayjs(new Date)
        var dia = (fechaHora.date().toString().length == 1) ? "0" + fechaHora.date() : fechaHora.date() 
        var mes = (fechaHora.month().toString().length == 1) ? "0" + (fechaHora.month() + 1): (fechaHora.month() + 1)
        var minutos = (fechaHora.minute().toString().length == 1) ? "0" + fechaHora.minute() : fechaHora.minute()

        // primer comentario es la base para los demas
        // podria crearse el objeto base desde aqui.
        var cajaComentarios = document.getElementById("caja_comentarios")
        var comentario = document.getElementById("comentario")
        var nuevoComentario = comentario.cloneNode(true);
        nuevoComentario.id = ""

        nuevoComentario.querySelector("#alias").innerText = nombreUsuario
        nuevoComentario.querySelector("#fecha").innerText = (dia + "/" + mes
                                + "/" + fechaHora.year() + " - " + fechaHora.hour() + ":" + minutos)
        nuevoComentario.querySelector("#comentario_texto").innerText = mensaje

        cajaComentarios.appendChild(nuevoComentario)

        limpiar()
    }
}