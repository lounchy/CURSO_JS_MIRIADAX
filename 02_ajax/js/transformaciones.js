
var elemento = document.getElementById("respuesta_transformacion");
var btnJsonString = document.getElementById("btn_json_a_string");
var btnStringJson = document.getElementById("btn_string_a_json");

btnJsonString.onclick = function () { obtenerJson() };
btnStringJson.onclick = function () { stringAjson() };

function obtenerJson() {
    var xhttp;
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest;
    } else {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log("Todo bien");
            var json = xhttp.response;
            jsonAstring(json);
        } else {
            console.log("ALgo va mal");
        }
    }
    var url = 'https://api.myjson.com/bins/lnquw';
    xhttp.open("GET", url, true);
    xhttp.responseType = 'json';
    xhttp.send();

}

function jsonAstring(json) {
    //Asi se consigue el transformar JSON a String 
    var contenidoString = JSON.stringify(json);
    elemento.innerHTML = contenidoString;
    console.log(contenidoString);
}
function stringAjson() {
    var contenidoString = elemento.textContent;
    if (contenidoString.length > 0) {
        //Asi se consigue el transformar String a JSON 
        var contenidoJSON = JSON.parse(contenidoString);
        elemento.innerHTML = "<strong>Para poder ver el objeto abre la consola: </strong>" + contenidoJSON;
        console.log(contenidoJSON);
    } else {
        elemento.innerHTML = "String vacio, consigue objeto JSON pulsando el boton [JSON a String]"
    }
   
    
}


