
//declarar los campos de visualizacion
var elementoVisualizarXML = document.getElementById("visualizar_xml");
var elementoVisualizarJSON = document.getElementById("visualizar_json");
var elementoVisualizarTransformacion = document.getElementById("visualizar_transformacion");
//declarar botones
var btnXML = document.getElementById("obtener_xml_contenido");
var btnJSON = document.getElementById("obtener_json_contenido");
var btnJsonString = document.getElementById("btn_json_a_string");
var btnStringJson = document.getElementById("btn_string_a_json");
//Rutas locales
var rutaEjemploXML = "xml/ejemploXML.xml";
var rutaEjemploJSON = "json/ejemploJSON.json";
var rutaPhoneBook = "json/phone_book.json";

/*
//Rutas externas para la prueba en jsfiddle.net
var rutaEjemploXML = "https://raw.githubusercontent.com/lounchy/CURSO_JS_MIRIADAX/master/02_ajax/xml/ejemploXML.xml";
var rutaEjemploJSON = "https://raw.githubusercontent.com/lounchy/CURSO_JS_MIRIADAX/master/02_ajax/json/ejemploJSON.json";
var rutaPhoneBook = "https://raw.githubusercontent.com/lounchy/CURSO_JS_MIRIADAX/master/02_ajax/json/phone_book.json";
*/

//setear botones on onClick
btnXML.onclick = function () { obtenerXML(rutaEjemploXML) };
btnJSON.onclick = function () { obtenerJson(rutaEjemploJSON,1) };
btnJsonString.onclick = function () {obtenerJson(rutaPhoneBook,2)};
btnStringJson.onclick = function () { obtenerJson(rutaPhoneBook,3)};

function obtenerXML(ruta) {
    console.log(typeof ruta)
    var xhttp;
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest;
    } else {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log("Todo bien");
            //la version que nos ha pedido
            var xml = xhttp.responseXML;
            var contenido = xml.getElementsByTagName("contenido")[0].childNodes[0].nodeValue;

            /*
                //La Version de prueba
                var xml = xhttp.response;
                //Para hacer la prueba en jsfiddle.net xml viene como el string por eso hay que parsear
                var parser = new DOMParser();
                var xmlDoc = parser.parseFromString(xml,"text/xml");
                var contenido = xmlDoc.getElementsByTagName("contenido")[0].childNodes[0].nodeValue;
             */
            
            elementoVisualizarXML.value = contenido;
        }
    }
    xhttp.open("GET", ruta, true);
    xhttp.send();
}
function obtenerJson(ruta,caso){
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
            switch(caso){
                case 1:
                visualizarJson(json);
                break;
                case 2:
                visualizarTransJsonString(json);
                break;
                case 3:
                visualizarTransStringJson(json);
                break;
            }
        }else{
            console.log("ALgo va mal");
        }
    }
    xhttp.open("GET", ruta, true);
    xhttp.responseType = 'json';
    xhttp.send();
}

function visualizarJson(json){
    var contenido = JSON.stringify(json);
    var tags = Object.keys(json);
    elementoVisualizarJSON.value = contenido + " | "  +  tags[0] + ": " + json.name + " | "  +  tags[1] + ": "  + json.country;
}
function visualizarTransJsonString(json) {
    //Asi se consigue el transformar JSON a String 
    var contenidoString = JSON.stringify(json);
    elementoVisualizarTransformacion.innerHTML = contenidoString;
    console.log(contenidoString);
}

function visualizarTransStringJson(json){
    var contenidoString = elementoVisualizarTransformacion.textContent;
    if (contenidoString.length > 0) {
        //Asi se consigue el transformar String a JSON 
        var contenidoJSON = JSON.parse(contenidoString);
        elementoVisualizarTransformacion.innerHTML = "<strong>Para poder ver el objeto abre la consola: </strong>" + contenidoJSON;
        console.log(contenidoJSON);
    } else {
        elementoVisualizarTransformacion.innerHTML = "String vacio, consigue objeto JSON pulsando el boton [JSON a String]"
    }
}

