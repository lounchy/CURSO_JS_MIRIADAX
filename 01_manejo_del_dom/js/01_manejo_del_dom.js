/**
 * Caso práctico "Manejo del DOM"
 * 1º Obtener la lista de elementos de etiqueta <p> y mostrarlos en un alert de JavaScript. 
 * 2º Añadir un nuevo elemento <p> con el texto “Texto del nuevo párrafo” y que sea hijo del body.
 */

//Iniciar variables
var pContainer = document.getElementById("pContainer");
var todosParrafos = pContainer.querySelectorAll("p");
var btnObtenerLista = document.getElementById("obtenerLista");
var btnAniadirElemento = document.getElementById("aniadirElemento");
//Setear variables con onClick
btnObtenerLista.onclick = function(){mostrarLista()};
btnAniadirElemento.onclick = function(){aniadirElemento()};
//Funcion para mostrar la lista en el alert
function mostrarLista(){
    //preparar primera parte de mensaje -> Elementos totales en la lista
    var msgElementosTotal = "La lista tiene " + todosParrafos.length + " páraffos \n \n";
    //declarar segunda parte de mensaje y la posicion
    var msg = "";
    var pos = 0;
    do{
        //actualizar el mensaje
        msg = msg + todosParrafos[pos].innerText + "\n";
        ++pos; 
    }while(pos < todosParrafos.length);
    //mostrar en alert
    alert(msgElementosTotal + msg);
}
//Funcion para añadir elemento 
function aniadirElemento(){
    //crear nueva posicion
    var pos = todosParrafos.length + 1;
    //crear nuevo texto
    var msg = "Texto dentro de la etiqueta <p> - " + pos;
    //crear nuevo párrafo
    var nuevoParrafo = document.createElement("p");
    //añadir el color de fondo para el párrafo creado
    nuevoParrafo.style.backgroundColor = '#57d13f';
    //añadir el texto en el párrafo
    nuevoParrafo.appendChild(document.createTextNode(msg));
    //añadir el párrafo en su Padre/contenedor *div*
    pContainer.appendChild(nuevoParrafo);
    //actualizar la lista que contiene el contenedor
    todosParrafos = pContainer.querySelectorAll("p");
    
}

