/*
*Enviar la petición por Ajax, obtener el contenido y visualizarlo
*/
var btnObtener = document.getElementById("obtener_contenido");
btnObtener.onclick = function(){obtenerContenido()};
function obtenerContenido(){
    var xhttp;
    if(window.XMLHttpRequest){
        xhttp = new XMLHttpRequest;      
    }else {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            console.log("Todo bien");
            var xml = xhttp.responseXML;
            visualizarContenido(xml);
        }else{
            console.log("ALgo va mal");
        }
    }
    xhttp.open("GET", "xml/ejemploXML.xml", true);
    xhttp.send();
    
}

function visualizarContenido(xml){
    var contenido = xml.getElementsByTagName("contenido")[0].childNodes[0].nodeValue;
    var elemento = document.getElementById("respuesta");
    elemento.value = contenido;
}


