<?php

require("db.php");
header("Content-Type: application/json");

$id = $_GET["id"];

$sql = " DELETE FROM `shopuser` WHERE id=?";

$result = execsql($con, $sql, [$id]);
if ($result) {
    echo json_encode(array("result" => 1));
} else {
    echo json_encode(array("result" => 0));
}
