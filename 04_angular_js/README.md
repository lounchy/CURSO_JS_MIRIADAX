**Casos prácticos "Angular"**<hr>
 <a>**Preparación de la mesa de trabajo**</a>
1.  Dentro de carpeta principal crear archivo ***index.html***
2.  Dentro de carpeta principal crear una nueva carpeta llamada ***json*** y dentro de ella crear dos archivos ***amigos.json*** y ***test.json***
3.  Dentro de carpeta principal crear una nueva carpeta llamada ***js*** y dentro de ella crear dos subcarpetas llamadas ***controladores*** y ***factorias***
4.  Descargar la libreria ***AngularJs*** en https://angularjs.org/ y añadir el archivo descargado ***angular.min.js*** en la carpeta ***js***
5.  Dentro de la carpeta ***js*** crear archivo ***amigoTestApp.js***
6.  Dentro de la subcarpeta ***controladores*** crear dos archivos: ***amigos.js*** y ***test.js***
7.  Dentro de la subcarpeta ***factorias*** crear dos archivos: ***datos.js*** y ***pantalla.js***
8.  Crear carpeta ***css*** y el archivo para los stilos personalizados lo llamaré ***stilos.css***
9.  Dentro de ***index.html*** en ***head*** declarar el archivo ***stilos.css***
10. Dentro de ***index.html***  al final del body declarar todos los ***scripts*** por el orden:<br>
        1) ***angular.min.js***<br>
        2) ***amigoTestApp.js***<br>
        3) ***amigos.js***<br>
        4) ***test.js***<br>
        5) ***datos.js***<br>
        6) ***pantalla.js***<br>
        
**LA MESA DE TRABAJO ESTÄ LISTA**<hr>
<a>***Visualizar y filtrar por el input la lista de amigos***</a>
1.  Dentro de ***amigos.json*** crear el objeto con amigos.
2.  Dentro de ***index.html*** en la etiqueta ***html*** añadir la directiva de AngularJS ***ng-app*** con valor ***amigoTestApp***
3.  Dentro de ***amigoTestApp.js*** declarar el modulo
4.  Dentro de ***index.html*** preparar el campo que visualizará la lista de amigos y la caja de busqueda. Ese va a ser mi primer controlador:<br>
    1) Crear un ***div*** y dar clase ***contenedor*** - en el archivo de stilos dar un ***margin-left***. Dar la directiva ***ng-controller*** con valor ***amigosCtrl  as amigos***, y otra directiva ***ng-hide*** con valor ***false***(más adelante este valor cambiaré)<br>
    2) Dentro de ***div contralador amigos*** crear un ***input***, dar la directiva ***mg-model*** con valor ***buscarAmigo***, un ***placeholder*** y ***type="text"***. En el archivo de stillos dar unos stilos. - Este será mi caja de busqueda<br>
    3) Dentro de ***div contralador amigos*** crear un ***h3***.En el archivo de stillos dar unos stilos. - Aqui visualizare cuantos amigos tengo<br>
    4) Dentro de ***div contralador amigos*** crear un ***p***, dar la directiva ***ng-repeat*** con valor ***amigo in todosAmigos | filter : buscarAmigo***.En el archivo de stillos dar unos stilos. -Con la ayuda de ***ng-repeat*** visualizaré todos amigos de archivo ***amigos.json***<br>
    5) Dentro de ***div contralador amigos*** crear un ***button***, dar la directiva ***ng-click*** con valor ***activarTest()***.En el archivo de stillos dar unos stilos.- Este boton lanzará el test<br>
5.  Dentro de ***js/factorias/datos.js*** encontrar el ***module*** y  declarar la ***factoria***. Más info en los comentarios ***datos.js***
6.  Dentro de ***js/controladores/amigos.js*** encontrar el ***module***, declarar el ***controller*** y injectar las ***factorias***. Más info en los comentarios ***amigos.js***
7.  Dentro de ***js/factorias/pantalla.js*** encontrar el ***module*** y  declarar la ***factoria***. Más info en los comentarios ***pantalla.js***
8.  Dentro de ***js/controladores/amigos.js*** injectar la factoria ***pantalla*** declarar las variables y crear la funcion que escuchará el evento ***click*** al pulsar ***empezar test***
9.  Dentro de ***index.html*** en ***div contralador amigos*** donde antes he puesto directiva ***ng-hide*** con valor ***false*** ahora se puede cambiar el valor a ***amigos.pantalla.testActivo***. Ese valor guardar ***true*** o ***false*** dependiendo si el test está activo o no. <br>

**LA LISTA ESTÄ VISUALISADA, CAJA DE BUSQUEDA ACTIVA Y CON EL CLICK EMPEZAR TEST LA VISTA DISAPARECE**<hr>
<a>***Creación de test***</a>
1. Dentro de ***index.html*** crear el contenedor que visualizará el test, dar ***class="contenedor"*** y las directivas ***ng-controller="testCtrl as test"*** y ***ng-show="test.pantalla.testActivo"***
2. Dentro de ***js/factorias/datos.js*** hacer la coneccion al archivo ***test.json*** y guardarlo en el objeto que devuelve esta clase.
3. Dentro de ***js/controladores/test.js*** encontrar el ***module***, declarar el ***controller*** y injectar las ***factorias***. Más info en los comentarios ***test.js***
4. Dentro de ***index.html*** crear:<br>
        1) Un ***div*** que visualizara el ***progresso*** del test con directiva ***ng-repeat*** y ***ng-class*** - esta directiva actualizará los estilos basandose en las respuestas verdaderas o falsas. Dar unos stilos.<br>
        2) Un ***div*** que visualizará la pregunta actual y sus respuestas. Para ello usaré un , ***h4*** y un ***button***. Daré algunos stilos.
5. Dentro de ***js/controladores/test.js*** preparar la funcionalidad del test. Más info en los comentarios ***test.js***



        







