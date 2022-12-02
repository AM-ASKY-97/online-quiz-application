$(document).ready(function () {
    $("#userName").click(function () {
        var name = $("#name").val();

        if (name == "") {
            $("#errorName").text("Please enter your name");
        }

        else {
            localStorage.setItem("myValue", name);
            window.location.href = "courses.html";
        }
    });
});