"use strict"

let librosTotalesEducacionTra = 0;
let libroActualesEducacionTra = 0;
let currentPageEducacionTra = 1; 
let windowWidthEducacionTra = 0;

$(document).ready(async function () {
    
    windowWidthEducacionTra = $(window).width();
    librosTotalesEducacionTra = await getBooksEducacionTra();
    libroActualesEducacionTra = librosTotalesEducacionTra;
    $("#accountEducacionTraBooks").text(librosTotalesEducacionTra.length);
    setBooksEducacionTra(librosTotalesEducacionTra);

    if(librosTotalesEducacionTra.length > 4) {
        createPaginationEducacionTra(librosTotalesEducacionTra);
        $("#divBusquedaEducacionTra").removeClass("d-none");
    }

});

$(document).on("click", ".pagination.pagination-educacion-tra li.current-page-educacion-tra:not(.activePage-educacion-tra)", function() {
    return showPageEducacionTra(+$(this).text(), libroActualesEducacionTra);
});

$(document).on("click", ".pagination.pagination-educacion-tra li.previous-page-educacion-tra .page-link", function() {
    return showPageEducacionTra(currentPageEducacionTra - 1, libroActualesEducacionTra);
});

$(document).on("click", ".pagination.pagination-educacion-tra li.next-page-educacion-tra .page-link", function() {
    return showPageEducacionTra(currentPageEducacionTra + 1, libroActualesEducacionTra);
})

$(document).on("click", "#botonBusquedaEducacionTra", function(event){ 

    let palabra = $("#busquedaEducacionTraId").val();

    if(palabra.length > 2) {
        filtrarLibrosEducacionTra();
    }

});

$(document).on("keydown", "#busquedaEducacionTraId", function(event){ 

    let id = event.which;
    let palabra = $("#busquedaEducacionTraId").val();

    if (id == 13) {
        if(palabra.length > 2) {
            filtrarLibrosEducacionTra();
        } else if(palabra.length == 0) {
            reestablecerLibrosEducacionTra();
        }
    }

});

$(document).on("keyup", "#busquedaEducacionTraId", function(event){ 

    let key = event.keyCode || event.charCode;
    let palabra = $("#busquedaEducacionTraId").val();

    if(key == 8 || key == 46) {
        if(palabra.length == 0) {
            reestablecerLibrosEducacionTra();
        }
    }

});

function filtrarLibrosEducacionTra() {

    let palabra = $("#busquedaEducacionTraId").val().toLowerCase();
    palabra = palabra.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    let librosFiltrados = librosTotalesEducacionTra.filter((libro) => {

        let titulo = libro.titulo.toLowerCase();
        titulo = titulo.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

        let autor = libro.autor.toLowerCase();
        autor = autor.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

        return titulo.includes(palabra) || autor.includes(palabra) || libro.anio.toLowerCase().includes(palabra);
    });

    libroActualesEducacionTra = librosFiltrados;

    $("#accountEducacionTraBooks").text(librosFiltrados.length);
    setBooksEducacionTra(librosFiltrados);
    createPaginationEducacionTra(librosFiltrados);

}

function reestablecerLibrosEducacionTra() {
    libroActualesEducacionTra = librosTotalesEducacionTra
    $("#accountEducacionTraBooks").text(librosTotalesEducacionTra.length);
    setBooksEducacionTra(librosTotalesEducacionTra);
    createPaginationEducacionTra(librosTotalesEducacionTra);
}

function setBooksEducacionTra(libros) {

    if(libros != null) {
        $(".card-content-educacion-tra-biblioteca").empty();

        // 375
        // 414
        if(windowWidthEducacionTra < 431) {
            setBooksEducacionTraBy2(libros);
        } else {
            setBooksEducacionTraBy4(libros);
        }

    }
}

