<?php

header('Access-Control-Allow-Origin: *');
$postData = file_get_contents('php://input');

$url = 'http://api.qrserver.com/v1/read-qr-code/';
$ch = curl_init($url);

curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $postData);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
echo $response;
curl_close($ch);