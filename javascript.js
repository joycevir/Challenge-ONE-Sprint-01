var boton_encriptar = document.querySelector(".encriptar");
var boton_desencriptar = document.querySelector(".desencriptar");
var boton_copiar = document.querySelector(".boton-copiar");
var munieco = document.querySelector(".munieco")
var h3 = document.querySelector(".seccion-h3")
var parrafo = document.querySelector(".parrafo")
var mensaje_encriptado = document.querySelector(".mensaje-encriptado")
var areaText = document.querySelector(".miarea");
var textosalida= areaText.value
var longitud= buscarLongitud()
var textoIntroducido = texto()


areaText.focus();

function limpiar() {
    document.getElementById('textoentrada').value = "";
}
 
function texto() {
    var areaText = document.querySelector(".miarea");
    return areaText.value;

}

function desaparecerIzquierda() {
    
    munieco.classList.add("desaparecer")
    h3.classList.add("desaparecer")
    parrafo.classList.add("desaparecer")

}


function encriptar() {
    
    desaparecerIzquierda();
    mensaje_encriptado.textContent= encriptarTexto(texto())
    
}

function encriptarTexto(frase) {

    var Texto = frase
    var salidaTexto =""
    for ( var contador =0; contador < Texto.length; contador++) {
        
        if (Texto[contador] == "i" ) {
            salidaTexto = salidaTexto + "imes"

        }
        else if( Texto[contador]== "e"){
            salidaTexto = salidaTexto + "enter"
        }
        else if(Texto[contador ]== "a") {
            salidaTexto= salidaTexto + "ai"
        }

        else if(Texto[contador] == "o") {
            salidaTexto = salidaTexto + "ober"
        }
        else if (Texto[contador]== "u") {
            salidaTexto= salidaTexto + "ufat"
        }

        else {
            salidaTexto = salidaTexto + Texto[contador]
        }

    }

    return salidaTexto

}


function buscarLongitud() {
    var areaText = document.querySelector(".miarea");
    var texto= areaText.value
    longitud= texto.length
    return longitud

}

function desencriptar() {
    desaparecerIzquierda();
    mensaje_encriptado.textContent=desencriptarTexto(texto())
    


}


function desencriptarTexto(frase) {
    var Texto = frase
    var salidaTexto =""
    for ( var contador =0; contador < Texto.length; contador++) {
        if (Texto[contador] == "i" ) {
            salidaTexto = salidaTexto + "i"
            contador = contador +3

        }
        else if( Texto[contador]== "e"){
            salidaTexto = salidaTexto + "e"
            contador = contador + 4
        }
        else if(Texto[contador ]== "a") {
            salidaTexto= salidaTexto + "a"
            contador= contador+1
        }

        else if(Texto[contador] == "o") {
            salidaTexto = salidaTexto + "o"
            contador= contador+3
        }
        else if (Texto[contador]== "u") {
            salidaTexto= salidaTexto + "u"
            contador= contador+3
        }

        else {
            salidaTexto = salidaTexto + Texto[contador]
        }



    }

    return salidaTexto



}




function copiar() {
    var mensaje = document.getElementById('resultado');   
    mensaje.select();
    document.execCommand('copy');
    limpiar()
    areaText.focus()
    
    
}



function validar(frase) {
    var caracteres = /([A-Z@#$&~*.!'"%=?¡¿`´àèìòùáéíóú()/])/
    
    for (var i = 0; i < frase.length; i++) {
        if (caracteres.test(texto()) == true){
            alert("solo minisculas y sin caracteres especiales")
            break;
        }
        else{
            encriptar()
        }

    }


}
   
function validarEncriptar() {
    validar(texto())
}


boton_encriptar.onclick = validarEncriptar;
boton_desencriptar.onclick = desencriptar;
boton_copiar.onclick=copiar;



