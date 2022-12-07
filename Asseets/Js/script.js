$(document).ready(function () {
    validate();
});

$('#pharmacy').on('click', function(){
    window.location.href = "https://github.com/AM-ASKY-97/Laravel-Pharmacy-Management-System";
});

$('#hardy').on('click', function(){
    window.location.href = "https://github.com/AM-ASKY-97/Web-Base-Of-The-Particular-Institution";
});

$('#nic').on('click', function(){
    window.location.href = "https://github.com/AM-ASKY-97/Sri-Lanka-NIC-Calculator";
});

function validate() {
    $("#userName").click(function () {
        var name = $("#name").val();

        if (name == "") {
            $("#errorName").text("Please enter your name");
            $('#name').css('border', 'solid 1px red');
        }

        else {
            localStorage.setItem("myValue", name);
            window.location.href = "courses.html";
        }
    });
}

function myInput() {
    $("#errorName").text(" ");
    $('#name').css('border', 'solid 1px green');
}