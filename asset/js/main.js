$(function(){

    
    $('button').click(function(){
        var random = Math.floor(Math.random() * 99) + 1;
        var question = $('li:nth-child('+random+') strong').text();
        $('.q').text(question);
    })

})
