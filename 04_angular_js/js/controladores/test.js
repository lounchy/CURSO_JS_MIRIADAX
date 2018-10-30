(function(){
    //Encontrar el modulo y declarar el controlador
    angular
    .module('amigoTestApp')
    .controller('testCtrl', TestControlador);
    //injectar las factorias
    TestControlador.inject = ['datos', 'pantalla'];

    function TestControlador(datos, pantalla){
        var ctx = this;
        //declarar variable pantalla para poder acceder desde index.html y averiguar si hay que visualizar el test o no.
        ctx.pantalla = pantalla;
         //Buscar el objeto test en el archivo datos.js
        datos.objTest.then(function(data){
            ctx.objetoTest = data;
        });
        //setear la primera pregunta
        ctx.preguntaActual = 0;
        //setear la proxima pregunta
        ctx.proximaPregunta = proximaPregunta;

        function proximaPregunta(respuesta){
            console.log("respuesta = " + respuesta);
            //comprobar si respuesta es correcta
            if( ctx.objetoTest[ctx.preguntaActual].correcta == respuesta){
                ctx.objetoTest[ctx.preguntaActual].verdadera = true;
            }else{
                ctx.objetoTest[ctx.preguntaActual].verdadera = false;
            }
            //no hay más preguntas
           if(ctx.preguntaActual == ctx.objetoTest.length-1){
            console.log("YA NO HAY PREGUNTAS")
            //llamar la funcion test completo
            testCompleto();
           }
            //mover el index a proxima pregunta
            ctx.preguntaActual++;
        }

        function testCompleto(){
            //llamar la funcion para que cambie el estado en archivo pantalla.js
            pantalla.cambiarTestCompleto(true);
            
            var totalPreguntas = ctx.objetoTest.length;
            var pregunta = ctx.objetoTest;
            var correctas = 0;
            var falsas = 0;
            //recorrer todos preguntas y actualizar respuestas correctas/falsas
            for(var i = 0; i < totalPreguntas; i++){
                if(pregunta[i].verdadera){
                    correctas++;
                }else{
                    falsas++;
                }
            }
            //declarar variable de resultado
            ctx.imprimirResultado = "Resultado: De " + totalPreguntas + " preguntas tienes " + correctas + " corectas y " + falsas + " falsas";


        }



        
    }

})();