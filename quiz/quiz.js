$(document).ready(() => {
    $('.inactive').hide();
    
    let score = 0;

    const logo = document.querySelectorAll('#logo path');

    for(let i = 0; i<logo.length; i++){
        console.log(`letter ${i} is ${logo[i].getTotalLength()}`);
    };

    $('.opt1').mouseenter(() => {
        $('.opt1').addClass('opt1h').css('transition', '0.5s ease');
    })

    $('.opt1').mouseleave(() => {
        $('.opt1').removeClass('opt1h');
    })

    $('.opt2').mouseenter(() => {
        $('.opt2').addClass('opt2h').css('transition', '0.5s ease');
    })

    $('.opt2').mouseleave(() => {
        $('.opt2').removeClass('opt2h');
    })

    $('.opt3').mouseenter(() => {
        $('.opt3').addClass('opt3h').css('transition', '0.5s ease');
    })

    $('.opt3').mouseleave(() => {
        $('.opt3').removeClass('opt3h');
    })

    $('.opt4').mouseenter(() => {
        $('.opt4').addClass('opt4h').css('transition', '0.5s ease');
    })

    $('.opt4').mouseleave(() => {
        $('.opt4').removeClass('opt4h');
    })

    $('.opt1').on('click', () => {
        $('.opt1').css('transition', '');
        $('.opt2').css('transition', '');
        $('.opt3').css('transition', '');
        $('.opt4').css('transition', '');
    })
        
    $('.opt2').on('click', () => {
        $('.opt1').css('transition', '');
        $('.opt2').css('transition', '');
        $('.opt3').css('transition', '');
        $('.opt4').css('transition', '');
    })

    $('.opt3').on('click', () => {
        $('.opt1').css('transition', '');
        $('.opt2').css('transition', '');
        $('.opt3').css('transition', '');
        $('.opt4').css('transition', '');
    })

    $('.opt4').on('click', () => {
        $('.opt1').css('transition', '');
        $('.opt2').css('transition', '');
        $('.opt3').css('transition', '');
        $('.opt4').css('transition', '');
    })

    $('.pageLoad').hide();

    $('.pageLoad').delay(4600).fadeIn(600);

    $('.start').on('click', () => {
        $('.start').fadeOut(600, () => {
            $('.question1').fadeIn(600);
            $('.answer1').fadeIn(600);
        });
    });

    $('.correct1').on('click', () => {
        score++;
        $('.answer1').fadeOut(600);
        $('.question1').fadeOut(600);
        
        $('.correctAnswer1').delay(600).fadeIn(600, () =>{
            $('.correctAnswer1').delay(1800).fadeOut(600);
        });

        $('.answer2').delay(3600).fadeIn(600);
        $('.question2').delay(3600).fadeIn(600);
        $('.r1').css('animation', 'correctAlert 2s').attr('id', 'rc').append('<br />CORRECT');
    })

    $('.correct2').on('click', () => {
        score++;
        $('.answer2').fadeOut(600);
        $('.question2').fadeOut(600);
        
        $('.correctAnswer2').delay(600).fadeIn(600, () =>{
            $('.correctAnswer2').delay(1800).fadeOut(600);
        });

        $('.answer3').delay(3600).fadeIn(600);
        $('.question3').delay(3600).fadeIn(600);
        $('.r2').css('animation', 'correctAlert 2s').attr('id', 'rc').append('<br />CORRECT');
    })

    $('.correct3').on('click', () => {
        score++;
        $('.answer3').fadeOut(600);
        $('.question3').fadeOut(600);
        
        $('.correctAnswer3').delay(600).fadeIn(600, () =>{
            $('.correctAnswer3').delay(1800).fadeOut(600);
        });

        $('.answer4').delay(3600).fadeIn(600);
        $('.question4').delay(3600).fadeIn(600);
        $('.r3').css('animation', 'correctAlert 2s').attr('id', 'rc').append('<br />CORRECT');
    })

    $('.correct4').on('click', () => {
        score++;
        $('.answer4').fadeOut(600);
        $('.question4').fadeOut(600);
        
        $('.correctAnswer4').delay(600).fadeIn(600, () =>{
            $('.correctAnswer4').delay(1800).fadeOut(600);
        });

        $('.answer5').delay(3600).fadeIn(600);
        $('.question5').delay(3600).fadeIn(600);
        $('.r4').css('animation', 'correctAlert 2s').attr('id', 'rc').append('<br />CORRECT');
    })

    $('.correct5').on('click', () => {
        score++;
        $('.answer5').fadeOut(600);
        $('.question5').fadeOut(600);
        
        $('.correctAnswer5').delay(600).fadeIn(600, () =>{
            $('.correctAnswer5').delay(1800).fadeOut(600);
        });

        $('.finalScore').delay(3600).fadeIn(600);
        $('.score').html(score+"/5").fadeIn(600);
        $('.r5').css('animation', 'correctAlert 2s').attr('id', 'rc').append('<br />CORRECT');
    })

    $('.wrong1').on('click', () => {
        $('.answer1').fadeOut(600);
        $('.question1').fadeOut(600);
        
        $('.incorrectAnswer1').delay(600).fadeIn(600, () =>{
            $('.incorrectAnswer1').delay(1800).fadeOut(600);
        });

        $('.answer2').delay(3600).fadeIn(600);
        $('.question2').delay(3600).fadeIn(600);
        $('.r1').css('animation', 'incorrectAlert 2s').attr('id', 'ri').append('<br />WRONG');
    })

    $('.wrong2').on('click', () => {
        $('.answer2').fadeOut(600);
        $('.question2').fadeOut(600);
        
        $('.incorrectAnswer2').delay(600).fadeIn(600, () =>{
            $('.incorrectAnswer2').delay(1800).fadeOut(600);
        });

        $('.answer3').delay(3600).fadeIn(600);
        $('.question3').delay(3600).fadeIn(600);
        $('.r2').css('animation', 'incorrectAlert 2s').attr('id', 'ri').append('<br />WRONG');
    })

    $('.wrong3').on('click', () => {
        $('.answer3').fadeOut(600);
        $('.question3').fadeOut(600);
        
        $('.incorrectAnswer3').delay(600).fadeIn(600, () =>{
            $('.incorrectAnswer3').delay(1800).fadeOut(600);
        });

        $('.answer4').delay(3600).fadeIn(600);
        $('.question4').delay(3600).fadeIn(600);
        $('.r3').css('animation', 'incorrectAlert 2s').attr('id', 'ri').append('<br />WRONG');
    })

    $('.wrong4').on('click', () => {
        $('.answer4').fadeOut(600);
        $('.question4').fadeOut(600);
        
        $('.incorrectAnswer4').delay(600).fadeIn(600, () =>{
            $('.incorrectAnswer4').delay(1800).fadeOut(600);
        });

        $('.answer5').delay(3600).fadeIn(600);
        $('.question5').delay(3600).fadeIn(600);
        $('.r4').css('animation', 'incorrectAlert 2s').attr('id', 'ri').append('<br />WRONG');
    })

    $('.wrong5').on('click', () => {
        $('.answer5').fadeOut(600);
        $('.question5').fadeOut(600);
        
        $('.incorrectAnswer5').delay(600).fadeIn(600, () =>{
            $('.incorrectAnswer5').delay(1800).fadeOut(600);
        });

        $('.finalScore').delay(3600).fadeIn(600);
        $('.score').html(score+"/5").fadeIn();
        $('.r5').css('animation', 'incorrectAlert 2s').attr('id', 'ri').append('<br />WRONG');
    })

    $('.restart').on('click', () => {
        location.reload(true);
    });

});