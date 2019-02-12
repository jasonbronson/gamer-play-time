<?php


$name = $_POST['name'];
$email = $_POST['email'];
$comments = $_POST['comments'];

mail("jasonbronson+gamerplaytime@gmail.com", "gamerplaytime signup", "$name, $email, $comments");

error_log("Recording $name");
echo json_encode("Check your email for further details");
