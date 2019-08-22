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
        $('p').fadeOut();
        $('p').delay(1000);
        $('p').fadeIn();
    });
    
//a funcao fadein e fadeout é inserida para entrada e saida de dados 
// podendo inserir o tempo desejado.    
    $('#vermelho').click(function(){
        $('p').css("color", "red");

    //encadeamento de bloco    
    $('#mensagem').text("cor alterada com sucesso")
       .css('color', 'red')
       //declaracao multipla css
       .css({color:'red', border:'1px solid red'})
       .delay(3000)
       .fadeOut()
       //adicionando classe 
       .addClass('green');

       $('button').removeClass('red');
    });
});
