$(function () {
    $("#home").click(function () {
        console.log("home clicked");
        $("#home").addClass("active");
        $("#view_attendees").removeClass("active");
    });
    $("#view_attendees").click(function () {
        console.log("attendees clicked");
        $("#view_attendees").addClass("active");
        $("#home").removeClass("active");
    });
});
