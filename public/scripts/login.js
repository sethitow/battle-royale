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
    
    alert(groupName);
    
    fb.once("value", function(snapshot) {
        alert(snapshot);
        if (snapshot.child(groupName).exists()) {
            throwError("That room already exists.");
        } else {
            fb.child(groupName).set({
                password: groupPass,
                playing: false,
                startTime: getTime()
            });
        }
    });
    
    $("#loginEntry").fadeOut(400);
    $("#playerEntry").delay(400).fadeIn(400);
}

function submitPlayer() {
    
    fb.once("value", function(snapshot) {
        if (snapshot.child(groupName).child(playerName).exists()) {
            throwError("That player already exists.");
        } else {
            fb.child(groupName).child(playerName).set({
                password: groupPass
            });
        }
    });
}

$(document).ready(function() {
    
    $("#loginEntry").fadeOut(0);
    $("#playerEntry").fadeOut(0);

    $("#create").click(function() {
        action = "create";
        openLoginEntry();
    });
    
    $("#join").click(function() {
        action = "join";
        openLoginEntry();
    });
    
    $("#submit").click(function() {
        groupName = $("#gName").val();
        groupPass = $("#gPassword").val();
        submitGroup();
    });
    
    $("#enter").click(function() {
        playerName = $("#name").val();
        submitPlayer();
    });

});