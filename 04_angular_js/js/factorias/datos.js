(function(){
     //Encontrar el modulo con que quiero trabajar y declarar la factoria 
    angular
        .module('amigoTestApp')
        .factory('datos' , DatosFactoria);


        function DatosFactoria($http){
            //hacer la conección al archivo json y guardar el objeto 
            //Se puede hacer esta peticion tanto local como de un API externo

            //Gardar el objeto json Amigos en variable
            var getAmigosJson = $http.get('json/amigos.json').then(function(response){
                return response.data;
            });
            //Gardar el objeto json Test en variable
            var getTestJson = $http.get('json/test.json').then(function(response){
                return response.data;
            });

            //crear un objeto para guardar todos objetos nececarios. En este caso lista amigos y el test
            var obj = {
                objAmigos : getAmigosJson,
                objTest : getTestJson
                
            }
            //devolver objeto
            console.log("RETURN: " + obj)
            return obj;
        }

})();
