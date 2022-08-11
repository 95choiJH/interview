$(function(){
    console.log("꼭 나오는 질문 추가 / 꼬리질문 추가");
    var num = new Array();
    var importantQ = new Array();
    var importantA = new Array();
    var importantCheck = true;
    var taleIndex = null;
    var teamCheck = false;
    var teamPossible = true;
    var i = 0;
    importantQuestion();
    $('.btn-q').click(function(){
        $('.a').addClass('hide')
        if (importantCheck) {
            $('.q').text(importantQ[i]);
            $('.a').text(importantA[i]);
            i++;
            i == importantQ.length ? importantCheck = false : "";
        } else {
            randomQuestion();
        }
    })
    $('.btn-a').click(function(){
        $('.a').removeClass('hide')
    })

    function importantQuestion() {
        $('strong').each(function(i){
            if ($(this).hasClass('important')) {
                importantQ.push($(this).text());
                importantA.push(($(this).siblings('p').text()));
            }
        })
    }

    function randomQuestion() {
        if (taleIndex != null) {
            var question = $('li:nth-child('+taleIndex+') strong').text();
            var answer = $('li:nth-child('+taleIndex+') p').text();
            $('.q').text(question);
            $('.a').text(answer);
            taleIndex = null;
        } else if (teamCheck) {
            var question = $('.team-answer').text();
            var answer = $('.team-answer').siblings('p').text();
            $('.q').text(question);
            $('.a').text(answer);
            teamCheck = false;
            teamPossible = false;
        } else {
            var random = Math.floor(Math.random() * $('li').length) + 1;
            if(num.includes(random)) {
                randomQuestion();
            } else {
                if ($('li:nth-child('+random+') strong').hasClass('important')) {
                    randomQuestion();
                } else {
                    var tale = $('li:nth-child('+random+') strong').hasClass('tale');
                    var team = $('li:nth-child('+random+') strong').hasClass('team');
                    var taleChild = $('li:nth-child('+random+') strong').hasClass('tale-child');
                    var teamAnswer = $('li:nth-child('+random+') strong').hasClass('team-answer');
                    if(taleChild || teamAnswer) {
                        randomQuestion();
                    }else {
                        if (tale) {
                            taleIndex = random+1;
                        }
                        num.push(random)
                        var question = $('li:nth-child('+random+') strong').text();
                        var answer = $('li:nth-child('+random+') p').text();
                        $('.q').text(question);
                        $('.a').text(answer);
                        
                        if(team) {
                            if (teamPossible) {
                                teamCheck = true;
                                num.push(random)
                                var question = $('li:nth-child('+random+') strong').text();
                                var answer = $('li:nth-child('+random+') p').text();
                                $('.q').text(question);
                                $('.a').text(answer);
                            } else {
                                randomQuestion();
                            }
                        }
                    }
                }
            }
        }
    }
})
