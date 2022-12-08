$(document).ready(function(){
    $('.total-quiz').html('10');

    $('#quiz-2, #quiz-3, #quiz-4, #quiz-5, #quiz-6, #quiz-7, #quiz-8, #quiz-9, #quiz-10, #scor, #success-img').hide();

    quiz1();
    quiz2();
    quiz3();
    quiz4();
    quiz5();
    quiz6();
    quiz7();
    quiz8();
    quiz9();
    quiz10();
});

var count = 0;

function quiz1() {
    $('#ans-btn-1').prop('disabled', true);

    $('#ans-1-1').on('change', function () {
        $('#ans-btn-1').prop('disabled', false);
    });

    $('#ans-1-2').on('change', function () {
        $('#ans-btn-1').prop('disabled', false);
    });

    $('#ans-1-3').on('change', function () {
        $('#ans-btn-1').prop('disabled', false);
    });

    $('#ans-1-4').on('change', function () {
        $('#ans-btn-1').prop('disabled', false);
    });

    $('#ans-btn-1').on('click', function () {

        if ($("#ans-1-3").is(":checked")) {
            ++count;
        }
        $('.back-btn').hide();
        $('#quiz-1').hide();
        $('#quiz-2').show();
    });
}

function quiz2() {
    $('#ans-btn-2').prop('disabled', true);

    $('#ans-2-1').on('change', function () {
        $('#ans-btn-2').prop('disabled', false);
    });

    $('#ans-2-2').on('change', function () {
        $('#ans-btn-2').prop('disabled', false);
    });

    $('#ans-2-3').on('change', function () {
        $('#ans-btn-2').prop('disabled', false);
    });

    $('#ans-2-4').on('change', function () {
        $('#ans-btn-2').prop('disabled', false);
    });

    $('#ans-btn-2').on('click', function () {

        if ($("#ans-2-1").is(":checked")) {
            ++count;
        }

        $('#quiz-2').hide();
        $('#quiz-3').show();
    });
}

function quiz3() {
    $('#ans-btn-3').prop('disabled', true);

    $('#ans-3-1').on('change', function () {
        $('#ans-btn-3').prop('disabled', false);
    });

    $('#ans-3-2').on('change', function () {
        $('#ans-btn-3').prop('disabled', false);
    });

    $('#ans-3-3').on('change', function () {
        $('#ans-btn-3').prop('disabled', false);
    });

    $('#ans-btn-3').on('click', function () {

        if ($("#ans-3-3").is(":checked")) {
            ++count;
        }

        $('#quiz-3').hide();
        $('#quiz-4').show();
    });
}

function quiz4() {
    $('#ans-btn-4').prop('disabled', true);

    $('#ans-4-1').on('change', function () {
        $('#ans-btn-4').prop('disabled', false);
    });

    $('#ans-4-2').on('change', function () {
        $('#ans-btn-4').prop('disabled', false);
    });

    $('#ans-4-3').on('change', function () {
        $('#ans-btn-4').prop('disabled', false);
    });

    $('#ans-btn-4').on('click', function () {

        if ($("#ans-4-2").is(":checked")) {
            ++count;
        }

        $('#quiz-4').hide();
        $('#quiz-5').show();
    });
}

function quiz5() {
    $('#ans-btn-5').prop('disabled', true);

    $('#ans-5-1').on('change', function () {
        $('#ans-btn-5').prop('disabled', false);
    });

    $('#ans-5-2').on('change', function () {
        $('#ans-btn-5').prop('disabled', false);
    });

    $('#ans-5-3').on('change', function () {
        $('#ans-btn-5').prop('disabled', false);
    });

    
    $('#ans-5-4').on('change', function () {
        $('#ans-btn-5').prop('disabled', false);
    });

    $('#ans-btn-5').on('click', function () {

        if ($("#ans-5-2").is(":checked")) {
            ++count;
        }

        $('#quiz-5').hide();
        $('#quiz-6').show();
    });
}

