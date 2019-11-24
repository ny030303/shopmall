<?php

header("content-type: application/json");

require("db.php");

unset($_SESSION["loginUser"]);

echo json_encode(array("result"=>1));