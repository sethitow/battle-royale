// this function will get called by the killer client 
// it will change the 
// killerID will be the user's ID
// the killee will be the scanned ID


function processKill(killer, killee){

fb.child(groupName).child("players").child(killee).child("alive").set("false"); // change status of killee
var killeeTarget = fb.child(groupName).child("players").child(killee).child(target); // get target of killee
fb.child(groupName).child("players").child(killer).child(target).set(killeeTarget); // update target of killer

}

$('#Start').click(function(){
    var player = fb.child(groupName).child("players").child(playerName);
    //var player = "a";
    var target = player.child("target").val();
    var x = 'http://api.qrserver.com/v1/create-qr-code/?data=[' + player + ']&size=[150]x[150]'; //generates unique QR code based on name
    document.getElementById("QR").src = x; //updates blank image tag in html to display unique QR code generated above
    
    
});

$(document).ready(function () {

$("#killMode").fadeOut(0);

})

$("#killButton").click(function () {
    $("#normalPlayMode").fadeOut(400);
    $("#killMode").delay(410).fadeIn(400);
    });

function openNormalPlayMode() {
    $("#killMode").fadeOut(400);
    $("#normalPlayMode").delay(410).fadeIn(400);
}