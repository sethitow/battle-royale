<?php

header('Access-Control-Allow-Origin: *');
require_once 'src/autoload.php';
$identicon = new \Identicon\Identicon();
$playerName = $_GET['name'];
$imageDataUri = $identicon->getImageDataUri($playerName);
echo $imageDataUri;