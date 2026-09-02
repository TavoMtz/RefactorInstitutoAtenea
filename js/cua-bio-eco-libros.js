"use strict"

let librosTotalesCuaBioEco = 0;
let libroActualesCuaBioEco = 0;
let currentPageCuaBioEco = 1; 
let windowWidthCuaBioEco = 0;

$(document).ready(async function () {
    
    windowWidthCuaBioEco = $(window).width();
    librosTotalesCuaBioEco = await getBooksCuaBioEco();
    libroActualesCuaBioEco = librosTotalesCuaBioEco;
    $("#accountCuaBioEcoBooks").text(librosTotalesCuaBioEco.length);
    setBooksCuaBioEco(librosTotalesCuaBioEco);

    if(librosTotalesCuaBioEco.length > 4) {
        createPaginationCuaBioEco(librosTotalesCuaBioEco);
        $("#divBusquedaCuaBioEco").removeClass("d-none");
    }

});

$(document).on("click", ".pagination.pagination-cua-bio-eco li.current-page-cua-bio-eco:not(.activePage-cua-bio-eco)", function() {
    return showPageCuaBioEco(+$(this).text(), libroActualesCuaBioEco);
});

$(document).on("click", ".pagination.pagination-cua-bio-eco li.previous-page-cua-bio-eco .page-link", function() {
    return showPageCuaBioEco(currentPageCuaBioEco - 1, libroActualesCuaBioEco);
});

$(document).on("click", ".pagination.pagination-cua-bio-eco li.next-page-cua-bio-eco .page-link", function() {
    return showPageCuaBioEco(currentPageCuaBioEco + 1, libroActualesCuaBioEco);
})

$(document).on("click", "#botonBusquedaCuaBioEco", function(event){ 

    let palabra = $("#busquedaCuaBioEcoId").val();

    if(palabra.length > 2) {
        filtrarLibrosCuaBioEco();
    }

});

$(document).on("keydown", "#busquedaCuaBioEcoId", function(event){ 

    let id = event.which;
    let palabra = $("#busquedaCuaBioEcoId").val();

    if (id == 13) {
        if(palabra.length > 2) {
            filtrarLibrosCuaBioEco();
        } else if(palabra.length == 0) {
            reestablecerLibrosCuaBioEco();
        }
    }

});

$(document).on("keyup", "#busquedaCuaBioEcoId", function(event){ 

    let key = event.keyCode || event.charCode;
    let palabra = $("#busquedaCuaBioEcoId").val();

    if(key == 8 || key == 46) {
        if(palabra.length == 0) {
            reestablecerLibrosCuaBioEco();
        }
    }

});

function filtrarLibrosCuaBioEco() {

    let palabra = $("#busquedaCuaBioEcoId").val().toLowerCase();
    palabra = palabra.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    let librosFiltrados = librosTotalesCuaBioEco.filter((libro) => {

        let titulo = libro.titulo.toLowerCase();
        titulo = titulo.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

        let autor = libro.autor.toLowerCase();
        autor = autor.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

        return titulo.includes(palabra) || autor.includes(palabra) || libro.anio.toLowerCase().includes(palabra);
    });

    libroActualesCuaBioEco = librosFiltrados;

    $("#accountCuaBioEcoBooks").text(librosFiltrados.length);
    setBooksCuaBioEco(librosFiltrados);
    createPaginationCuaBioEco(librosFiltrados);

}

function reestablecerLibrosCuaBioEco() {
    libroActualesCuaBioEco = librosTotalesCuaBioEco
    $("#accountCuaBioEcoBooks").text(librosTotalesCuaBioEco.length);
    setBooksCuaBioEco(librosTotalesCuaBioEco);
    createPaginationCuaBioEco(librosTotalesCuaBioEco);
}

function setBooksCuaBioEco(libros) {

    if(libros != null) {
        $(".card-content-cua-bio-eco-biblioteca").empty();

        // 375
        // 414
        if(windowWidthCuaBioEco < 431) {
            setBooksCuaBioEcoBy2(libros);
        } else {
            setBooksCuaBioEcoBy4(libros);
        }

    }
}

