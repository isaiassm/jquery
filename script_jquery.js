//$(seletor).ação();

//a funcao ready ler o documento enquanto a fucao click do botao é requerida pela 
//funcao hide do h1 que apaga o button
//$(document).ready(function(){

/*
$(function(){
    $('button').click(function(){
        $('h1').hide();
    });
});
*/

$(function(){
    $('#azul').click(function(){
        $('p').css("color", "blue");
    });
    
    $('#vermelho').click(function(){
        $('p').css("color", "red");
    });
});
