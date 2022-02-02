<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");
header('Content-Type: application/json; charset=utf-8');

$listeTechnologieJson = file_get_contents("liste-technologie.json");

if(strlen($listeTechnologieJson) > 0){
  $listeTechnologie = json_decode($listeTechnologieJson);
  echo json_encode($listeTechnologie);
}else{
  echo json_encode([]);
}