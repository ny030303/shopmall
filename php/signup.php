<?php

header('Content-Type: application/json');

require("db.php");

$name = $_POST["name"];
$birthday = $_POST["birthday"];
$phone = $_POST["phone"];
$id = $_POST["id"];
$pwd = $_POST["pwd"];
$bRes = null;
if( isset($_SESSION["loginUser"])) {
    $query = "UPDATE `shopuser` set `name` = ?, `birthday` = ?, `phone` = ? , `pwd` = password(?) where id = ?";
    $bRes = execsql($con, $query , [$name,$birthday,$phone,$pwd,$id]);
}
else {
    $query = "INSERT INTO `shopuser`(`name`, `birthday`, `phone`, `id`,`pwd`) VALUES (?,?,?,?,password(?))";
    $bRes = execsql($con, $query , [$name,$birthday,$phone,$id,$pwd]);
}
echo json_encode(array("result"=>$bRes));

?>