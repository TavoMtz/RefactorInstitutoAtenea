<?php


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

session_start();

/*
if(isset($_POST["send"])){
    $mail = new PHPMailer(true);

    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'cmd.juan@gmail.com';
    $mail->Password = 'gaicfcfduzusaoqr';
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;
    $mail->setFrom('cmd.juan@gmail.com');

    $mail->addAddress($_POST["email"]);
    $mail->isHTML(true);
    $mail->Subject = $_POST["subject"];
    $mail->Body = $_POST["message"];

    $mail->send();

    echo
    "
    <script>
        alert('Send successfully');
        document.location.href = 'index.php';
    </script>
    ";*/

    if(isset($_POST["send"])){

        //Create an instance; passing `true` enables exceptions
        $mail = new PHPMailer(true);

        try {
            //Server settings
            $mail->isSMTP();                                            //Send using SMTP
            $mail->Host       = 'mail.fundacionatenea.com.mx';                     //Set the SMTP server to send through
            $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
            $mail->Username   = 'contacto@fundacionatenea.com.mx';                     //SMTP username
            $mail->Password   = '?8pyCN3egExw';                               //SMTP password
            //$mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
            $mail->Port       = 587;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

            //Recipients
            $mail->setFrom('contacto@fundacionatenea.com.mx', 'Contacto');
            $mail->addAddress('direccion@fundacionatenea.com.mx', 'Fundacion Atenea');     //Add a recipient

            //Content
            $mail->isHTML(true);                                  //Set email format to HTML
            $mail->Subject = 'Formulario enviado desde pagina Atenea';
            $mail->Body    = '<br><b>Alerta de contacto</b> <br><br>' .
                            '<p>La siguiente persona dejo sus datos</p>' .
                            '<p><b>Nombre</b>: ' . $_POST["nombreId"] . ' ' . $_POST["apellidoId"] . '</p>' . 
                            '<p><b>Correo</b>: ' . $_POST["correoId"] . '</p>' . 
                            '<p><b>Tel&eacute;fono</b>: ' . $_POST["telefonoId"] . '</p>' . 
                            '<p><b>Comentario</b>: ' . $_POST["comentarioId"]  . '</p>' ;
            $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

            $mail->send();

            $_SESSION['status'] = '<div class="alert alert-success alert-dismissible fade show mb-0" role="alert">  <strong>¡Tu solicitud ha sido enviada!</strong> En breve te contactaremos. <button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button> </div>';
            header('location: contacto.php');

        } catch (Exception $e) {
            echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        }

    }

?>