"use strict"

let librosTotalesFilosofiaPra = 0;
let libroActualesFilosofiaPra = 0;
let currentPageFilosofiaPra = 1; 
let windowWidthFilosofiaPra = 0;

$(document).ready(async function () {
    
    windowWidthFilosofiaPra = $(window).width();
    librosTotalesFilosofiaPra = await getBooksFilosofiaPra();
    libroActualesFilosofiaPra = librosTotalesFilosofiaPra;
    $("#accountFilosofiaPraBooks").text(librosTotalesFilosofiaPra.length);
    setBooksFilosofiaPra(librosTotalesFilosofiaPra);

    if(librosTotalesFilosofiaPra.length > 4) {
        createPaginationFilosofiaPra(librosTotalesFilosofiaPra);
        $("#divBusquedaFilosofiaPra").removeClass("d-none");
    }

});

$(document).on("click", ".pagination.pagination-filosofia-pra li.current-page-filosofia-pra:not(.activePage-filosofia-pra)", function() {
    return showPageFilosofiaPra(+$(this).text(), libroActualesFilosofiaPra);
});

$(document).on("click", ".pagination.pagination-filosofia-pra li.previous-page-filosofia-pra .page-link", function() {
    return showPageFilosofiaPra(currentPageFilosofiaPra - 1, libroActualesFilosofiaPra);
});

$(document).on("click", ".pagination.pagination-filosofia-pra li.next-page-filosofia-pra .page-link", function() {
    return showPageFilosofiaPra(currentPageFilosofiaPra + 1, libroActualesFilosofiaPra);
})

$(document).on("click", "#botonBusquedaFilosofiaPra", function(event){ 

    let palabra = $("#busquedaFilosofiaPraId").val();

    if(palabra.length > 2) {
        filtrarLibrosFilosofiaPra();
    }

});

$(document).on("keydown", "#busquedaFilosofiaPraId", function(event){ 

    let id = event.which;
    let palabra = $("#busquedaFilosofiaPraId").val();

    if (id == 13) {
        if(palabra.length > 2) {
            filtrarLibrosFilosofiaPra();
        } else if(palabra.length == 0) {
            reestablecerLibrosFilosofiaPra();
        }
    }

});

$(document).on("keyup", "#busquedaFilosofiaPraId", function(event){ 

    let key = event.keyCode || event.charCode;
    let palabra = $("#busquedaFilosofiaPraId").val();

    if(key == 8 || key == 46) {
        if(palabra.length == 0) {
            reestablecerLibrosFilosofiaPra();
        }
    }

});

function filtrarLibrosFilosofiaPra() {

    let palabra = $("#busquedaFilosofiaPraId").val().toLowerCase();
    palabra = palabra.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    let librosFiltrados = librosTotalesFilosofiaPra.filter((libro) => {

        let titulo = libro.titulo.toLowerCase();
        titulo = titulo.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

        let autor = libro.autor.toLowerCase();
        autor = autor.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

        return titulo.includes(palabra) || autor.includes(palabra) || libro.anio.toLowerCase().includes(palabra);
    });

    libroActualesFilosofiaPra = librosFiltrados;

    $("#accountFilosofiaPraBooks").text(librosFiltrados.length);
    setBooksFilosofiaPra(librosFiltrados);
    createPaginationFilosofiaPra(librosFiltrados);

}

function reestablecerLibrosFilosofiaPra() {
    libroActualesFilosofiaPra = librosTotalesFilosofiaPra
    $("#accountFilosofiaPraBooks").text(librosTotalesFilosofiaPra.length);
    setBooksFilosofiaPra(librosTotalesFilosofiaPra);
    createPaginationFilosofiaPra(librosTotalesFilosofiaPra);
}

function setBooksFilosofiaPra(libros) {

    if(libros != null) {
        $(".card-content-filosofia-pra-biblioteca").empty();

        // 375
        // 414
        if(windowWidthFilosofiaPra < 431) {
            setBooksFilosofiaPraBy2(libros);
        } else {
            setBooksFilosofiaPraBy4(libros);
        }

    }
}

