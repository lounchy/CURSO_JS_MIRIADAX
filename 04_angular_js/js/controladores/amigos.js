
(function(){
    //Encontrar el modulo y declarar el controlador
    angular
        .module('amigoTestApp')
        .controller('amigosCtrl', AmigosControllador); //Valor que he guardado antes en el div amigos controller
    //injectar las factorias
    AmigosControllador.inject = ['datos', 'pantalla'];

    function AmigosControllador(datos, pantalla){
        //para no equivobarme con las variables y controladores en vede usar $scope usaré this, pero para eso en index.html ng-controller
        //hace falta añadir 'as ***' donde en mi caso *** = amigos - SOLO ASI  index.html PODRA RECONOCER LAS VARIABLES
        var ctx = this;
        //Buscar el objeto en el archivo datos.js
        datos.objAmigos.then(function(data){
            ctx.objetoAmigos = data;
        });
        //preparar la variable pantalla para visualizar/esconder el test
        ctx.pantalla = pantalla;
        ctx.activarTest = activarTest;

        function activarTest(){
            pantalla.cambiarTestActivo(true);
        }

        
    }

})();
