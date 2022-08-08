$(function(){

    
    $('.btn-q').click(function(){
        $('.a').addClass('hide')
        var random = Math.floor(Math.random() * 99) + 1;
        var question = $('li:nth-child('+random+') strong').text();
        var answer = $('li:nth-child('+random+') p').text();
        $('.q').text(question);
        $('.a').text(answer);
    })
    $('.btn-a').click(function(){
        $('.a').removeClass('hide')
    })

})
