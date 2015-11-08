// this function will get called by the killer client 
// it will change the 
// killerID will be the user's ID
// the killee will be the scanned ID


function processKill(killer, killee){

fb.child(groupName).child("players").child(killee).child("alive").set("false"); // change status of killee
var killeeTarget = fb.child(groupName).child("players").child(killee).child(target); // get target of killee
fb.child(groupName).child("players").child(killer).child(target).set(killeeTarget); // update target of killer

}

$('#picture').change(function(){
var input = document.getElementById('picture');

console.log(input);

file = input.files[0];
fr = new FileReader();
fr.onload = function postStuff(){
picture = fr.result;

console.log(picture);

var formData = new FormData();

var blob = new Blob([picture], { type: "image/jpeg"});

formData.append("file", blob);

$.ajax({
            type: "POST",
            url: "http://whattoeatuw.com/relay.php",
            enctype: 'multipart/form-data',
            data: formData,
            processData: false, // Don't process the files
        	contentType: false, //
            success: function (data) {
               console.log(data);
            }
        });

}


//fr.readAsText(file);
//fr.readAsDataURL(file);
fr.readAsBinaryString(file);

});



$(document).ready(function () {
	
	$("#killSuccessfull").fadeOut(0);
	$("#killFailure").fadeOut(0);
	
	groupName = localStorage.getItem("groupName");
	playerName = localStorage.getItem("playerName");
	alert(groupName+playerName);
	
	console.log(groupName);
	
	fb.once("value", function(snapshot) {
		var targetName = snapshot.child(groupName).child("players").child(playerName).child("target").val();
		$("#targetName").append("Your target: " + targetName);
	});
	
    var x = 'http://api.qrserver.com/v1/create-qr-code/?data=[a]&size=[150]x[150]'; //generates unique QR code based on name
    document.getElementById("QR").src = x; //updates blank image tag in html to display unique QR code generated above
    

})



