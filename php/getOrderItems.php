<?php

require("db.php");
header("Content-Type: application/json");

$uid = $_GET["uid"];

$sql = "select * from orderlist where userid = ?";
$data = fetchAll($con, $sql, [$uid]);

echo json_encode(array("data"=>$data));