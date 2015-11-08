var action = "";
var groupName = "";
var groupPass = "";
var playerName = "";

function throwError(message) {
    alert(message);
}

function openLoginEntry() {
    $("#actionEntry").fadeOut(400);
    $("#loginEntry").delay(400).fadeIn(400);
}

function submitGroup() {

    fb.once("value", function (snapshot) {

        if (action == "create") {

            if (snapshot.child(groupName).exists()) {
                throwError("That room already exists.");
            } else {
                var now = new Date().getTime() / 1000;
                fb.child(groupName).set({
                    password: groupPass,
                    playing: false,
                    startTime: now
                });
                $("#loginEntry").fadeOut(400);
                $("#playerEntry").delay(400).fadeIn(400);
            }

        } else if (action == "join") {

            if (snapshot.child(groupName).exists()) {
                if (snapshot.child(groupName).child("password").val() == groupPass) {
                    $("#loginEntry").fadeOut(400);
                    $("#playerEntry").delay(400).fadeIn(400);
                } else {
                    throwError("Incorrect password.");
                }
            } else {
                throwError("That room doesn't exist.");
            }

        }

    });

}

function submitPlayer() {

    fb.once("value", function (snapshot) {
        if (snapshot.child(groupName).child("players").child(playerName).exists()) {
            throwError("That player already exists.");
        } else {
            fb.child(groupName).child(playerName).child("players").set({
                alive: true,
                playing: true,
                powerups: {
                    stalkerVision: false
                }
            });
        }
    });

}

$(document).ready(function () {

    $("#loginEntry").fadeOut(0);
    $("#playerEntry").fadeOut(0);

    $("#create").click(function () {
        action = "create";
        $("#submit").html("Create");
        openLoginEntry();
    });

    $("#join").click(function () {
        action = "join";
        $("#submit").html("Join");
        openLoginEntry();
    });

    $("#submit").click(function () {
        groupName = $("#gName").val();
        groupPass = $("#gPassword").val();
        submitGroup();
    });

    $("#enter").click(function () {
        playerName = $("#name").val();
        submitPlayer();
    });
    
    $("#loginBack").click(function () {
        $("#loginEntry").fadeOut(400);
        $("#actionEntry").delay(400).fadeIn(400);
    });
    
    $("#playerBack").click(function () {
        $("#playerEntry").fadeOut(400);
        $("#loginEntry").delay(400).fadeIn(400);
    });

});