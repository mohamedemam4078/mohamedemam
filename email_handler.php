<?php
if(isset($_POST['submit'])){
    $fname=$_POST["first_name"];
    $faname=$_POST["family_name"];
    $email=$_POST["email"];
    $msg=$_POST["message"];

    $to='mohamedemam4078@gmail.com';
    $subject='Form Submission';
    $message="Name : ".$fname."/n"."Family Name : ".$faname."/n"."From : ".$email."/n/n"."Message : ".$msg;

    if(mail($to, $subject, $message)){
        echo"<h1>Succesfully sent</h1>";
        }
        else{
            echo"sorry for that";
        }
}
?>