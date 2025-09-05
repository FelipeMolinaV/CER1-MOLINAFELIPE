var intervalo = setInterval(contador, 1000);

var fechaActual = dayjs(new Date)
var fechaLimite = fechaActual.add(5, 's')
var escalaIcono = 100;

function contador(){

    var tiempoContador = dayjs(new Date)
    var milisegundosRestantes = fechaLimite.diff(tiempoContador)
    var diasRestantes = Math.floor(milisegundosRestantes / (1000 * 60 * 60 * 24));
    var horasRestantes = Math.floor((milisegundosRestantes % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutosRestantes = Math.floor((milisegundosRestantes % (1000 * 60 * 60)) / (1000 * 60));
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
        var contador = document.getElementById("contador")
        contador.removeChild(document.getElementById("cont-dias"))
        contador.removeChild(document.getElementById("cont-horas"))
        contador.removeChild(document.getElementById("cont-minutos"))
        contador.removeChild(document.getElementById("cont-segundos"))

        // <h1 class="text-4xl font-semibold pt-[4vh]">En vivo</h1>
        var textoResultado = document.createElement('h1')
        textoResultado.id = "resultado"
        textoResultado.classList.add("text-5xl","font-semibold", "pt-[4vh]")
        textoResultado.innerText = "En vivo"

        // <img src="img/live.png" alt="" class="max-h-[6vh]">
        var iconoVivo = document.createElement('img')
        iconoVivo.src =  "img/live.png"
        iconoVivo.alt = "señal en vivo"
        iconoVivo.id = "icono_vivo"
        iconoVivo.classList.add("max-h-[6vh]")

        contador.appendChild(textoResultado)
        contador.appendChild(iconoVivo)
    }
}

//setInterval(contador, 1000)


