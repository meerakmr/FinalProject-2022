<?php
if (isset($_POST['submit'])) {
    $current = file_get_contents("songrecs.txt");
    $current .= "HELLO PLEASE WORK";
    file_put_contents("songrecs.txt", $current);
}
    // extract($_REQUEST);
    // $file = fopen("songrecs.txt", "a");

    // fwrite($file, $name . " ");
    // fwrite($file, $email . " ");
    // fclose($file);
    
    // if(isset($_POST['submit'])) {
    // $data = "";
    // if (isset($_POST['name'])) {
    //     $data = $data . $_POST['name'];
    // }
    // if (isset($_POST['email'])) {
    //     $data = $data . " " . $_POST['email'];
    // }
    // if (isset($_POST['genre'])) {
    //     $data = $data . " " . $_POST['genre'];
    // }
    // if (isset($_POST['title'])) {
    //     $data = $data . " " . $_POST['title'];
    // }
    // if (isset($_POST['artist'])) {
    //     $data = $data . " " . $_POST['artist'];
    // }

    // if ($data == "") {die('no post data to process');}

    // // $ret = file_put_contents('songrecs.txt', $data, FILE_APPEND | LOCK_EX);
    // // if($ret === false) {
    // //     die('There was an error writing this file');
    // // }
    // // else {
    // //     echo "$ret bytes written to file";
    // // }

    // // $data = $_POST['name'] . " " . $_POST['email'] . " " . $_POST['genre'] . " " . $_POST['title'] . " " . $_POST['artist'];

    // // $file = "data/songrecs.txt";
    // // $fh = fopen($file, 'w') or die("can't open file");
    // // fwrite($fh, $data) or die ("something went wrong");
    // // fclose($fh);
    // $file=fopen("songrecs.txt", "a");
    // fwrite($file, $data);
    // fclose($file);
    // }
?>