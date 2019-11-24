<?php

header("content-type: application/json");

require("db.php");
if(isset($_SESSION["loginUser"])) {
    echo json_encode(array("result" => 1, "users" => $_SESSION["loginUser"]));
} else {
    $id = isset($_GET["id"]) ? $_GET["id"] : " ";
    $pwd = isset($_GET["pwd"]) ? $_GET["pwd"] : " ";

    $sql = "SELECT * FROM `shopuser` WHERE id=? and pwd= PASSWORD(?)";

    $users = fetch($con, $sql, [$id, $pwd]);
    if ($users) {
        $_SESSION["loginUser"] = $users;
        echo json_encode(array("result" => 1, "users" => $users));
    } else {
        echo json_encode(array("result" => 0));
    }
}