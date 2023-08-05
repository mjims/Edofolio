<?php
$correctPassword = "PO@47a";
$mdpuserPAd = $_POST["password"];
if ($mdpuserPAd === $correctPassword) {
    $scc="success";
    echo json_encode($scc);
} else {
    echo json_encode($mdpuserPAd);
}
?>
