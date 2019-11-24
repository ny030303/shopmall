<?php

require("db.php");
header("Content-Type: application/json");

$uid = $_GET["uid"];


$sql = "select pid from heart where uid = ?";
$data = fetchAll($con, $sql, [$uid]);

echo json_encode(array("data" => $data));