$('#Run').click(function (){
    console.log("hello");
    var b = $('#Content').val();
    var x = 'http://api.qrserver.com/v1/create-qr-code/?data=[' + b + ']&size=[150]x[150]';
    console.log(x);
    document.getElementById("results").src = x;
    $http.get(x).then(function (response) {
    });
});