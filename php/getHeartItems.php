<?php

require("db.php");
header("Content-Type: application/json");

$uid = $_GET["uid"];

$sql = "SELECT pid FROM heart where uid = ?";
$tmpData = fetchAll($con, $sql, [$uid]);

$pids = null;
foreach ($tmpData as $value) {
    if ($pids == null) $pids = $value->pid;
    else $pids = $pids . "," . $value->pid;
}

if( $pids ) {
    $sql2 = "
        select * from women where id in (" . $pids .") union
        select * from men where id in (" . $pids .") union
        select * from bag where id in (" . $pids .") union 
        select `id`,`type`,`title`,`price`,`oldprice`,`colors`,`ulike`,`img1`,`img2` 
	    from denim where id in (" . $pids .")";
    $data = fetchAll($con, $sql2, []);
    echo json_encode(array("data"=>$data));
}
else {
    echo json_encode(array("data"=>[]));
}