function setBooksCuaBioEcoBy2(libros) {

    let index = 0;
    let libro = null;
    let libro2 = null;

    for(index = 0; index < libros.length; index = index + 2) {
        
        libro = libros[index];

        if(index + 1 < libros.length) {
            libro2 = libros[index + 1];
        }

        if(libro2 != null) {
            $(".card-content-cua-bio-eco-biblioteca").append(
                `<div class='row card-content-cua-bio-eco-biblioteca-row mb-4'>
                    <div class='col-6'>                        
                        <div class='card biblioteca-libros-card'>
                            <img class='card-img-top fatenea-biblioteca-card-image mx-auto mt-4' src='${libro.imagen}' alt='Card image cap'>
                            <div class='card-body'>
                                <h6 class='card-title biblioteca-card-title'><a class='fatenea-a-blanco' target='_blank' href=${libro.url}><ins>${libro.titulo}</ins></a></h6>
                                <h6 class='biblioteca-card-author fatenea-a-blanco font-italic'>${libro.autor}</h6>
                                <h6 class='biblioteca-card-year fatenea-a-blanco font-italic'>(${libro.anio})</h6>
                            </div>
                        </div>
                    </div>
                    <div class='col-6'>                        
                        <div class='card biblioteca-libros-card'>
                            <img class='card-img-top fatenea-biblioteca-card-image mx-auto mt-4' src='${libro2.imagen}' alt='Card image cap'>
                            <div class='card-body'>
                                <h6 class='card-title biblioteca-card-title'><a class='fatenea-a-blanco' target='_blank' href=${libro2.url}><ins>${libro2.titulo}</ins></a></h6>
                                <h6 class='biblioteca-card-author fatenea-a-blanco font-italic'>${libro2.autor}</h6>
                                <h6 class='biblioteca-card-year fatenea-a-blanco font-italic'>(${libro2.anio})</h6>
                            </div>
                        </div>
                    </div>
                </div>`);
        } else {
            $(".card-content-cua-bio-eco-biblioteca").append(
                `<div class='row card-content-cua-bio-eco-biblioteca-row mb-4'>
                    <div class='col-6'>                        
                        <div class='card biblioteca-libros-card'>
                            <img class='card-img-top fatenea-biblioteca-card-image mx-auto mt-4' src='${libro.imagen}' alt='Card image cap'>
                            <div class='card-body'>
                                <h6 class='card-title biblioteca-card-title'><a class='fatenea-a-blanco' target='_blank' href=${libro.url}><ins>${libro.titulo}</ins></a></h6>
                                <h6 class='biblioteca-card-author fatenea-a-blanco font-italic'>${libro.autor}</h6>
                                <h6 class='biblioteca-card-year fatenea-a-blanco font-italic'>(${libro.anio})</h6>
                            </div>
                        </div>
                    </div>
                </div>`);
        }
        libro2 = null;
    }
}

