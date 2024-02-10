// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

//When you click the button on the Calculator page, it will get the values from the form, and check if the user entered a valid input. It will then display an error or a total.
$("#btnSubmit").click(function () {
    let hours = parseFloat($("#hours").val());
    let rate = parseFloat($("#rate").val());

    if (hours <= 0 || isNaN(hours)) {
        $("#output").html("Please enter a valid number of hours.");
    }
    else {
        let total = hours * rate;
        $("#output").html("$" + total.toString());
    }

})
