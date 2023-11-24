<?php
@$first_name = $_GET["first_name"];
@$family_name = $_GET["family_name"];
@$email = $_GET["email"];
@$message = $_GET["message"];
@$foundip = $_GET["foundip"];

@$f=fopen("logs.log" ,"a");
fwrite(@$f ,"name : ".@$first_name."\n");
fwrite(@$f ,"second name : ".@$family_name."\n");
fwrite(@$f ,"email : ".@$email."\n");
fwrite(@$f ,"message : ".@$message."\n");
fwrite(@$f ,"ip : ".@$foundip."\n");
fwrite(@$f ,"-----".@$hideed."\n");
fclose(@$f)
?>