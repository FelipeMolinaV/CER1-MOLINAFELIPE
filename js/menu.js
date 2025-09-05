function desplegar_menu(boton){
    var menu = document.getElementById("menu")
    boton.name === 'menu-outline' ? (boton.name = 'close-outline', menu.classList.add("opacity-100")) :
                                    (boton.name = 'menu-outline', menu.classList.remove("opacity-100"))
}