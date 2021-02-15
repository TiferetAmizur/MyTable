<?php 

$arr = array();
for ($i = 0; $i < 20; $i++) {
    $arr[$i][0] = $i;
    $arr[$i][1] = $i*2;
}

$arr = json_encode($arr);
die($arr);
?>

