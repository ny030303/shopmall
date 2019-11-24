<?php

header('Content-Type: application/json');

require("db.php");

$oid = $_POST["oid"];
$uid = $_POST["uid"];
$buyitems = $_POST["buyitems"];

$query = "INSERT INTO `orderlist`(`orderid`, `userid`, `buyitems`, `buytime`) VALUES (?,?,?,now())";

$bInserted = execsql($con, $query , [$oid,$uid,$buyitems]);
echo json_encode(array("result"=>$bInserted));
