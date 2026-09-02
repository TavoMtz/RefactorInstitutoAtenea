"use strict"

let librosTotalesHumanismo = 0;
let libroActualesHumanismo = 0;
let currentPageHumanismo = 1; 
let windowWidthHumanismo = 0;

$(document).ready(async function () {
    
    windowWidthHumanismo = $(window).width();
    librosTotalesHumanismo = await getBooksHumanismo();
    libroActualesHumanismo = librosTotalesHumanismo;
    $("#accountHumanismoBooks").text(librosTotalesHumanismo.length);
    setBooksHumanismo(librosTotalesHumanismo);

    if(librosTotalesHumanismo.length > 4) {
        createPaginationHumanismo(librosTotalesHumanismo);
        $("#divBusquedaHumanismo").removeClass("d-none");
    }

});

$(document).on("click", ".pagination.pagination-humanismo li.current-page-humanismo:not(.activePage-humanismo)", function() {
    return showPageHumanismo(+$(this).text(), libroActualesHumanismo);
});

$(document).on("click", ".pagination.pagination-humanismo li.previous-page-humanismo .page-link", function() {
    return showPageHumanismo(currentPageHumanismo - 1, libroActualesHumanismo);
});

$(document).on("click", ".pagination.pagination-humanismo li.next-page-humanismo .page-link", function() {
    return showPageHumanismo(currentPageHumanismo + 1, libroActualesHumanismo);
})

$(document).on("click", "#botonBusquedaHumanismo", function(event){ 

    let palabra = $("#busquedaHumanismoId").val();

    if(palabra.length > 2) {
        filtrarLibrosHumanismo();
    }

});

$(document).on("keydown", "#busquedaHumanismoId", function(event){ 

    let id = event.which;
    let palabra = $("#busquedaHumanismoId").val();

    if (id == 13) {
        if(palabra.length > 2) {
            filtrarLibrosHumanismo();
        } else if(palabra.length == 0) {
            reestablecerLibrosHumanismo();
        }
    }

});

$(document).on("keyup", "#busquedaHumanismoId", function(event){ 

    let key = event.keyCode || event.charCode;
    let palabra = $("#busquedaHumanismoId").val();

    if(key == 8 || key == 46) {
        if(palabra.length == 0) {
            reestablecerLibrosHumanismo();
        }
    }

});

function filtrarLibrosHumanismo() {

    let palabra = $("#busquedaHumanismoId").val().toLowerCase();
    palabra = palabra.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    let librosFiltrados = librosTotalesHumanismo.filter((libro) => {

        let titulo = libro.titulo.toLowerCase();
        titulo = titulo.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

        let autor = libro.autor.toLowerCase();
        autor = autor.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

        return titulo.includes(palabra) || autor.includes(palabra) || libro.anio.toLowerCase().includes(palabra);
    });

    libroActualesHumanismo = librosFiltrados;

    $("#accountHumanismoBooks").text(librosFiltrados.length);
    setBooksHumanismo(librosFiltrados);
    createPaginationHumanismo(librosFiltrados);

}

function reestablecerLibrosHumanismo() {
    libroActualesHumanismo = librosTotalesHumanismo
    $("#accountHumanismoBooks").text(librosTotalesHumanismo.length);
    setBooksHumanismo(librosTotalesHumanismo);
    createPaginationHumanismo(librosTotalesHumanismo);
}

function setBooksHumanismo(libros) {

    if(libros != null) {
        $(".card-content-humanismo-biblioteca").empty();

        // 375
        // 414
        if(windowWidthHumanismo < 431) {
            setBooksHumanismoBy2(libros);
        } else {
            setBooksHumanismoBy4(libros);
        }

    }
}

