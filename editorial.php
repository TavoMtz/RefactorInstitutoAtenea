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

    <link href='https://fonts.googleapis.com/css?family=Montserrat:thin,extra-light,light,100,200,300,400,500,600,700,800' 
        rel='stylesheet' type='text/css'>
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
    <link rel="stylesheet" href="css/fundacionAtenea.css">
    <link rel="shortcut icon" href="favicon/favicon.ico">

</head>

<body>

    <?php include 'section/headerAzulFA.php';?>

    <section class="seccion-editorial-principal">
        <div class="container">

            <div class="row">
                <div class="col-md-5 fatenea-editorial-margin fatenea-editorial-col">
                    
                </div>
                <div class="col-md-7 pl-5 fatenea-editorial-margin fatenea-editorial-margin-left">
                    <div class="row justify-content-center align-items-center pb-3 fatenea-flex-column"> 
                        <div class="col fatenea-text-justify">
                            <img class="py-2 px-2 rounded-circle fatenea-editorial-rounded-circle" src="img/editorial-logo.jpg"
                                    alt="Editorial">
                        </div>
                    </div>
                    <h1 class="display-4 pb-4 fatenea-editorial-primario text-center"> 
                        <span>Editorial Fundación Atenea</span>
                    </h1>
                </div>                    
            </div>

        </div>
    </section>

    <section class="fatenea-background-banner-gray py-5">

        <div class="container">

            <div class="row justify-content-center fatenea-editorial-libro-1">
                <div class="col-md-10 text-center my-5 fatenas-cuadrado-text">
                    <h3 class="px-5 py-5 fatenea-editorial-bienvenida">
                        <span><strong>Bienvenidos a la sección de publicaciones de nuestra editorial. Aquí encontrarán libros 
                            y materiales académicos en formato digital, resultado de una labor editorial comprometida 
                            con el pensamiento crítico, la ética, la educación humanista y el cuidado del planeta. 
                            Todas nuestras publicaciones son de libre acceso, promoviendo el conocimiento como bien común.
                        </strong></span>
                    </h3>
                </div>
            </div>

        </div>

    </section>

    <section class="fatenea-background-banner-blue pt-5">

        <div class="container">

            <div class="row">

                <div class="col-12 text-center fatenea-editorial-libro-2">
                    <h1 class="my-5 fatenea-catalogos fatenea-a-blanco"><strong>Catálogo por áreas de conocimiento</strong></h1>

                    <section id="bibliotecaFilosofiaId" class="fatenea-background-banner-blue">
                        <div class="container">

                            <h2 class="mt-5 fatenea-catalogos text-left fatenea-a-blanco"><strong><ins>Filosofía</ins></strong></h2>

                            <div class="row">
                                <div class="col-12">

                                    <div class="biblioteca-margin-hero mt-4">

                                        <div class="row mb-4">

                                            <div class="col-md-6 text-left">
                                                <h5 class="biblioteca-libros-encontrados fatenea-a-blanco" 
                                                style="margin-botton: 0rem !important; margin-top: 0.4rem !important ">
                                                    Libros encontrados: <span class="fatenea-a-blanco" id="accountFilosofiaBooks"></span>
                                                </h5>
                                            </div>

                                            <div class="col-md-6">

                                                <div id="divBusquedaFilosofia" class="input-group d-none">
                                                    <input id="busquedaFilosofiaId" type="text" class="form-control" placeholder="Busqueda por título/autor/año">
                                                    <div class="input-group-append">
                                                        <button id="botonBusquedaFilosofia" class="btn btn-secondary" type="button">
                                                            <i class="fa fa-search"></i>
                                                        </button>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>


                                        <div class="card-content-filosofia card-content-filosofia-biblioteca">
                                        </div>

                                    </div>

                                    <div class="row mt-3">
                                        <div class="col-12">

                                            <nav aria-label="Page navigation example">
                                                <ul class="pagination pagination-filosofia justify-content-center">
                                                </ul>
                                            </nav>

                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </section>


                    <section id="bibliotecaBioEcoId" class="fatenea-background-banner-blue">
                        <div class="container">

                            <h2 class="mt-4 fatenea-catalogos text-left fatenea-a-blanco"><strong><ins>Bioética y Ecosofía</ins></strong></h2>

                            <div class="row">
                                <div class="col-12">

                                    <div class="biblioteca-margin-hero mt-4">

                                        <div class="row mb-4">

                                            <div class="col-md-6 text-left">
                                                <h5 class="biblioteca-libros-encontrados fatenea-a-blanco" 
                                                style="margin-botton: 0rem !important; margin-top: 0.4rem !important ">
                                                    Libros encontrados: <span class="fatenea-a-blanco" id="accountBioEcoBooks"></span>
                                                </h5>
                                            </div>

                                            <div class="col-md-6">

                                                <div id="divBusquedaBioEco" class="input-group d-none">
                                                    <input id="busquedaBioEcoId" type="text" class="form-control" placeholder="Busqueda por título/autor/año">
                                                    <div class="input-group-append">
                                                        <button id="botonBusquedaBioEco" class="btn btn-secondary" type="button">
                                                            <i class="fa fa-search"></i>
                                                        </button>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>


                                        <div class="card-content-bio-eco card-content-bio-eco-biblioteca">
                                        </div>

                                    </div>

                                    <div class="row mt-3">
                                        <div class="col-12">

                                            <nav aria-label="Page navigation example">
                                                <ul class="pagination pagination-bio-eco justify-content-center">
                                                </ul>
                                            </nav>

                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </section>

                    <section id="bibliotecaEducacionId" class="fatenea-background-banner-blue">
                        <div class="container">

                            <h2 class="mt-4 fatenea-catalogos text-left fatenea-a-blanco"><strong><ins>Educación</ins></strong></h2>

                            <div class="row">
                                <div class="col-12">

                                    <div class="biblioteca-margin-hero mt-4">

                                        <div class="row mb-4">

                                            <div class="col-md-6 text-left">
                                                <h5 class="biblioteca-libros-encontrados fatenea-a-blanco" 
                                                style="margin-botton: 0rem !important; margin-top: 0.4rem !important ">
                                                    Libros encontrados: <span class="fatenea-a-blanco" id="accountEducacionBooks"></span>
                                                </h5>
                                            </div>

                                            <div class="col-md-6">

                                                <div id="divBusquedaEducacion" class="input-group d-none">
                                                    <input id="busquedaEducacionId" type="text" class="form-control" placeholder="Busqueda por título/autor/año">
                                                    <div class="input-group-append">
                                                        <button id="botonBusquedaEducacion" class="btn btn-secondary" type="button">
                                                            <i class="fa fa-search"></i>
                                                        </button>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>


                                        <div class="card-content-educacion card-content-educacion-biblioteca">
                                        </div>

                                    </div>

                                    <div class="row mt-3">
                                        <div class="col-12">

                                            <nav aria-label="Page navigation example">
                                                <ul class="pagination pagination-educacion justify-content-center">
                                                </ul>
                                            </nav>

                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </section>

                    <section id="bibliotecaSocialesId" class="fatenea-background-banner-blue">
                        <div class="container">

                            <h2 class="mt-4 fatenea-catalogos text-left fatenea-a-blanco"><strong><ins>Ciencias Sociales</ins></strong></h2>

                            <div class="row">
                                <div class="col-12">

                                    <div class="biblioteca-margin-hero mt-4">

                                        <div class="row mb-4">

                                            <div class="col-md-6 text-left">
                                                <h5 class="biblioteca-libros-encontrados fatenea-a-blanco" 
                                                style="margin-botton: 0rem !important; margin-top: 0.4rem !important ">
                                                    Libros encontrados: <span class="fatenea-a-blanco" id="accountSocialesBooks"></span>
                                                </h5>
                                            </div>

                                            <div class="col-md-6">

                                                <div id="divBusquedaSociales" class="input-group d-none">
                                                    <input id="busquedaSocialesId" type="text" class="form-control" placeholder="Busqueda por título/autor/año">
                                                    <div class="input-group-append">
                                                        <button id="botonBusquedaSociales" class="btn btn-secondary" type="button">
                                                            <i class="fa fa-search"></i>
                                                        </button>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>


                                        <div class="card-content-sociales card-content-sociales-biblioteca">
                                        </div>

                                    </div>

                                    <div class="row mt-3">
                                        <div class="col-12">

                                            <nav aria-label="Page navigation example">
                                                <ul class="pagination pagination-sociales justify-content-center">
                                                </ul>
                                            </nav>

                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </section>

                    <section id="bibliotecaHumanasId" class="fatenea-background-banner-blue">
                        <div class="container">

                            <h2 class="mt-4 fatenea-catalogos text-left fatenea-a-blanco"><strong><ins>Ciencias Humanas</ins></strong></h2>

                            <div class="row">
                                <div class="col-12">

                                    <div class="biblioteca-margin-hero mt-4">

                                        <div class="row mb-4">

                                            <div class="col-md-6 text-left">
                                                <h5 class="biblioteca-libros-encontrados fatenea-a-blanco" 
                                                style="margin-botton: 0rem !important; margin-top: 0.4rem !important ">
                                                    Libros encontrados: <span class="fatenea-a-blanco" id="accountHumanasBooks"></span>
                                                </h5>
                                            </div>

                                            <div class="col-md-6">

                                                <div id="divBusquedaHumanas" class="input-group d-none">
                                                    <input id="busquedaHumanasId" type="text" class="form-control" placeholder="Busqueda por título/autor/año">
                                                    <div class="input-group-append">
                                                        <button id="botonBusquedaHumanas" class="btn btn-secondary" type="button">
                                                            <i class="fa fa-search"></i>
                                                        </button>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>


                                        <div class="card-content-humanas card-content-humanas-biblioteca">
                                        </div>

                                    </div>

                                    <div class="row mt-3">
                                        <div class="col-12">

                                            <nav aria-label="Page navigation example">
                                                <ul class="pagination pagination-humanas justify-content-center">
                                                </ul>
                                            </nav>

                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </section>
                
                </div>

            </div>
        
        </div>

    </section>

    <section class="fatenea-background-banner-gray py-5">

        <div class="container">

            <div class="row">

                <div class="col-12 text-center fatenea-editorial-libro-3">
                    <h1 class="my-5 fatenea-catalogos"><strong>Colecciones o Series Editoriales</strong></h1>

                    <section id="bibliotecaHumanismoId" class="fatenea-background-banner-gray">
                        <div class="container">

                            <h2 class="mt-4 fatenea-catalogos text-left"><strong><ins>Colección Humanismo y Sociedad</ins></strong></h2>

                            <div class="row">
                                <div class="col-12">

                                    <div class="biblioteca-margin-hero mt-4">

                                        <div class="row mb-4">

                                            <div class="col-md-6 text-left">
                                                <h5 class="biblioteca-libros-encontrados fatenea-a-negro" 
                                                style="margin-botton: 0rem !important; margin-top: 0.4rem !important ">
                                                    Libros encontrados: <span class="fatenea-a-azul" id="accountHumanismoBooks"></span>
                                                </h5>
                                            </div>

                                            <div class="col-md-6">

                                                <div id="divBusquedaHumanismo" class="input-group d-none">
                                                    <input id="busquedaHumanismoId" type="text" class="form-control" placeholder="Busqueda por título/autor/año">
                                                    <div class="input-group-append">
                                                        <button id="botonBusquedaHumanismo" class="btn btn-secondary" type="button">
                                                            <i class="fa fa-search"></i>
                                                        </button>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>


                                        <div class="card-content-humanismo card-content-humanismo-biblioteca">
                                        </div>

                                    </div>

                                    <div class="row mt-3">
                                        <div class="col-12">

                                            <nav aria-label="Page navigation example">
                                                <ul class="pagination pagination-humanismo justify-content-center">
                                                </ul>
                                            </nav>

                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </section>

                    <section id="bibliotecaFilosofiaPraId" class="fatenea-background-banner-gray">
                        <div class="container">
                            <h2 class="mt-4 fatenea-catalogos text-left"><strong><ins>Colección Filosofía y Praxis</ins></strong></h2>

                            <div class="row">
                                <div class="col-12">

                                    <div class="biblioteca-margin-hero mt-4">

                                        <div class="row mb-4">

                                            <div class="col-md-6 text-left">
                                                <h5 class="biblioteca-libros-encontrados fatenea-a-negro" 
                                                style="margin-botton: 0rem !important; margin-top: 0.4rem !important ">
                                                    Libros encontrados: <span class="fatenea-a-azul" id="accountFilosofiaPraBooks"></span>
                                                </h5>
                                            </div>

                                            <div class="col-md-6">

                                                <div id="divBusquedaFilosofiaPra" class="input-group d-none">
                                                    <input id="busquedaFilosofiaPraId" type="text" class="form-control" placeholder="Busqueda por título/autor/año">
                                                    <div class="input-group-append">
                                                        <button id="botonBusquedaFilosofiaPra" class="btn btn-secondary" type="button">
                                                            <i class="fa fa-search"></i>
                                                        </button>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>


                                        <div class="card-content-filosofia-pra card-content-filosofia-pra-biblioteca">
                                        </div>

                                    </div>

                                    <div class="row mt-3">
                                        <div class="col-12">

                                            <nav aria-label="Page navigation example">
                                                <ul class="pagination pagination-filosofia-pra justify-content-center">
                                                </ul>
                                            </nav>

                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </section>

                    <section id="bibliotecaEducacionTraId" class="fatenea-background-banner-gray">
                        <div class="container">

                            <h2 class="mt-4 fatenea-catalogos text-left"><strong><ins>Colección Educación Transformadora</ins></strong></h2>

                            <div class="row">
                                <div class="col-12">

                                    <div class="biblioteca-margin-hero mt-4">

                                        <div class="row mb-4">

                                            <div class="col-md-6 text-left">
                                                <h5 class="biblioteca-libros-encontrados fatenea-a-negro" 
                                                style="margin-botton: 0rem !important; margin-top: 0.4rem !important ">
                                                    Libros encontrados: <span class="fatenea-a-azul" id="accountEducacionTraBooks"></span>
                                                </h5>
                                            </div>

                                            <div class="col-md-6">

                                                <div id="divBusquedaEducacionTra" class="input-group d-none">
                                                    <input id="busquedaEducacionTraId" type="text" class="form-control" placeholder="Busqueda por título/autor/año">
                                                    <div class="input-group-append">
                                                        <button id="botonBusquedaEducacionTra" class="btn btn-secondary" type="button">
                                                            <i class="fa fa-search"></i>
                                                        </button>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>


                                        <div class="card-content-educacion-tra card-content-educacion-tra-biblioteca">
                                        </div>

                                    </div>

                                    <div class="row mt-3">
                                        <div class="col-12">

                                            <nav aria-label="Page navigation example">
                                                <ul class="pagination pagination-educacion-tra justify-content-center">
                                                </ul>
                                            </nav>

                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </section>

                    <section id="bibliotecaCuaBioEcoId" class="fatenea-background-banner-gray">
                        <div class="container">

                            <h2 class="mt-4 fatenea-catalogos text-left"><strong><ins>Colección de Ecosofía y Bioética</ins></strong></h2>

                            <div class="row">
                                <div class="col-12">

                                    <div class="biblioteca-margin-hero mt-4">

                                        <div class="row mb-4">

                                            <div class="col-md-6 text-left">
                                                <h5 class="biblioteca-libros-encontrados fatenea-a-negro" 
                                                style="margin-botton: 0rem !important; margin-top: 0.4rem !important ">
                                                    Libros encontrados: <span class="fatenea-a-azul" id="accountCuaBioEcoBooks"></span>
                                                </h5>
                                            </div>

                                            <div class="col-md-6">

                                                <div id="divBusquedaCuaBioEco" class="input-group d-none">
                                                    <input id="busquedaCuaBioEcoId" type="text" class="form-control" placeholder="Busqueda por título/autor/año">
                                                    <div class="input-group-append">
                                                        <button id="botonBusquedaCuaBioEco" class="btn btn-secondary" type="button">
                                                            <i class="fa fa-search"></i>
                                                        </button>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>


                                        <div class="card-content-cua-bio-eco card-content-cua-bio-eco-biblioteca">
                                        </div>

                                    </div>

                                    <div class="row mt-3">
                                        <div class="col-12">

                                            <nav aria-label="Page navigation example">
                                                <ul class="pagination pagination-cua-bio-eco justify-content-center">
                                                </ul>
                                            </nav>

                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </section>

                </div>

            </div>
        
        </div>

    </section>

    <section class="fatenea-background-banner-blue">

        <div class="container">

            <div class="row justify-content-center align-items-center">
 
                <div class="col-md-5 text-left">
                    <h1 class="fatenas-revistaD-title pb-2 mt-5 fatenea-editorial-revista-atenea-title fatenea-a-blanco">
                        Libro del mes
                    </h1>
                    <h4 class="fatenas-revistaD-title pb-2 mt-3 fatenea-a-blanco">
                        Política de la vida y de la muerte: Ética, violencia y hospitalidad frente al narcotráfico en México
                    </h4>
                </div>

                <div class="col-md-4 pt-5">
                    <div class="fatenas-revistaD-title-4 fatenea-editorial-revista-atenea-fondo">
                        <a href="/file/libro-mes.pdf" target="_blank" style="display:block; width:100%; height:100%;"></a>
                    </div>
                </div>

            </div>


            <div class="row justify-content-center">
                <div class="col-md-5 text-center my-5 fatenas-editorial-contactanos fatenas-programas-diplomados-text-white">
                    <a href="contacto.php" class="display-4 h1-inicio-primario pb-0 fatenea-a-gris">
                        <span>Contáctanos</span>
                    </a>
                </div>
            </div>

        </div>

    </section>

    <?php include 'section/whatsappButton.php';?>

    <?php include 'section/footerFA.php';?>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.js" integrity="sha512-ZKNVEa7gi0Dz4Rq9jXcySgcPiK+5f01CqW+ZoKLLKr9VMXuCsw3RjWiv8ZpIOa0hxO79np7Ec8DDWALM0bDOaQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.min.js" integrity="sha384-+sLIOodYLS7CIrQpBjl+C7nPvqq+FbNUBDunl/OZv93DB7Ln/533i8e/mZXLi/P+" crossorigin="anonymous"></script>

    <script src="js/general-fundacionAtenea.js"></script>
    <script src="js/labores-editoriales.js"></script>
    <script src="js/programas.js"></script>
    <script src="js/filosofia-libros.js"></script>
    <script src="js/bio-eco-libros.js"></script>
    <script src="js/educacion-libros.js"></script>
    <script src="js/sociales-libros.js"></script>
    <script src="js/humanas-libros.js"></script>
    <script src="js/humanismo-libros.js"></script>
    <script src="js/filosofia-pra-libros.js"></script>
    <script src="js/educacion-tra-libros.js"></script>
    <script src="js/cua-bio-eco-libros.js"></script>

    <script>
        document.addEventListener('DOMContentLoaded', function (e) {

            /* Se pinta borde en header después de entrar a la página */
            $("#btnLaboresEditoriales").addClass("btn-nav-fatenea-border btn-nav-fatenea-cborder");

            //indicamos el header que se va a mostrar
            showHeader("General");

        });
    </script>

</body>

</html>