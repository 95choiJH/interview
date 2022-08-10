$(function(){

    var num = new Array();
    $('.btn-q').click(function(){
        $('.a').addClass('hide')
        randomQuestion();
    })
    $('.btn-a').click(function(){
        $('.a').removeClass('hide')
    })

    function randomQuestion() {
        var random = Math.floor(Math.random() * 99) + 1;
        console.log(random);
        if(num.includes(random)) {
            randomQuestion();
        } else {
            num.push(random)
            console.log(num);
            var question = $('li:nth-child('+random+') strong').text();
            var answer = $('li:nth-child('+random+') p').text();
            $('.q').text(question);
            $('.a').text(answer);
        }
    }
})
