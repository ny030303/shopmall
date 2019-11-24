<?php

require("db.php");
header("Content-Type: application/json");

$gender = $_GET["gender"];
$type = $_GET["type"];

$sql = "select * from denim where gender = '" . $gender . "' and type = " . $type;
$data = fetchAll($con, $sql, []);

echo json_encode(array("data"=>$data));