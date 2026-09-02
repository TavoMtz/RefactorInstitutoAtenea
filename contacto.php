<?php
    session_start();
?>

<html>

<head>

    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="Fundación Atenea tiene como objetivo impulsar, fortalecer y difundir los estudios de nuestra especialidad: Filosofía, Bioética Latinoamericana y Ciencias Humanas, en vistas a promover en el medio social la formación, la investigación, la promoción y la creación de redes, para desarrollar y afianzar estas disciplinas a nivel nacional e internacional.">
    <meta name="keywords" content="universidad, universidad puebla, escuela, escuela de educación superior, 
            escuela de educación superior puebla, educación, educación superior, educación superior puebla, diplomados, 
            diplomados puebla, cursos, cursos puebla, posgrados, posgrados puebla, puebla, filosofia, filosofía, filosofia puebla, 
            fundacion, fundación, fundacion atenea, fundación atenea, fundacion atenea puebla, fundación atenea puebla, 
            bioetica latinoamericana, bioetica latinoamericana puebla, ciencias humanas, ciencias humanas puebla, centro integrarte,
            centro integrarte puebla, centro investigaciones, centro investigaciones filosóficas, centro estudios, centro de estudios
            de género, centro de estudios de género puebla, editorial, editorial atenea, editorial atenea puebla, revista buho de 
            minerva, revista buho de minerva puebla, historieta, historieta dr. calmita, historieta dr. calmita puebla">
    <title>Fundación Atenea Puebla</title>

    <link
        href='https://fonts.googleapis.com/css?family=Montserrat:thin,extra-light,light,100,200,300,400,500,600,700,800'
        rel='stylesheet' type='text/css'>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-validator/0.5.3/css/bootstrapValidator.min.css"/>
    <link rel="stylesheet" href="css/fundacionAtenea.css">
    <link rel="shortcut icon" href="favicon/favicon.ico">

</head>

<body>

    <?php include 'section/headerBlanco.php';?>

    <section class="seccion-contacto-principal">
        <div class="container">

            <div class="row justify-content-left">
                <div class="col-md-8 pl-5 fatenea-contacto-margin-hero">

                    <?php
                        if(isset($_SESSION['status'])) {
                            echo $_SESSION['status'];
                            unset($_SESSION['status']);
                        }
                    ?>

                    <h1 class="display-4 pb-4 fatenea-contacto-text fatenea-a-blanco">
                        <span>Contáctanos</span>
                    </h1>

                    <form id="formContacto" action="sender.php" method="post">
                        <div class="form-row pb-3 fatenea-contacto-padding">
                            <div class="form-group col-md-6 col-sm-6 pr-3">
                                <input type="text" class="form-control form-control-sm fatenea-contacto-control" name="nombreId" id="nombreId" placeholder="Nombre">
                            </div>
                            <div class="form-group col-md-6 col-sm-6 pr-3">
                                <input type="text" class="form-control form-control-sm fatenea-contacto-control" name="apellidoId" id="apellidoId" placeholder="Apellido">
                            </div>
                        </div>

                        <div class="form-row pb-3 fatenea-contacto-padding">
                            <div class="form-group col-md-6 col-sm-6 pr-3">
                                <input type="email" class="form-control form-control-sm fatenea-contacto-control" name="correoId" id="correoId" placeholder="Correo">
                            </div>
                            <div class="form-group col-md-6 col-sm-6 pr-3">
                                <input type="text" class="form-control form-control-sm fatenea-contacto-control" name="telefonoId" id="telefonoId" placeholder="Teléfono">
                            </div>
                        </div>

                        <div class="form-row pb-3 fatenea-contacto-padding">
                            <div class="form-group col-md-12 col-sm-12 pr-3 mb-2">
                                <textarea class="form-control form-control-sm fatenea-contacto-control fatenea-contacto-textarea-rows" name="comentarioId" id="comentarioId" rows="6" 
                                    placeholder="Comentario"></textarea>
                            </div>
                        </div>

                        <button type="submit" name="send" class="btn btn-generic-fatenea fatenea-contacto-button-enviar">Enviar</button>
                    
                    </form>

                </div>
            </div>

        </div>
    </section>

    <?php include 'section/whatsappButton.php';?>

    <?php include 'section/footer.php';?>
    
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"
        integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.js"
        integrity="sha512-ZKNVEa7gi0Dz4Rq9jXcySgcPiK+5f01CqW+ZoKLLKr9VMXuCsw3RjWiv8ZpIOa0hxO79np7Ec8DDWALM0bDOaQ=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-validator/0.5.3/js/bootstrapValidator.js"></script>

    <script src="js/general-fundacionAtenea.js"></script>
    <script src="js/contacto.js"></script>

    <script>
        document.addEventListener('DOMContentLoaded', function (e) {

            /* Se pinta borde en header después de entrar a la página */
            $("#btnContacto").addClass("btn-nav-fatenea-border btn-nav-fatenea-cborder");

            //indicamos el header que se va a mostrar
            showHeader("General");

        });
    </script>

</body>

</html>