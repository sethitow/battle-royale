<?php

header('Access-Control-Allow-Origin: *');

$url = 'http://api.qrserver.com/v1/read-qr-code/';
$ch = curl_init($url);

curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt(
    $request,
    CURLOPT_POSTFIELDS,
    array(
      'file' =>
          '@'            . $_FILES['file']['tmp_name']
          . ';filename=' . $_FILES['file']['name']
    ));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
echo $response;
curl_close($ch);