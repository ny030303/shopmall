<?php

require("db.php");
header("Content-Type: application/json");

$table = $_GET["table"];
$id = $_GET["id"];

$sql = "select * from " . $table;
$sql .= " where id = " . $id;
$data = fetchAll($con, $sql, []);

echo json_encode(array("data"=>$data));