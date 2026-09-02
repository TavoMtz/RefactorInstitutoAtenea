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
    <link rel="stylesheet" href="css/fundacionAtenea.css">
    <link rel="shortcut icon" href="favicon/favicon.ico">

</head>

<body>

    <?php include 'section/headerAzul.php';?>

    <section class="fatenea-background-banner-blue">
        <div class="container" style="margin-top: 0rem!important;">
            <div class="row justify-content-center">
                <div class="col-12 text-center">
                    <div class="biblioteca-margin-hero-title biblioteca-titulo-margin">
                        <display>
                            <h4 class="fatenea-a-blanco biblioteca-titulo-size">
                                Biblioteca del Instituto Atenea de Estudios Superiores e Investigación
                            </h4>
                        </display>
                    </div>
                </div>
            </div>
        </div>
    </section>

<?php
    $mostrarBiblioteca = false;
    if(isset($_SESSION['mostrarBiblioteca'])) {
        $mostrarBiblioteca = $_SESSION['mostrarBiblioteca'];
    }
    if(!$mostrarBiblioteca) {
?>

    <section id="loginId" class="my-5">
        <div class="container">

            <div class="row justify-content-center">
                <div class="col-md-8">

                    <?php
                        if(isset($_SESSION['status'])) { // isset se usa para validar que la variable exista
                            echo $_SESSION['status'];
                            unset($_SESSION['status']); // para remover variable de session
                        }
                    ?>

                    <h1 class="text-center pb-4 fatenea-credenciales-text fatenea-a-gris">
                        <span>Ingresa credenciales</span>
                    </h1>

                    <form id="formBiblioteca" action="credenciales.php" method="post" class="text-center">
                        <div class="form-row pb-3 fatenea-contacto-padding">
                            <div class="form-group col-md-6 col-sm-6 pr-3">
                                <input type="text" class="form-control form-control fatenea-contacto-control" name="usuarioId" id="usuarioId" placeholder="Usuario">
                            </div>
                            <div class="form-group col-md-6 col-sm-6 pr-3">
                                <input type="password" class="form-control form-control fatenea-contacto-control" name="passwordId" id="passwordId" placeholder="Contraseña">
                            </div>
                        </div>

                        <button type="submit" name="credenciales" class="btn btn-generic-fatenea fatenea-contacto-button-enviar">Enviar</button>
                    
                    </form>

                </div>
            </div>

        </div>
    </section>
<?php
    } else {
?>    
    <section id="bibliotecaId" class="fatenea-background-banner-gray">
        <div class="container">

            <div class="row">
                <div class="col-12">

                    <div class="biblioteca-margin-hero mt-4">

                        <div class="row mb-4">

                            <div class="col-md-6">
                                <h5 class="biblioteca-libros-encontrados fatenea-a-negro" 
                                style="margin-botton: 0rem !important; margin-top: 0.4rem !important ">
                                    Libros encontrados: <span class="fatenea-a-azul" id="accountBooks"></span>
                                </h5>
                            </div>

                            <div class="col-md-6">

                                <div class="input-group">
                                    <input id="busquedaId" type="text" class="form-control" placeholder="Busqueda por título/autor/año">
                                    <div class="input-group-append">
                                        <button id="botonBusqueda" class="btn btn-secondary" type="button">
                                            <i class="fa fa-search"></i>
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>


                        <div class="card-content card-content-biblioteca">

                            <!-- <div class="row">
                                <div class="col-3">
                                    
                                    <div class="card biblioteca-libros-card">
                                        <img class="card-img-top biblioteca-card-image mx-auto mt-4" src="img/prueba-libro.jpg" alt="Card image cap">
                                        <div class="card-body">
                                            <h6 class="card-title biblioteca-card-title fatenea-a-negro">Teorías del aprendizaje. Sustento filosófico y aplicación en el aula</h6>
                                            <h6 class="biblioteca-card-author fatenea-a-azul font-italic">Castor Alejandro Jiménez Gutiérrez</h6>
                                            <h6 class="biblioteca-card-year fatenea-a-azul font-italic">(2020)</h6>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-3">

                                    <div class="card biblioteca-libros-card">
                                        <img class="card-img-top biblioteca-card-image mx-auto mt-4" src="img/image-no-disponible.jpg" alt="Card image cap">
                                        <div class="card-body">
                                            <h6 class="card-title biblioteca-card-title fatenea-a-negro">Los impulsores correctos para el éxito de todo el sistema</h6>
                                            <h6 class="biblioteca-card-author fatenea-a-azul font-italic">Michael Fullan</h6>
                                            <h6 class="biblioteca-card-year fatenea-a-azul font-italic">(2021)</h6> 
                                        </div>
                                    </div>

                                </div>
                                <div class="col-3">

                                    <div class="card biblioteca-libros-card">
                                        <img class="card-img-top biblioteca-card-image mx-auto mt-4" src="img/image-no-disponible.jpg" alt="Card image cap">
                                        <div class="card-body">
                                            <h6 class="card-title biblioteca-card-title fatenea-a-negro">Filosofía de educación</h6>
                                            <h6 class="biblioteca-card-author fatenea-a-azul font-italic">Godina</h6>
                                            <h6 class="biblioteca-card-year fatenea-a-azul font-italic">(2024)</h6>
                                        </div>
                                    </div>

                                </div>
                                <div class="col-3">

                                    <div class="card biblioteca-libros-card">
                                        <img class="card-img-top biblioteca-card-image mx-auto mt-4" src="img/image-no-disponible.jpg" alt="Card image cap">
                                        <div class="card-body">
                                            <h6 class="card-title biblioteca-card-title fatenea-a-negro">Escritos sobre educación y filosofía</h6>
                                            <h6 class="biblioteca-card-author fatenea-a-azul font-italic">Herbert Marcuse</h6>
                                            <h6 class="biblioteca-card-year fatenea-a-azul font-italic">(2020)</h6>
                                        </div>
                                    </div>

                                </div>
                            </div> -->

                        </div>

                    </div>

                    <div class="row mt-3">
                        <div class="col-12">

                            <nav aria-label="Page navigation example">
                                <ul class="pagination justify-content-center">
                                    <!-- <li class="page-item previous-page disable"><a class="page-link" href="#">Previous</a></li>
                                    <li class="page-item current-page activePage"><a class="page-link" href="#">1</a></li>
                                    <li class="page-item dots"><a class="page-link" href="#">...</a></li>
                                    <li class="page-item current-page"><a class="page-link" href="#">2</a></li>
                                    <li class="page-item dots"><a class="page-link" href="#">...</a></li>
                                    <li class="page-item current-page"><a class="page-link" href="#">3</a></li>
                                    <li class="page-item next-page"><a class="page-link" href="#">Next</a></li> -->
                                </ul>
                            </nav>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    </section>

<?php
    }
    unset($_SESSION['mostrarBiblioteca']);
    session_destroy();
?>

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

    <script src="js/general-fundacionAtenea.js"></script>
    <script src="js/manejador-libros.js"></script>

    <script>
        document.addEventListener('DOMContentLoaded', function (e) {

            /* Se pinta borde en header después de entrar a la página */
            $("#btnBiblioteca").addClass("btn-nav-fatenea-border btn-nav-fatenea-cborder");

            $("#navbar-general").addClass("navbar-biblioteca");

            //indicamos el header que se va a mostrar
            showHeader("General");

        });
    </script>

</body>

</html>