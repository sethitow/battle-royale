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
    var target = player.child("target").val();
    var x = 'http://api.qrserver.com/v1/create-qr-code/?data=[' + player + ']&size=[150]x[150]'; //generates unique QR code based on name
    document.getElementById("QR").src = x; //updates blank image tag in html to display unique QR code generated above
    
    
});