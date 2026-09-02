<?php
session_start();

if(isset($_POST["credenciales"])) {
    $usuario = $_POST["usuarioId"];
    $pass = $_POST["passwordId"];

    if($usuario == '' && $pass == '') {
        $_SESSION['status'] = '<div class="alert alert-danger alert-dismissible fade show mb-4">...</div>';
    } else if($usuario == 'USUARIO_AQUI' && $pass == 'PASSWORD_AQUI') {
        $_SESSION['mostrarBiblioteca'] = true;
    } else {
        $_SESSION['status'] = '<div class="alert alert-danger alert-dismissible fade show mb-4">...</div>';
        $_SESSION['mostrarBiblioteca'] = false;
    }
    header('location: biblioteca.php');
}
?>