function quiz6() {
    $('#ans-btn-6').prop('disabled', true);

    $('#ans-6-1').on('change', function () {
        $('#ans-btn-6').prop('disabled', false);
    });

    $('#ans-6-2').on('change', function () {
        $('#ans-btn-6').prop('disabled', false);
    });

    $('#ans-6-3').on('change', function () {
        $('#ans-btn-6').prop('disabled', false);
    });

    $('#ans-btn-6').on('click', function () {

        if ($("#ans-6-2").is(":checked")) {
            ++count;
        }

        $('#quiz-6').hide();
        $('#quiz-7').show();
    });
}

function quiz7() {
    $('#ans-btn-7').prop('disabled', true);

    $('#ans-7-1').on('change', function () {
        $('#ans-btn-7').prop('disabled', false);
    });

    $('#ans-7-2').on('change', function () {
        $('#ans-btn-7').prop('disabled', false);
    });

    $('#ans-7-3').on('change', function () {
        $('#ans-btn-7').prop('disabled', false);
    });

    $('#ans-btn-7').on('click', function () {

        if ($("#ans-7-2").is(":checked")) {
            ++count;
        }

        $('#quiz-7').hide();
        $('#quiz-8').show();
    });
}

function quiz8() {
    $('#ans-btn-8').prop('disabled', true);

    $('#ans-8-1').on('change', function () {
        $('#ans-btn-8').prop('disabled', false);
    });

    $('#ans-8-2').on('change', function () {
        $('#ans-btn-8').prop('disabled', false);
    });

    $('#ans-8-3').on('change', function () {
        $('#ans-btn-8').prop('disabled', false);
    });

    $('#ans-8-4').on('change', function () {
        $('#ans-btn-8').prop('disabled', false);
    });

    $('#ans-btn-8').on('click', function () {

        if ($("#ans-8-3").is(":checked")) {
            ++count;
        }

        $('#quiz-8').hide();
        $('#quiz-9').show();
    });
}

function quiz9() {
    $('#ans-btn-9').prop('disabled', true);

    $('#ans-9-1').on('change', function () {
        $('#ans-btn-9').prop('disabled', false);
    });

    $('#ans-9-2').on('change', function () {
        $('#ans-btn-9').prop('disabled', false);
    });

    $('#ans-9-3').on('change', function () {
        $('#ans-btn-9').prop('disabled', false);
    });

    $('#ans-9-4').on('change', function () {
        $('#ans-btn-9').prop('disabled', false);
    });

    $('#ans-btn-9').on('click', function () {

        if ($("#ans-9-4").is(":checked")) {
            ++count;
        }

        $('#quiz-9').hide();
        $('#quiz-10').show();
    });
}

function quiz10() {
    $('#ans-btn-10').prop('disabled', true);

    $('#ans-10-1').on('change', function () {
        $('#ans-btn-10').prop('disabled', false);
    });

    $('#ans-10-2').on('change', function () {
        $('#ans-btn-10').prop('disabled', false);
    });

    $('#ans-10-3').on('change', function () {
        $('#ans-btn-10').prop('disabled', false);
    });

    $('#ans-10-4').on('change', function () {
        $('#ans-btn-10').prop('disabled', false);
    });

    $('#ans-btn-10').on('click', function () {

        if ($("#ans-10-4").is(":checked")) {
            ++count;
        }

        $("#score").html(count);

        var avg = count/10;

        var nAvg = avg * 100;

        $("#avg").html(nAvg);

        if(count == 10)
        {
            $("#mes").html("Perfect!!!");
            $("#success-img").show();
        }

        else if(count > 7){
            $("#mes").html("You can be proud of yourself!");
        }

        else
        {
            $("#mes").html("You must study much harder!");
        }

        $('#quiz-10').hide();
        $('#scor').show();
    });
}