function setBooksCuaBioEcoBy4(libros) {

    let index = 0;
    let libro = null;
    let libro2 = null;
    let libro3 = null;
    let libro4 = null;

    for(index = 0; index < libros.length; index = index + 4) {
        
        libro = libros[index];

        if(index + 1 < libros.length) {
            libro2 = libros[index + 1];
        }
        
        if(index + 2 < libros.length) {
            libro3 = libros[index + 2];
        } 
        
        if(index + 3 < libros.length) {
            libro4 = libros[index + 3];
        }

        if(libro4 != null) {
            $(".card-content-cua-bio-eco-biblioteca").append(
                `<div class='row card-content-cua-bio-eco-biblioteca-row mb-4'>
                    <div class='col-3'>                        
                        <div class='card biblioteca-libros-card'>
                            <img class='card-img-top fatenea-biblioteca-card-image mx-auto mt-4' src='${libro.imagen}' alt='Card image cap'>
                            <div class='card-body'>
                                <h6 class='card-title biblioteca-card-title'><a class='fatenea-a-blanco' target='_blank' href=${libro.url}><ins>${libro.titulo}</ins></a></h6>
                                <h6 class='biblioteca-card-author fatenea-a-blanco font-italic'>${libro.autor}</h6>
                                <h6 class='biblioteca-card-year fatenea-a-blanco font-italic'>(${libro.anio})</h6>
                            </div>
                        </div>
                    </div>
                    <div class='col-3'>                        
                        <div class='card biblioteca-libros-card'>
                            <img class='card-img-top fatenea-biblioteca-card-image mx-auto mt-4' src='${libro2.imagen}' alt='Card image cap'>
                            <div class='card-body'>
                                <h6 class='card-title biblioteca-card-title'><a class='fatenea-a-blanco' target='_blank' href=${libro2.url}><ins>${libro2.titulo}</ins></a></h6>
                                <h6 class='biblioteca-card-author fatenea-a-blanco font-italic'>${libro2.autor}</h6>
                                <h6 class='biblioteca-card-year fatenea-a-blanco font-italic'>(${libro2.anio})</h6>
                            </div>
                        </div>
                    </div>
                    <div class='col-3'>                        
                        <div class='card biblioteca-libros-card'>
                            <img class='card-img-top fatenea-biblioteca-card-image mx-auto mt-4' src='${libro3.imagen}' alt='Card image cap'>
                            <div class='card-body'>
                                <h6 class='card-title biblioteca-card-title'><a class='fatenea-a-blanco' target='_blank' href=${libro3.url}><ins>${libro3.titulo}</ins></a></h6>
                                <h6 class='biblioteca-card-author fatenea-a-blanco font-italic'>${libro3.autor}</h6>
                                <h6 class='biblioteca-card-year fatenea-a-blanco font-italic'>(${libro3.anio})</h6>
                            </div>
                        </div>
                    </div>
                    <div class='col-3'>                        
                        <div class='card biblioteca-libros-card'>
                            <img class='card-img-top fatenea-biblioteca-card-image mx-auto mt-4' src='${libro4.imagen}' alt='Card image cap'>
                            <div class='card-body'>
                                <h6 class='card-title biblioteca-card-title'><a class='fatenea-a-blanco' target='_blank' href=${libro4.url}><ins>${libro4.titulo}</ins></a></h6>
                                <h6 class='biblioteca-card-author fatenea-a-blanco font-italic'>${libro4.autor}</h6>
                                <h6 class='biblioteca-card-year fatenea-a-blanco font-italic'>(${libro4.anio})</h6>
                            </div>
                        </div>
                    </div>
                </div>`);
        } else if(libro3 != null) {
            $(".card-content-cua-bio-eco-biblioteca").append(
                `<div class='row card-content-cua-bio-eco-biblioteca-row mb-4'>
                    <div class='col-3'>                        
                        <div class='card biblioteca-libros-card'>
                            <img class='card-img-top fatenea-biblioteca-card-image mx-auto mt-4' src='${libro.imagen}' alt='Card image cap'>
                            <div class='card-body'>
                                <h6 class='card-title biblioteca-card-title'><a class='fatenea-a-blanco' target='_blank' href=${libro.url}><ins>${libro.titulo}</ins></a></h6>
                                <h6 class='biblioteca-card-author fatenea-a-blanco font-italic'>${libro.autor}</h6>
                                <h6 class='biblioteca-card-year fatenea-a-blanco font-italic'>(${libro.anio})</h6>
                            </div>
                        </div>
                    </div>
                    <div class='col-3'>                        
                        <div class='card biblioteca-libros-card'>
                            <img class='card-img-top fatenea-biblioteca-card-image mx-auto mt-4' src='${libro2.imagen}' alt='Card image cap'>
                            <div class='card-body'>
                                <h6 class='card-title biblioteca-card-title'><a class='fatenea-a-blanco' target='_blank' href=${libro2.url}><ins>${libro2.titulo}</ins></a></h6>
                                <h6 class='biblioteca-card-author fatenea-a-blanco font-italic'>${libro2.autor}</h6>
                                <h6 class='biblioteca-card-year fatenea-a-blanco font-italic'>(${libro2.anio})</h6>
                            </div>
                        </div>
                    </div>
                    <div class='col-3'>                        
                        <div class='card biblioteca-libros-card'>
                            <img class='card-img-top fatenea-biblioteca-card-image mx-auto mt-4' src='${libro3.imagen}' alt='Card image cap'>
                            <div class='card-body'>
                                <h6 class='card-title biblioteca-card-title'><a class='fatenea-a-blanco' target='_blank' href=${libro3.url}><ins>${libro3.titulo}</ins></a></h6>
                                <h6 class='biblioteca-card-author fatenea-a-blanco font-italic'>${libro3.autor}</h6>
                                <h6 class='biblioteca-card-year fatenea-a-blanco font-italic'>(${libro3.anio})</h6>
                            </div>
                        </div>
                    </div>
                </div>`);
        } else if(libro2 != null) {
            $(".card-content-cua-bio-eco-biblioteca").append(
                `<div class='row card-content-cua-bio-eco-biblioteca-row mb-4'>
                    <div class='col-3'>                        
                        <div class='card biblioteca-libros-card'>
                            <img class='card-img-top fatenea-biblioteca-card-image mx-auto mt-4' src='${libro.imagen}' alt='Card image cap'>
                            <div class='card-body'>
                                <h6 class='card-title biblioteca-card-title'><a class='fatenea-a-blanco' target='_blank' href=${libro.url}><ins>${libro.titulo}</ins></a></h6>
                                <h6 class='biblioteca-card-author fatenea-a-blanco font-italic'>${libro.autor}</h6>
                                <h6 class='biblioteca-card-year fatenea-a-blanco font-italic'>(${libro.anio})</h6>
                            </div>
                        </div>
                    </div>
                    <div class='col-3'>                        
                        <div class='card biblioteca-libros-card'>
                            <img class='card-img-top fatenea-biblioteca-card-image mx-auto mt-4' src='${libro2.imagen}' alt='Card image cap'>
                            <div class='card-body'>
                                <h6 class='card-title biblioteca-card-title'><a class='fatenea-a-blanco' target='_blank' href=${libro2.url}><ins>${libro2.titulo}</ins></a></h6>
                                <h6 class='biblioteca-card-author fatenea-a-blanco font-italic'>${libro2.autor}</h6>
                                <h6 class='biblioteca-card-year fatenea-a-blanco font-italic'>(${libro2.anio})</h6>
                            </div>
                        </div>
                    </div>
                </div>`);
        } else {
            $(".card-content-cua-bio-eco-biblioteca").append(
                `<div class='row card-content-cua-bio-eco-biblioteca-row mb-4'>
                    <div class='col-3'>                        
                        <div class='card biblioteca-libros-card'>
                            <img class='card-img-top fatenea-biblioteca-card-image mx-auto mt-4' src='${libro.imagen}' alt='Card image cap'>
                            <div class='card-body'>
                                <h6 class='card-title biblioteca-card-title'><a class='fatenea-a-blanco' target='_blank' href=${libro.url}><ins>${libro.titulo}</ins></a></h6>
                                <h6 class='biblioteca-card-author fatenea-a-blanco font-italic'>${libro.autor}</h6>
                                <h6 class='biblioteca-card-year fatenea-a-blanco font-italic'>(${libro.anio})</h6>
                            </div>
                        </div>
                    </div>
                </div>`);
        }

        libro2 = null;
        libro3 = null;
        libro4 = null;
    }
}

