"use strict"

let librosTotalesHumanas = 0;
let libroActualesHumanas = 0;
let currentPageHumanas = 1; 
let windowWidthHumanas = 0;

$(document).ready(async function () {
    
    windowWidthHumanas = $(window).width();
    librosTotalesHumanas = await getBooksHumanas();
    libroActualesHumanas = librosTotalesHumanas;
    $("#accountHumanasBooks").text(librosTotalesHumanas.length);
    setBooksHumanas(librosTotalesHumanas);

    if(librosTotalesHumanas.length > 4) {
        createPaginationHumanas(librosTotalesHumanas);
        $("#divBusquedaHumanas").removeClass("d-none");
    }

});

$(document).on("click", ".pagination.pagination-humanas li.current-page-humanas:not(.activePage-humanas)", function() {
    return showPageHumanas(+$(this).text(), libroActualesHumanas);
});

$(document).on("click", ".pagination.pagination-humanas li.previous-page-humanas .page-link", function() {
    return showPageHumanas(currentPageHumanas - 1, libroActualesHumanas);
});

$(document).on("click", ".pagination.pagination-humanas li.next-page-humanas .page-link", function() {
    return showPageHumanas(currentPageHumanas + 1, libroActualesHumanas);
})

$(document).on("click", "#botonBusquedaHumanas", function(event){ 

    let palabra = $("#busquedaHumanasId").val();

    if(palabra.length > 2) {
        filtrarLibrosHumanas();
    }

});

$(document).on("keydown", "#busquedaHumanasId", function(event){ 

    let id = event.which;
    let palabra = $("#busquedaHumanasId").val();

    if (id == 13) {
        if(palabra.length > 2) {
            filtrarLibrosHumanas();
        } else if(palabra.length == 0) {
            reestablecerLibrosHumanas();
        }
    }

});

$(document).on("keyup", "#busquedaHumanasId", function(event){ 

    let key = event.keyCode || event.charCode;
    let palabra = $("#busquedaHumanasId").val();

    if(key == 8 || key == 46) {
        if(palabra.length == 0) {
            reestablecerLibrosHumanas();
        }
    }

});

function filtrarLibrosHumanas() {

    let palabra = $("#busquedaHumanasId").val().toLowerCase();
    palabra = palabra.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    let librosFiltrados = librosTotalesHumanas.filter((libro) => {

        let titulo = libro.titulo.toLowerCase();
        titulo = titulo.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

        let autor = libro.autor.toLowerCase();
        autor = autor.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

        return titulo.includes(palabra) || autor.includes(palabra) || libro.anio.toLowerCase().includes(palabra);
    });

    libroActualesHumanas = librosFiltrados;

    $("#accountHumanasBooks").text(librosFiltrados.length);
    setBooksHumanas(librosFiltrados);
    createPaginationHumanas(librosFiltrados);

}

function reestablecerLibrosHumanas() {
    libroActualesHumanas = librosTotalesHumanas
    $("#accountHumanasBooks").text(librosTotalesHumanas.length);
    setBooksHumanas(librosTotalesHumanas);
    createPaginationHumanas(librosTotalesHumanas);
}

function setBooksHumanas(libros) {

    if(libros != null) {
        $(".card-content-humanas-biblioteca").empty();

        // 375
        // 414
        if(windowWidthHumanas < 431) {
            setBooksHumanasBy2(libros);
        } else {
            setBooksHumanasBy4(libros);
        }

    }
}

