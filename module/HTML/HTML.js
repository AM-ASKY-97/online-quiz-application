$(document).ready(function(){
    
    $('#quiz-2, #quiz-3, #quiz-4, #scor').hide();

    quiz1();
    quiz2();
    quiz3();
    quiz4();
});

var count = 0;

function quiz1()
{
    $('#ans-btn-1').prop('disabled', true);

    $('#ans-1-1').on('change', function(){
        $('#ans-btn-1').prop('disabled', false);
    });

    $('#ans-1-2').on('change', function(){
        $('#ans-btn-1').prop('disabled', false);
    });

    $('#ans-1-3').on('change', function(){
        $('#ans-btn-1').prop('disabled', false);
    });

    $('#ans-btn-1').on('click', function(){
        
        if ($("#ans-1-1").is(":checked")) {
            ++count;
        }

        $('#quiz-1').hide();
        $('#quiz-2').show();
    });
}

function quiz2()
{
    $('#ans-btn-2').prop('disabled', true);

    $('#ans-2-1').on('change', function(){
        $('#ans-btn-2').prop('disabled', false);
    });

    $('#ans-2-2').on('change', function(){
        $('#ans-btn-2').prop('disabled', false);
    });

    $('#ans-2-3').on('change', function(){
        $('#ans-btn-2').prop('disabled', false);
    });

    $('#ans-2-4').on('change', function(){
        $('#ans-btn-4').prop('disabled', false);
    });

    $('#ans-btn-2').on('click', function(){

        if ($("#ans-2-3").is(":checked")) {
            ++count;
        }

        $('#quiz-2').hide();
        $('#quiz-3').show();
    });
}

function quiz3()
{
    $('#ans-btn-3').prop('disabled', true);

    $('#ans-3-1').on('change', function(){
        $('#ans-btn-3').prop('disabled', false);
    });

    $('#ans-3-2').on('change', function(){
        $('#ans-btn-3').prop('disabled', false);
    });

    $('#ans-3-3').on('change', function(){
        $('#ans-btn-3').prop('disabled', false);
    });

    $('#ans-3-4').on('change', function(){
        $('#ans-btn-3').prop('disabled', false);
    });

    $('#ans-btn-3').on('click', function(){

        if ($("#ans-3-2").is(":checked")) {
            ++count;
        }

        $('#quiz-3').hide();
        $('#quiz-4').show();
    });
}

function quiz4()
{
    $('#ans-btn-4').prop('disabled', true);

    $('#ans-4-1').on('change', function(){
        $('#ans-btn-4').prop('disabled', false);
    });

    $('#ans-4-2').on('change', function(){
        $('#ans-btn-4').prop('disabled', false);
    });

    $('#ans-4-3').on('change', function(){
        $('#ans-btn-4').prop('disabled', false);
    });

    $('#ans-btn-4').on('click', function(){

        if ($("#ans-4-3").is(":checked")) {
            ++count;
        }

        document.getElementById('score').innerHTML = count;

        $('#quiz-4').hide();
        $('#sco').show();
    });
}