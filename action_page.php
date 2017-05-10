<?php
// define variables and set to empty values
$username = $password = "";
$usernameErr = $passwordErr = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (empty($_POST["uname"])) {
    $usernameErr = "Name is required";
  } else {
    $username = test_input($_POST["uname"]);
  }

  if (empty($_POST["psw"])) {
    $passwordErr = "Password is required";
  } else {
    $password = test_input($_POST["psw"]);
  }


function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
?>
