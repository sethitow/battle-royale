var action = "";

function openLogin(currentAction) {
    action = currentAction;
    $("#loginBox").slideDown();
}

$(document).ready(function() {
    
    $("#loginBox").slideUp(0);

    $("#create").click(function() {
        openLogin("create");
    });
    
    $("#join").click(function() {
        openLogin("join");
    });

}