function setBooksFilosofiaPraBy2(libros) {

    let index = 0;
    let libro = null;
    let libro2 = null;

    for(index = 0; index < libros.length; index = index + 2) {
        
        libro = libros[index];

        if(index + 1 < libros.length) {
            libro2 = libros[index + 1];
        }

        if(libro2 != null) {
            $(".card-content-filosofia-pra-biblioteca").append(
                `<div class='row card-content-filosofia-pra-biblioteca-row mb-4'>
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
            $(".card-content-filosofia-pra-biblioteca").append(
                `<div class='row card-content-filosofia-pra-biblioteca-row mb-4'>
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

function setBooksFilosofiaPraBy4(libros) {

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
            $(".card-content-filosofia-pra-biblioteca").append(
                `<div class='row card-content-filosofia-pra-biblioteca-row mb-4'>
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
            $(".card-content-filosofia-pra-biblioteca").append(
                `<div class='row card-content-filosofia-pra-biblioteca-row mb-4'>
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
            $(".card-content-filosofia-pra-biblioteca").append(
                `<div class='row card-content-filosofia-pra-biblioteca-row mb-4'>
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
            $(".card-content-filosofia-pra-biblioteca").append(
                `<div class='row card-content-filosofia-pra-biblioteca-row mb-4'>
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

function getBooksFilosofiaPra() {
    return new Promise((resolve, reject) => {
      fetch("file/filosofia-pra-libros.json")
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

function createPaginationFilosofiaPra(libros) {

    $(".pagination.pagination-filosofia-pra").empty();

    if(libros.length > 0) {
        
        let nextString = "Siguiente";
        let previousString = "Anterior";

        if(windowWidthFilosofiaPra < 431) {
            nextString = ">>";
            previousString = "<<";
        }

        $(".pagination.pagination-filosofia-pra").append(
            $("<li>").addClass("page-item-filosofia-pra").addClass("previous-page-filosofia-pra").append($("<a>").addClass("page-link")
                .attr({href: "javascript:void(0)"}).text(previousString)),
            $("<li>").addClass("page-item-filosofia-pra").addClass("next-page-filosofia-pra").append($("<a>").addClass("page-link")
                .attr({href: "javascript:void(0)"}).text(nextString))
        );

        showPageFilosofiaPra(1, libros);
    } else {
        $(".pagination.pagination-filosofia-pra").append(
            $("<h4>").text("No hay resultados")
        )
    }

}

function showPageFilosofiaPra(pageToShow, libros) {

    let numberOfItems = libros.length;
    let limitPerPage = 1; // how many rows you want to display
    let numberItemsPerPage = 4; // how many items have each row
    let paginationSize = 7; // how many page elements visible in the pagination

    if(windowWidthFilosofiaPra < 431) {
        numberItemsPerPage = 2; // how many items have each row
    } 

    let totalPages = Math.ceil(numberOfItems / (limitPerPage * numberItemsPerPage));


    if(pageToShow < 1 || pageToShow > totalPages) {
        return false;
    }

    currentPageFilosofiaPra = pageToShow;

    $(".card-content-filosofia-pra-biblioteca .card-content-filosofia-pra-biblioteca-row").hide().slice((currentPageFilosofiaPra - 1) * limitPerPage, 
                                                                    currentPageFilosofiaPra * limitPerPage).show();

    $(".pagination.pagination-filosofia-pra li").slice(1, -1).remove();

    getPageListFilosofiaPra(totalPages, currentPageFilosofiaPra, paginationSize).forEach(item => {
        $("<li>").addClass("page-item-filosofia-pra").addClass(item ? "current-page-filosofia-pra" : "dots").toggleClass("activePage-filosofia-pra", item === currentPageFilosofiaPra)
            .append($("<a>").addClass("page-link").attr({href: "javascript:void(0)"}).text(item || "...")).insertBefore(".next-page-filosofia-pra");
    });

    $(".previous-page-filosofia-pra").toggleClass("disable", currentPageFilosofiaPra === 1);
    $(".next-page-filosofia-pra").toggleClass("disable", currentPageFilosofiaPra === totalPages);

    return true;

}

function getPageListFilosofiaPra(totalPages, page, maxLength) {
    
    let sideWidth = maxLength < 9 ? 1 : 2;
    let leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
    let rightWidth = (maxLength - sideWidth * 2 - 3) >> 1;

    if(totalPages <= maxLength) {
        return rangeFilosofiaPra(1, totalPages);
    }

    if(page <= maxLength - sideWidth - 1 - rightWidth) {
        return rangeFilosofiaPra(1, maxLength - sideWidth - 1).concat(0, rangeFilosofiaPra(totalPages - sideWidth + 1, totalPages));
    }

    if(page >= totalPages - sideWidth - 1 -rightWidth) {
        return rangeFilosofiaPra(1, sideWidth).concat(0, rangeFilosofiaPra(totalPages - sideWidth - 1 -rightWidth -leftWidth, totalPages));
    }

    return rangeFilosofiaPra(1, sideWidth).concat(0, rangeFilosofiaPra(page - leftWidth, page + rightWidth), 0, rangeFilosofiaPra(totalPages - sideWidth + 1, totalPages));
}

function rangeFilosofiaPra(start, end) {
    return Array.from(Array(end - start + 1), (_, i) => i + start);
}