function setBooksEducacionTraBy2(libros) {

    let index = 0;
    let libro = null;
    let libro2 = null;

    for(index = 0; index < libros.length; index = index + 2) {
        
        libro = libros[index];

        if(index + 1 < libros.length) {
            libro2 = libros[index + 1];
        }

        if(libro2 != null) {
            $(".card-content-educacion-tra-biblioteca").append(
                `<div class='row card-content-educacion-tra-biblioteca-row mb-4'>
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
            $(".card-content-educacion-tra-biblioteca").append(
                `<div class='row card-content-educacion-tra-biblioteca-row mb-4'>
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

function setBooksEducacionTraBy4(libros) {

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
            $(".card-content-educacion-tra-biblioteca").append(
                `<div class='row card-content-educacion-tra-biblioteca-row mb-4'>
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
            $(".card-content-educacion-tra-biblioteca").append(
                `<div class='row card-content-educacion-tra-biblioteca-row mb-4'>
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
            $(".card-content-educacion-tra-biblioteca").append(
                `<div class='row card-content-educacion-tra-biblioteca-row mb-4'>
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
            $(".card-content-educacion-tra-biblioteca").append(
                `<div class='row card-content-educacion-tra-biblioteca-row mb-4'>
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

function getBooksEducacionTra() {
    return new Promise((resolve, reject) => {
      fetch("file/educacion-tra-libros.json")
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

function createPaginationEducacionTra(libros) {

    $(".pagination.pagination-educacion-tra").empty();

    if(libros.length > 0) {
        
        let nextString = "Siguiente";
        let previousString = "Anterior";

        if(windowWidthEducacionTra < 431) {
            nextString = ">>";
            previousString = "<<";
        }

        $(".pagination.pagination-educacion-tra").append(
            $("<li>").addClass("page-item-educacion-tra").addClass("previous-page-educacion-tra").append($("<a>").addClass("page-link")
                .attr({href: "javascript:void(0)"}).text(previousString)),
            $("<li>").addClass("page-item-educacion-tra").addClass("next-page-educacion-tra").append($("<a>").addClass("page-link")
                .attr({href: "javascript:void(0)"}).text(nextString))
        );

        showPageEducacionTra(1, libros);
    } else {
        $(".pagination.pagination-educacion-tra").append(
            $("<h4>").text("No hay resultados")
        )
    }

}

function showPageEducacionTra(pageToShow, libros) {

    let numberOfItems = libros.length;
    let limitPerPage = 1; // how many rows you want to display
    let numberItemsPerPage = 4; // how many items have each row
    let paginationSize = 7; // how many page elements visible in the pagination

    if(windowWidthEducacionTra < 431) {
        numberItemsPerPage = 2; // how many items have each row
    } 

    let totalPages = Math.ceil(numberOfItems / (limitPerPage * numberItemsPerPage));


    if(pageToShow < 1 || pageToShow > totalPages) {
        return false;
    }

    currentPageEducacionTra = pageToShow;

    $(".card-content-educacion-tra-biblioteca .card-content-educacion-tra-biblioteca-row").hide().slice((currentPageEducacionTra - 1) * limitPerPage, 
                                                                    currentPageEducacionTra * limitPerPage).show();

    $(".pagination.pagination-educacion-tra li").slice(1, -1).remove();

    getPageListEducacionTra(totalPages, currentPageEducacionTra, paginationSize).forEach(item => {
        $("<li>").addClass("page-item-educacion-tra").addClass(item ? "current-page-educacion-tra" : "dots").toggleClass("activePage-educacion-tra", item === currentPageEducacionTra)
            .append($("<a>").addClass("page-link").attr({href: "javascript:void(0)"}).text(item || "...")).insertBefore(".next-page-educacion-tra");
    });

    $(".previous-page-educacion-tra").toggleClass("disable", currentPageEducacionTra === 1);
    $(".next-page-educacion-tra").toggleClass("disable", currentPageEducacionTra === totalPages);

    return true;

}

function getPageListEducacionTra(totalPages, page, maxLength) {
    
    let sideWidth = maxLength < 9 ? 1 : 2;
    let leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
    let rightWidth = (maxLength - sideWidth * 2 - 3) >> 1;

    if(totalPages <= maxLength) {
        return rangeEducacionTra(1, totalPages);
    }

    if(page <= maxLength - sideWidth - 1 - rightWidth) {
        return rangeEducacionTra(1, maxLength - sideWidth - 1).concat(0, rangeEducacionTra(totalPages - sideWidth + 1, totalPages));
    }

    if(page >= totalPages - sideWidth - 1 -rightWidth) {
        return rangeEducacionTra(1, sideWidth).concat(0, rangeEducacionTra(totalPages - sideWidth - 1 -rightWidth -leftWidth, totalPages));
    }

    return rangeEducacionTra(1, sideWidth).concat(0, rangeEducacionTra(page - leftWidth, page + rightWidth), 0, rangeEducacionTra(totalPages - sideWidth + 1, totalPages));
}

function rangeEducacionTra(start, end) {
    return Array.from(Array(end - start + 1), (_, i) => i + start);
}

