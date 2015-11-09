<?php

header('Access-Control-Allow-Origin: *');

$url = 'http://api.qrserver.com/v1/read-qr-code/';
$ch = curl_init($url);

echo $HTTP_RAW_POST_DATA;

curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $HTTP_RAW_POST_DATA);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
echo $response;
curl_close($ch);