$(document).ready(function(){
    $('#quiz-2, #quiz-3, #quiz-4, #quiz-5, #quiz-6, #quiz-7, #quiz-8, #quiz-9, #quiz-10, #scor').hide();

    $('.total-quiz').html('10');
});

$('#ans-btn-1').on('click', function(){
    $('#quiz-1').hide();
    $('#quiz-2').show();
    $('.back-btn').hide();
});

$('#ans-btn-2').on('click', function(){
    $('#quiz-2').hide();
    $('#quiz-3').show();
});

$('#ans-btn-3').on('click', function(){
    $('#quiz-3').hide();
    $('#quiz-4').show();
});

$('#ans-btn-4').on('click', function(){
    $('#quiz-4').hide();
    $('#quiz-5').show();
});

$('#ans-btn-5').on('click', function(){
    $('#quiz-5').hide();
    $('#quiz-6').show();
});

$('#ans-btn-6').on('click', function(){
    $('#quiz-6').hide();
    $('#quiz-7').show();
});

$('#ans-btn-7').on('click', function(){
    $('#quiz-7').hide();
    $('#quiz-8').show();
});

$('#ans-btn-8').on('click', function(){
    $('#quiz-8').hide();
    $('#quiz-9').show();
});

$('#ans-btn-9').on('click', function(){
    $('#quiz-9').hide();
    $('#quiz-10').show();
});