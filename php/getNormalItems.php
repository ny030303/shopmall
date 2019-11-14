<?php

require("db.php");
header("Content-Type: application/json");

$gender = $_GET["gender"];
$type = $_GET["type"];

$sql = "select * from " . $gender;
if( $type != 'all' ) {
    $sql .= " where type = " . $type;
}
$data = fetchAll($con, $sql, []);

echo json_encode(array("data"=>$data));