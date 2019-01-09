<?php
// define variables and set to empty values



function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

function on_click() {

  $username = $password = "";
  $usernameErr = $passwordErr = "";

  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (empty($_POST["uname"])) {
      $usernameErr = "Name is required";
      echo $usernameErr;
    } else {
      $username = test_input($_POST["uname"]);
    }

    if (empty($_POST["psw"])) {
      $passwordErr = "Password is required";
      echo $passwordErr;
    } else {
      $password = test_input($_POST["psw"]);
    }
    $to_write = "$username <br> $password";
    $file = fopen("./excel_database.xlsx", "a+");
    fwrite($file, $to_write);
    fclose($file);
}
}

?>