function setBooksHumanasBy2(libros) {

    let index = 0;
    let libro = null;
    let libro2 = null;

    for(index = 0; index < libros.length; index = index + 2) {
        
        libro = libros[index];

        if(index + 1 < libros.length) {
            libro2 = libros[index + 1];
        }

        if(libro2 != null) {
            $(".card-content-humanas-biblioteca").append(
                `<div class='row card-content-humanas-biblioteca-row mb-4'>
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
            $(".card-content-humanas-biblioteca").append(
                `<div class='row card-content-humanas-biblioteca-row mb-4'>
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

function setBooksHumanasBy4(libros) {

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
            $(".card-content-humanas-biblioteca").append(
                `<div class='row card-content-humanas-biblioteca-row mb-4'>
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
            $(".card-content-humanas-biblioteca").append(
                `<div class='row card-content-humanas-biblioteca-row mb-4'>
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
            $(".card-content-humanas-biblioteca").append(
                `<div class='row card-content-humanas-biblioteca-row mb-4'>
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
            $(".card-content-humanas-biblioteca").append(
                `<div class='row card-content-humanas-biblioteca-row mb-4'>
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

function getBooksHumanas() {
    return new Promise((resolve, reject) => {
      fetch("file/humanas-libros.json")
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

function createPaginationHumanas(libros) {

    $(".pagination.pagination-humanas").empty();

    if(libros.length > 0) {
        
        let nextString = "Siguiente";
        let previousString = "Anterior";

        if(windowWidthHumanas < 431) {
            nextString = ">>";
            previousString = "<<";
        }

        $(".pagination.pagination-humanas").append(
            $("<li>").addClass("page-item-humanas").addClass("previous-page-humanas").append($("<a>").addClass("page-link")
                .attr({href: "javascript:void(0)"}).text(previousString)),
            $("<li>").addClass("page-item-humanas").addClass("next-page-humanas").append($("<a>").addClass("page-link")
                .attr({href: "javascript:void(0)"}).text(nextString))
        );

        showPageHumanas(1, libros);
    } else {
        $(".pagination.pagination-humanas").append(
            $("<h4>").text("No hay resultados")
        )
    }

}

function showPageHumanas(pageToShow, libros) {

    let numberOfItems = libros.length;
    let limitPerPage = 1; // how many rows you want to display
    let numberItemsPerPage = 4; // how many items have each row
    let paginationSize = 7; // how many page elements visible in the pagination

    if(windowWidthHumanas < 431) {
        numberItemsPerPage = 2; // how many items have each row
    } 

    let totalPages = Math.ceil(numberOfItems / (limitPerPage * numberItemsPerPage));


    if(pageToShow < 1 || pageToShow > totalPages) {
        return false;
    }

    currentPageHumanas = pageToShow;

    $(".card-content-humanas-biblioteca .card-content-humanas-biblioteca-row").hide().slice((currentPageHumanas - 1) * limitPerPage, 
                                                                    currentPageHumanas * limitPerPage).show();

    $(".pagination.pagination-humanas li").slice(1, -1).remove();

    getPageListHumanas(totalPages, currentPageHumanas, paginationSize).forEach(item => {
        $("<li>").addClass("page-item-humanas").addClass(item ? "current-page-humanas" : "dots").toggleClass("activePage-humanas", item === currentPageHumanas)
            .append($("<a>").addClass("page-link").attr({href: "javascript:void(0)"}).text(item || "...")).insertBefore(".next-page-humanas");
    });

    $(".previous-page-humanas").toggleClass("disable", currentPageHumanas === 1);
    $(".next-page-humanas").toggleClass("disable", currentPageHumanas === totalPages);

    return true;

}

function getPageListHumanas(totalPages, page, maxLength) {
    
    let sideWidth = maxLength < 9 ? 1 : 2;
    let leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
    let rightWidth = (maxLength - sideWidth * 2 - 3) >> 1;

    if(totalPages <= maxLength) {
        return rangeHumanas(1, totalPages);
    }

    if(page <= maxLength - sideWidth - 1 - rightWidth) {
        return rangeHumanas(1, maxLength - sideWidth - 1).concat(0, rangeHumanas(totalPages - sideWidth + 1, totalPages));
    }

    if(page >= totalPages - sideWidth - 1 -rightWidth) {
        return rangeHumanas(1, sideWidth).concat(0, rangeHumanas(totalPages - sideWidth - 1 -rightWidth -leftWidth, totalPages));
    }

    return rangeHumanas(1, sideWidth).concat(0, rangeHumanas(page - leftWidth, page + rightWidth), 0, rangeHumanas(totalPages - sideWidth + 1, totalPages));
}

function rangeHumanas(start, end) {
    return Array.from(Array(end - start + 1), (_, i) => i + start);
}

