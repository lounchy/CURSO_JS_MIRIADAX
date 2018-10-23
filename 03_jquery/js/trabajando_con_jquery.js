$(document).ready(function(){
    //Cambio de estilos de elementos con eventos de JQuery
    $('#input1, #input2')
    .focus(function(){
        $(this).css('color', 'red');
    })
    .blur(function(){
        $(this).css('color', 'black');
    });
    //Resaltar textos con JQuery
    $("#contenedor_parrafos p").each(function(index){
        if($(this).text().length > 100){
            $(this).css('background-color', 'yellow')
        }
    });
    //var out = $(".out");
    //$.out.value = "<b>hola</b>"; 
    $("#out").html("<b>hola</b>"); 
})

