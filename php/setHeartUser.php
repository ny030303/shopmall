<?php

header('Content-Type: application/json');

require("db.php");

$check = $_POST["check"];
$uid = $_POST["uid"];
$pid = $_POST["pid"];

if( $check == "true" ) {
    $table = array("women", "men", "denim", "denim", "bag");
    $updateQuery =  "update ". $table[floor($pid / 10000) - 1]. " set ulike = ulike + 1 where id = " . $pid;
    $bUpdate = execsql($con, $updateQuery, []);

    $query = "INSERT INTO `heart`(`uid`, `pid`) VALUES (?,?)";
}
else {
    $query = "DELETE FROM `heart` where `uid` = ? and `pid` = ?";
}
$bInserted = execsql($con, $query , [$uid,$pid]);
echo json_encode(array("result"=>$bInserted));
