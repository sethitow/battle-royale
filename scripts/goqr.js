$('#Run').click(function ()
{
    console.log("hello");
    var x = 'http://api.qrserver.com/v1/create-qr-code/?data=[URL-encoded-text]&size=[150]x[150]';
    $http.get(x).then(function (response){
        
    })
});