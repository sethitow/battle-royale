// this function will get called by the killer client 
// it will change the 
// killerID will be the user's ID
// the killee will be the scanned ID


function processKill(killer, killee){
var GROUP_ID = getParam("group");

fb.child(GROUP_ID).child(players).child(killee).child(alive).set("false"); // change status of killee
var killeeTarget = fb.child(GROUP_ID).child(players).child(killee).child(target); // get target of killee
fb.child(GROUP_ID).child(players).child(killee).child(killlee).set(killeeTarget); // update target of killer

}

function getParam(name) {
	
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}


$('#lp')












































var parentAssassin = {
    constructor: function fn0(value){
        this._name = value;
    }
    get: function fn(){
        return this._name;
    },
     ;
    killer = null;
};

var childAssassin = Object.create(parentAssassin);
childAssassin.constructor(fb.child(GROUP_ID))