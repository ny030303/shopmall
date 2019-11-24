<?php
session_start();
// $dsn = "mysql:host=localhost;dbname=shopmall;charset=utf8mb4";
$dsn = "mysql:host=gondr.asuscomm.com;dbname=yy_10107;charset=utf8mb4";

$con = new PDO($dsn, "yy_10107", 'jj7323751');

function fetch($con, $sql, $param = []) {
    $q = $con->prepare($sql);
    $q->execute($param);

    return $q->fetch(PDO::FETCH_OBJ);
}

function fetchAll($con, $sql, $param = []) {
$q = $con->prepare($sql);
$q->execute($param);

return $q->fetchAll(PDO::FETCH_OBJ);
}

function execsql($con, $sql, $param = []) {
    $q = $con->prepare($sql);
    $result = $q->execute($param);

    return $result ? 1 : 0;
}