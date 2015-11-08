<?php

header('Access-Control-Allow-Origin: *');
$entityBody = file_get_contents('php://input');
$relayPost = new HttpRequest('https://api.qrserver.com/v1/read-qr-code/', HttpRequest::METH_POST);
$relayPost->addPostFile('image', $entityBody, 'image/jpeg');

try {
    echo $relayPost->send()->getBody();
} catch (HttpException $ex) {
    echo $ex;
}