function setBooksHumanismoBy2(libros) {

    let index = 0;
    let libro = null;
    let libro2 = null;

    for(index = 0; index < libros.length; index = index + 2) {
        
        libro = libros[index];

        if(index + 1 < libros.length) {
            libro2 = libros[index + 1];
        }

        if(libro2 != null) {
            $(".card-content-humanismo-biblioteca").append(
                `<div class='row card-content-humanismo-biblioteca-row mb-4'>
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
            $(".card-content-humanismo-biblioteca").append(
                `<div class='row card-content-humanismo-biblioteca-row mb-4'>
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

function setBooksHumanismoBy4(libros) {

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
            $(".card-content-humanismo-biblioteca").append(
                `<div class='row card-content-humanismo-biblioteca-row mb-4'>
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
            $(".card-content-humanismo-biblioteca").append(
                `<div class='row card-content-humanismo-biblioteca-row mb-4'>
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
            $(".card-content-humanismo-biblioteca").append(
                `<div class='row card-content-humanismo-biblioteca-row mb-4'>
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
            $(".card-content-humanismo-biblioteca").append(
                `<div class='row card-content-humanismo-biblioteca-row mb-4'>
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

function getBooksHumanismo() {
    return new Promise((resolve, reject) => {
      fetch("file/humanismo-libros.json")
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

function createPaginationHumanismo(libros) {

    $(".pagination.pagination-humanismo").empty();

    if(libros.length > 0) {
        
        let nextString = "Siguiente";
        let previousString = "Anterior";

        if(windowWidthHumanismo < 431) {
            nextString = ">>";
            previousString = "<<";
        }

        $(".pagination.pagination-humanismo").append(
            $("<li>").addClass("page-item-humanismo").addClass("previous-page-humanismo").append($("<a>").addClass("page-link")
                .attr({href: "javascript:void(0)"}).text(previousString)),
            $("<li>").addClass("page-item-humanismo").addClass("next-page-humanismo").append($("<a>").addClass("page-link")
                .attr({href: "javascript:void(0)"}).text(nextString))
        );

        showPageHumanismo(1, libros);
    } else {
        $(".pagination.pagination-humanismo").append(
            $("<h4>").text("No hay resultados")
        )
    }

}

function showPageHumanismo(pageToShow, libros) {

    let numberOfItems = libros.length;
    let limitPerPage = 1; // how many rows you want to display
    let numberItemsPerPage = 4; // how many items have each row
    let paginationSize = 7; // how many page elements visible in the pagination

    if(windowWidthHumanismo < 431) {
        numberItemsPerPage = 2; // how many items have each row
    } 

    let totalPages = Math.ceil(numberOfItems / (limitPerPage * numberItemsPerPage));


    if(pageToShow < 1 || pageToShow > totalPages) {
        return false;
    }

    currentPageHumanismo = pageToShow;

    $(".card-content-humanismo-biblioteca .card-content-humanismo-biblioteca-row").hide().slice((currentPageHumanismo - 1) * limitPerPage, 
                                                                    currentPageHumanismo * limitPerPage).show();

    $(".pagination.pagination-humanismo li").slice(1, -1).remove();

    getPageListHumanismo(totalPages, currentPageHumanismo, paginationSize).forEach(item => {
        $("<li>").addClass("page-item-humanismo").addClass(item ? "current-page-humanismo" : "dots").toggleClass("activePage-humanismo", item === currentPageHumanismo)
            .append($("<a>").addClass("page-link").attr({href: "javascript:void(0)"}).text(item || "...")).insertBefore(".next-page-humanismo");
    });

    $(".previous-page-humanismo").toggleClass("disable", currentPageHumanismo === 1);
    $(".next-page-humanismo").toggleClass("disable", currentPageHumanismo === totalPages);

    return true;

}

function getPageListHumanismo(totalPages, page, maxLength) {
    
    let sideWidth = maxLength < 9 ? 1 : 2;
    let leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
    let rightWidth = (maxLength - sideWidth * 2 - 3) >> 1;

    if(totalPages <= maxLength) {
        return rangeHumanismo(1, totalPages);
    }

    if(page <= maxLength - sideWidth - 1 - rightWidth) {
        return rangeHumanismo(1, maxLength - sideWidth - 1).concat(0, rangeHumanismo(totalPages - sideWidth + 1, totalPages));
    }

    if(page >= totalPages - sideWidth - 1 -rightWidth) {
        return rangeHumanismo(1, sideWidth).concat(0, rangeHumanismo(totalPages - sideWidth - 1 -rightWidth -leftWidth, totalPages));
    }

    return rangeHumanismo(1, sideWidth).concat(0, rangeHumanismo(page - leftWidth, page + rightWidth), 0, rangeHumanismo(totalPages - sideWidth + 1, totalPages));
}

function rangeHumanismo(start, end) {
    return Array.from(Array(end - start + 1), (_, i) => i + start);
}

