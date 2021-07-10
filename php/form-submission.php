<?php

    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];

    $email_from = 'Joana Paula Portfolio';
    
    $email_subject = 'New contact via portfolio';

    $email_body = "Nome: $name . \n" . "E-mail: $visitor_email . \n" . "Mensagem: $message";

    $to = "contact@joanapaulasoliveira.com";

    $headers = "From: $email_from \r\n";

    $headers .= "Respond to: $visitor_email \r\n";

    mail($to, $email_subject, $email_body, $headers);
    
    header("Location: index.html");

    die();

?>