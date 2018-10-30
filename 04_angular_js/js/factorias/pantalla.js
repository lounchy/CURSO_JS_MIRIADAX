(function(){
     //Encontrar el modulo con que quiero trabajar y declarar la factoria 
    angular
        .module('amigoTestApp')
        .factory('pantalla' , PantallaFactory);

        function PantallaFactory(){
            //El objeto que tiene los valores para controlar cual parte de codigo html visualizar y cual esconder
            var obj = {
                testActivo : false,
                cambiarTestActivo : cambiarTestActivo,
                testCompleto : false,
                cambiarTestCompleto : cambiarTestCompleto
            };
            //Con el click de empezar test el estado se cambiará
            function cambiarTestActivo(estado){
                obj.testActivo = estado;
            }
            //Con el click en la ultima respuesta el estado se cambiará
            function cambiarTestCompleto(estado){
                obj.testCompleto = estado;
            }


            return obj;
        }
})();