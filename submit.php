<?php
    $data = "";
    if (isset($_POST['name'])) {
        $data += $_POST['name'];
    }
    if (isset($_POST['email'])) {
        $data += " " + $_POST['email'];
    }
    if (isset($_POST['genre'])) {
        $data += " " + $_POST['genre'];
    }
    if (isset($_POST['title'])) {
        $data += " " + $_POST['title'];
    }
    if (isset($_POST['artist'])) {
        $data += " " + $_POST['artist'];
    }
    // $data = $_POST['name'] + " " + $_POST['email'] + " " + $_POST['genre'] + " " + $_POST['title'] + " " + $_POST['artist'];

    $file = "data/songrecs.txt";
    $fh = fopen($file, 'w') or die("can't open file");
    fwrite($fh, $data) or die ("something went wrong");
    fclose($fh);
?>