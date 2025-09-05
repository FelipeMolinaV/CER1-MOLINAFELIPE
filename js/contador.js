var fechaActual = dayjs(new Date)
var fechaLimite = fechaActual.add(30, 's')


function contador(){

    var contador = dayjs(new Date)
    var milisegundosRestantes = fechaLimite.diff(contador)
    let diasRestantes = Math.floor(milisegundosRestantes / (1000 * 60 * 60 * 24));
    let horasRestantes = Math.floor((milisegundosRestantes % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutosRestantes = Math.floor((milisegundosRestantes % (1000 * 60 * 60)) / (1000 * 60));
    let segundosRestantes = Math.floor((milisegundosRestantes % (1000 * 60)) / 1000);   
    
    if (segundosRestantes >= 0){
        var dias = document.getElementById("dias")
            .innerText = (diasRestantes.toString().length == 1) 
            ? ("0" + diasRestantes) : (diasRestantes)
        var horas = document.getElementById("horas")
            .innerText = (horasRestantes.toString().length == 1) 
            ? ("0" + horasRestantes) : (horasRestantes)
        var minutos = document.getElementById("minutos")
            .innerText = (minutosRestantes.toString().length == 1) 
            ? ("0" + minutosRestantes) : (minutosRestantes)
        var segundos = document.getElementById("segundos")
            .innerText = (segundosRestantes.toString().length == 1) 
            ? ("0" + segundosRestantes) : (segundosRestantes)
    }
    else {
        
    }
    

}

setInterval(contador, 1000)