function getBooksCuaBioEco() {
    return new Promise((resolve, reject) => {
      fetch("file/cua-bio-eco-libros.json")
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          reject(
            "No hemos podido recuperar ese json. El código de respuesta del servidor es: " +
              response.status
          );
        })
        .then((json) => resolve(json))
        .catch((err) => reject(err));
    });
}

function createPaginationCuaBioEco(libros) {

    $(".pagination.pagination-cua-bio-eco").empty();

    if(libros.length > 0) {
        
        let nextString = "Siguiente";
        let previousString = "Anterior";

        if(windowWidthCuaBioEco < 431) {
            nextString = ">>";
            previousString = "<<";
        }

        $(".pagination.pagination-cua-bio-eco").append(
            $("<li>").addClass("page-item-cua-bio-eco").addClass("previous-page-cua-bio-eco").append($("<a>").addClass("page-link")
                .attr({href: "javascript:void(0)"}).text(previousString)),
            $("<li>").addClass("page-item-cua-bio-eco").addClass("next-page-cua-bio-eco").append($("<a>").addClass("page-link")
                .attr({href: "javascript:void(0)"}).text(nextString))
        );

        showPageCuaBioEco(1, libros);
    } else {
        $(".pagination.pagination-cua-bio-eco").append(
            $("<h4>").text("No hay resultados")
        )
    }

}

