"use strict"

let librosTotalesBioEco = 0;
let libroActualesBioEco = 0;
let currentPageBioEco = 1; 
let windowWidthBioEco = 0;

$(document).ready(async function () {
    
    windowWidthBioEco = $(window).width();
    librosTotalesBioEco = await getBooksBioEco();
    libroActualesBioEco = librosTotalesBioEco;
    $("#accountBioEcoBooks").text(librosTotalesBioEco.length);
    setBooksBioEco(librosTotalesBioEco);

    if(librosTotalesBioEco.length > 4) {
        createPaginationBioEco(librosTotalesBioEco);
        $("#divBusquedaBioEco").removeClass("d-none");
    }

});

$(document).on("click", ".pagination.pagination-bio-eco li.current-page-bio-eco:not(.activePage-bio-eco)", function() {
    return showPageBioEco(+$(this).text(), libroActualesBioEco);
});

$(document).on("click", ".pagination.pagination-bio-eco li.previous-page-bio-eco .page-link", function() {
    return showPageBioEco(currentPageBioEco - 1, libroActualesBioEco);
});

$(document).on("click", ".pagination.pagination-bio-eco li.next-page-bio-eco .page-link", function() {
    return showPageBioEco(currentPageBioEco + 1, libroActualesBioEco);
})

$(document).on("click", "#botonBusquedaBioEco", function(event){ 

    let palabra = $("#busquedaBioEcoId").val();

    if(palabra.length > 2) {
        filtrarLibrosBioEco();
    }

});

$(document).on("keydown", "#busquedaBioEcoId", function(event){ 

    let id = event.which;
    let palabra = $("#busquedaBioEcoId").val();

    if (id == 13) {
        if(palabra.length > 2) {
            filtrarLibrosBioEco();
        } else if(palabra.length == 0) {
            reestablecerLibrosBioEco();
        }
    }

});

$(document).on("keyup", "#busquedaBioEcoId", function(event){ 

    let key = event.keyCode || event.charCode;
    let palabra = $("#busquedaBioEcoId").val();

    if(key == 8 || key == 46) {
        if(palabra.length == 0) {
            reestablecerLibrosBioEco();
        }
    }

});

function filtrarLibrosBioEco() {

    let palabra = $("#busquedaBioEcoId").val().toLowerCase();
    palabra = palabra.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    let librosFiltrados = librosTotalesBioEco.filter((libro) => {

        let titulo = libro.titulo.toLowerCase();
        titulo = titulo.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

        let autor = libro.autor.toLowerCase();
        autor = autor.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

        return titulo.includes(palabra) || autor.includes(palabra) || libro.anio.toLowerCase().includes(palabra);
    });

    libroActualesBioEco = librosFiltrados;

    $("#accountBioEcoBooks").text(librosFiltrados.length);
    setBooksBioEco(librosFiltrados);
    createPaginationBioEco(librosFiltrados);

}

function reestablecerLibrosBioEco() {
    libroActualesBioEco = librosTotalesBioEco
    $("#accountBioEcoBooks").text(librosTotalesBioEco.length);
    setBooksBioEco(librosTotalesBioEco);
    createPaginationBioEco(librosTotalesBioEco);
}

function setBooksBioEco(libros) {

    if(libros != null) {
        $(".card-content-bio-eco-biblioteca").empty();

        // 375
        // 414
        if(windowWidthBioEco < 431) {
            setBooksBioEcoBy2(libros);
        } else {
            setBooksBioEcoBy4(libros);
        }

    }
}

