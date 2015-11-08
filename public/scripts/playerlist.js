$(document).ready(function () {
var GROUP_ID = getParam("group");

var numberOfPlayers = fb.child(GROUP_ID).child(players).length;

for(i = 0; i => numberOfPlayers; i++){

//do something for each player

}

});

function getParam(name) {
	
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}