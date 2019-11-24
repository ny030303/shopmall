<?php

require("db.php");
header("Content-Type: application/json");

$gender = $_GET["gender"];
$type = $_GET["type"];
$count = $_GET["count"];

$sql = "select * from " . $gender;
if( $type != 'all' ) {
    $sql .= " where type = " . $type;
}
$sql .= " order by ulike desc limit " . $count;
$data = fetchAll($con, $sql, []);

echo json_encode(array("data"=>$data));