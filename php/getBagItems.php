<?php

require("db.php");
header("Content-Type: application/json");

$type = $_GET["type"];

$sql = "select * from bag where type = " . $type;
$data = fetchAll($con, $sql, []);

echo json_encode(array("data"=>$data));