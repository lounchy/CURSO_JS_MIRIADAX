/*
*Enviar la petición por Ajax, obtener el contenido y visualizarlo
*/
var btnObtener = document.getElementById("obtener_json_contenido");
btnObtener.onclick = function(){obtenerJsonContenido()};
function obtenerJsonContenido(){
    var xhttp;
    if(window.XMLHttpRequest){
        xhttp = new XMLHttpRequest;      
    }else {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            console.log("Todo bien");
            var json = xhttp.response;
            visualizarJsonContenido(json);
        }else{
            console.log("ALgo va mal");
        }
    }
    xhttp.open("GET", "json/ejemploJSON.json", true);
    xhttp.responseType = 'json';
    xhttp.send();
    
}

function visualizarJsonContenido(json){
    var contenido = JSON.stringify(json);
    var tags = Object.keys(json);
    var elemento = document.getElementById("respuesta_json");
    elemento.value = contenido + " | "  +  tags[0] + ": " + json.name + " | "  +  tags[1] + ": "  + json.country;
}