function showPageCuaBioEco(pageToShow, libros) {

    let numberOfItems = libros.length;
    let limitPerPage = 1; // how many rows you want to display
    let numberItemsPerPage = 4; // how many items have each row
    let paginationSize = 7; // how many page elements visible in the pagination

    if(windowWidthCuaBioEco < 431) {
        numberItemsPerPage = 2; // how many items have each row
    } 

    let totalPages = Math.ceil(numberOfItems / (limitPerPage * numberItemsPerPage));


    if(pageToShow < 1 || pageToShow > totalPages) {
        return false;
    }

    currentPageCuaBioEco = pageToShow;

    $(".card-content-cua-bio-eco-biblioteca .card-content-cua-bio-eco-biblioteca-row").hide().slice((currentPageCuaBioEco - 1) * limitPerPage, 
                                                                    currentPageCuaBioEco * limitPerPage).show();

    $(".pagination.pagination-cua-bio-eco li").slice(1, -1).remove();

    getPageListCuaBioEco(totalPages, currentPageCuaBioEco, paginationSize).forEach(item => {
        $("<li>").addClass("page-item-cua-bio-eco").addClass(item ? "current-page-cua-bio-eco" : "dots").toggleClass("activePage-cua-bio-eco", item === currentPageCuaBioEco)
            .append($("<a>").addClass("page-link").attr({href: "javascript:void(0)"}).text(item || "...")).insertBefore(".next-page-cua-bio-eco");
    });

    $(".previous-page-cua-bio-eco").toggleClass("disable", currentPageCuaBioEco === 1);
    $(".next-page-cua-bio-eco").toggleClass("disable", currentPageCuaBioEco === totalPages);

    return true;

}

function getPageListCuaBioEco(totalPages, page, maxLength) {
    
    let sideWidth = maxLength < 9 ? 1 : 2;
    let leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
    let rightWidth = (maxLength - sideWidth * 2 - 3) >> 1;

    if(totalPages <= maxLength) {
        return rangeCuaBioEco(1, totalPages);
    }

    if(page <= maxLength - sideWidth - 1 - rightWidth) {
        return rangeCuaBioEco(1, maxLength - sideWidth - 1).concat(0, rangeCuaBioEco(totalPages - sideWidth + 1, totalPages));
    }

    if(page >= totalPages - sideWidth - 1 -rightWidth) {
        return rangeCuaBioEco(1, sideWidth).concat(0, rangeCuaBioEco(totalPages - sideWidth - 1 -rightWidth -leftWidth, totalPages));
    }

    return rangeCuaBioEco(1, sideWidth).concat(0, rangeCuaBioEco(page - leftWidth, page + rightWidth), 0, rangeCuaBioEco(totalPages - sideWidth + 1, totalPages));
}

function rangeCuaBioEco(start, end) {
    return Array.from(Array(end - start + 1), (_, i) => i + start);
}