function setBooksBioEcoBy2(libros) {

    let index = 0;
    let libro = null;
    let libro2 = null;

    for(index = 0; index < libros.length; index = index + 2) {
        
        libro = libros[index];

        if(index + 1 < libros.length) {
            libro2 = libros[index + 1];
        }

        if(libro2 != null) {
            $(".card-content-bio-eco-biblioteca").append(
                `<div class='row card-content-bio-eco-biblioteca-row mb-4'>
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
            $(".card-content-bio-eco-biblioteca").append(
                `<div class='row card-content-bio-eco-biblioteca-row mb-4'>
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

function setBooksBioEcoBy4(libros) {

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
            $(".card-content-bio-eco-biblioteca").append(
                `<div class='row card-content-bio-eco-biblioteca-row mb-4'>
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
            $(".card-content-bio-eco-biblioteca").append(
                `<div class='row card-content-bio-eco-biblioteca-row mb-4'>
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
            $(".card-content-bio-eco-biblioteca").append(
                `<div class='row card-content-bio-eco-biblioteca-row mb-4'>
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
            $(".card-content-bio-eco-biblioteca").append(
                `<div class='row card-content-bio-eco-biblioteca-row mb-4'>
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

function getBooksBioEco() {
    return new Promise((resolve, reject) => {
      fetch("file/bio-eco-libros.json")
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

function createPaginationBioEco(libros) {

    $(".pagination.pagination-bio-eco").empty();
    console.log("createPaginationBioEco");
    if(libros.length > 0) {
        console.log("createPaginationBioEco>0");
        let nextString = "Siguiente";
        let previousString = "Anterior";

        if(windowWidthBioEco < 431) {
            nextString = ">>";
            previousString = "<<";
        }

        $(".pagination.pagination-bio-eco").append(
            $("<li>").addClass("page-item-bio-eco").addClass("previous-page-bio-eco").append($("<a>").addClass("page-link")
                .attr({href: "javascript:void(0)"}).text(previousString)),
            $("<li>").addClass("page-item-bio-eco").addClass("next-page-bio-eco").append($("<a>").addClass("page-link")
                .attr({href: "javascript:void(0)"}).text(nextString))
        );

        showPageBioEco(1, libros);
    } else {
        $(".pagination.pagination-bio-eco").append(
            $("<h4>").text("No hay resultados")
        )
    }

}

function showPageBioEco(pageToShow, libros) {

    let numberOfItems = libros.length;
    let limitPerPage = 1; // how many rows you want to display
    let numberItemsPerPage = 4; // how many items have each row
    let paginationSize = 7; // how many page elements visible in the pagination

    if(windowWidthBioEco < 431) {
        numberItemsPerPage = 2; // how many items have each row
    } 

    let totalPages = Math.ceil(numberOfItems / (limitPerPage * numberItemsPerPage));


    if(pageToShow < 1 || pageToShow > totalPages) {
        return false;
    }

    currentPageBioEco = pageToShow;

    $(".card-content-bio-eco-biblioteca .card-content-bio-eco-biblioteca-row").hide().slice((currentPageBioEco - 1) * limitPerPage, 
                                                                    currentPageBioEco * limitPerPage).show();

    $(".pagination.pagination-bio-eco li").slice(1, -1).remove();
    
    console.log("bioeco get: " + getPageListBioEco(totalPages, currentPageBioEco, paginationSize));

    getPageListBioEco(totalPages, currentPageBioEco, paginationSize).forEach(item => {
        $("<li>").addClass("page-item-bio-eco").addClass(item ? "current-page-bio-eco" : "dots").toggleClass("activePage-bio-eco", item === currentPageBioEco)
            .append($("<a>").addClass("page-link").attr({href: "javascript:void(0)"}).text(item || "...")).insertBefore(".next-page-bio-eco");
    });

    $(".previous-page-bio-eco").toggleClass("disable", currentPageBioEco === 1);
    $(".next-page-bio-eco").toggleClass("disable", currentPageBioEco === totalPages);

    return true;

}

function getPageListBioEco(totalPages, page, maxLength) {
    
    let sideWidth = maxLength < 9 ? 1 : 2;
    let leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
    let rightWidth = (maxLength - sideWidth * 2 - 3) >> 1;

    if(totalPages <= maxLength) {
        return rangeBioEco(1, totalPages);
    }

    if(page <= maxLength - sideWidth - 1 - rightWidth) {
        return rangeBioEco(1, maxLength - sideWidth - 1).concat(0, rangeBioEco(totalPages - sideWidth + 1, totalPages));
    }

    if(page >= totalPages - sideWidth - 1 -rightWidth) {
        return rangeBioEco(1, sideWidth).concat(0, rangeBioEco(totalPages - sideWidth - 1 -rightWidth -leftWidth, totalPages));
    }

    return rangeBioEco(1, sideWidth).concat(0, rangeBioEco(page - leftWidth, page + rightWidth), 0, rangeBioEco(totalPages - sideWidth + 1, totalPages));
}

function rangeBioEco(start, end) {
    return Array.from(Array(end - start + 1), (_, i) => i + start);
}

