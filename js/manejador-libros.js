"use strict"

let librosTotales = 0;
let libroActuales = 0;
let currentPage = 1; 
let windowWidth = 0;

$(document).ready(async function () {
    
    windowWidth = $(window).width();
    librosTotales = await getBooks();
    libroActuales = librosTotales;
    $("#accountBooks").text(librosTotales.length);
    setBooks(librosTotales);

    createPagination(librosTotales);

});

$(document).on("click", ".pagination li.current-page:not(.activePage)", function() {
    return showPage(+$(this).text(), libroActuales);
});

$(document).on("click", ".pagination li.previous-page .page-link", function() {
    return showPage(currentPage - 1, libroActuales);
});

$(document).on("click", ".pagination li.next-page .page-link", function() {
    return showPage(currentPage + 1, libroActuales);
})

$(document).on("click", "#botonBusqueda", function(event){ 

    let palabra = $("#busquedaId").val();

    if(palabra.length > 2) {
        filtrarLibros();
    }

});

$(document).on("keydown", "#busquedaId", function(event){ 

    let id = event.which;
    let palabra = $("#busquedaId").val();

    if (id == 13) {
        if(palabra.length > 2) {
            filtrarLibros();
        } else if(palabra.length == 0) {
            reestablecerLibros();
        }
    }

});

$(document).on("keyup", "#busquedaId", function(event){ 

    let key = event.keyCode || event.charCode;
    let palabra = $("#busquedaId").val();

    if(key == 8 || key == 46) {
        if(palabra.length == 0) {
            reestablecerLibros();
        }
    }

});

function filtrarLibros() {

    let palabra = $("#busquedaId").val().toLowerCase();
    palabra = palabra.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    let librosFiltrados = librosTotales.filter((libro) => {

        let titulo = libro.titulo.toLowerCase();
        titulo = titulo.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

        let autor = libro.autor.toLowerCase();
        autor = autor.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

        return titulo.includes(palabra) || autor.includes(palabra) || libro.anio.toLowerCase().includes(palabra);
    });

    libroActuales = librosFiltrados;

    $("#accountBooks").text(librosFiltrados.length);
    setBooks(librosFiltrados);
    createPagination(librosFiltrados);

}

function reestablecerLibros() {
    libroActuales = librosTotales
    $("#accountBooks").text(librosTotales.length);
    setBooks(librosTotales);
    createPagination(librosTotales);
}

function setBooks(libros) {

    if(libros != null) {
        $(".card-content-biblioteca").empty();

        // 375
        // 414
        if(windowWidth < 431) {
            setBooksBy2(libros);
        } else {
            setBooksBy4(libros);
        }

    }
}

function setBooksBy2(libros) {

    let index = 0;
    let libro = null;
    let libro2 = null;

    for(index = 0; index < libros.length; index = index + 2) {
        
        libro = libros[index];

        if(index + 1 < libros.length) {
            libro2 = libros[index + 1];
        }

        if(libro2 != null) {
            $(".card-content-biblioteca").append(
                `<div class='row card-content-biblioteca-row mb-4'>
                    <div class='col-6'>                        
                        <div class='card biblioteca-libros-card'>
                            <img class='card-img-top biblioteca-card-image mx-auto mt-4' src='${libro.imagen}' alt='Card image cap'>
                            <div class='card-body'>
                                <h6 class='card-title biblioteca-card-title'><a class='fatenea-a-negro' target='_blank' href=${libro.url}>${libro.titulo}</a></h6>
                                <h6 class='biblioteca-card-author fatenea-a-azul font-italic'>${libro.autor}</h6>
                                <h6 class='biblioteca-card-year fatenea-a-azul font-italic'>(${libro.anio})</h6>
                            </div>
                        </div>
                    </div>
                    <div class='col-6'>                        
                        <div class='card biblioteca-libros-card'>
                            <img class='card-img-top biblioteca-card-image mx-auto mt-4' src='${libro2.imagen}' alt='Card image cap'>
                            <div class='card-body'>
                                <h6 class='card-title biblioteca-card-title'><a class='fatenea-a-negro' target='_blank' href=${libro2.url}>${libro2.titulo}</a></h6>
                                <h6 class='biblioteca-card-author fatenea-a-azul font-italic'>${libro2.autor}</h6>
                                <h6 class='biblioteca-card-year fatenea-a-azul font-italic'>(${libro2.anio})</h6>
                            </div>
                        </div>
                    </div>
                </div>`);
        } else {
            $(".card-content-biblioteca").append(
                `<div class='row card-content-biblioteca-row mb-4'>
                    <div class='col-6'>                        
                        <div class='card biblioteca-libros-card'>
                            <img class='card-img-top biblioteca-card-image mx-auto mt-4' src='${libro.imagen}' alt='Card image cap'>
                            <div class='card-body'>
                                <h6 class='card-title biblioteca-card-title'><a class='fatenea-a-negro' target='_blank' href=${libro.url}>${libro.titulo}</a></h6>
                                <h6 class='biblioteca-card-author fatenea-a-azul font-italic'>${libro.autor}</h6>
                                <h6 class='biblioteca-card-year fatenea-a-azul font-italic'>(${libro.anio})</h6>
                            </div>
                        </div>
                    </div>
                </div>`);
        }
        libro2 = null;
    }
}

function setBooksBy4(libros) {

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
            $(".card-content-biblioteca").append(
                `<div class='row card-content-biblioteca-row mb-4'>
                    <div class='col-3'>                        
                        <div class='card biblioteca-libros-card'>
                            <img class='card-img-top biblioteca-card-image mx-auto mt-4' src='${libro.imagen}' alt='Card image cap'>
                            <div class='card-body'>
                                <h6 class='card-title biblioteca-card-title'><a class='fatenea-a-negro' target='_blank' href=${libro.url}>${libro.titulo}</a></h6>
                                <h6 class='biblioteca-card-author fatenea-a-azul font-italic'>${libro.autor}</h6>
                                <h6 class='biblioteca-card-year fatenea-a-azul font-italic'>(${libro.anio})</h6>
                            </div>
                        </div>
                    </div>
                    <div class='col-3'>                        
                        <div class='card biblioteca-libros-card'>
                            <img class='card-img-top biblioteca-card-image mx-auto mt-4' src='${libro2.imagen}' alt='Card image cap'>
                            <div class='card-body'>
                                <h6 class='card-title biblioteca-card-title'><a class='fatenea-a-negro' target='_blank' href=${libro2.url}>${libro2.titulo}</a></h6>
                                <h6 class='biblioteca-card-author fatenea-a-azul font-italic'>${libro2.autor}</h6>
                                <h6 class='biblioteca-card-year fatenea-a-azul font-italic'>(${libro2.anio})</h6>
                            </div>
                        </div>
                    </div>
                    <div class='col-3'>                        
                        <div class='card biblioteca-libros-card'>
                            <img class='card-img-top biblioteca-card-image mx-auto mt-4' src='${libro3.imagen}' alt='Card image cap'>
                            <div class='card-body'>
                                <h6 class='card-title biblioteca-card-title'><a class='fatenea-a-negro' target='_blank' href=${libro3.url}>${libro3.titulo}</a></h6>
                                <h6 class='biblioteca-card-author fatenea-a-azul font-italic'>${libro3.autor}</h6>
                                <h6 class='biblioteca-card-year fatenea-a-azul font-italic'>(${libro3.anio})</h6>
                            </div>
                        </div>
                    </div>
                    <div class='col-3'>                        
                        <div class='card biblioteca-libros-card'>
                            <img class='card-img-top biblioteca-card-image mx-auto mt-4' src='${libro4.imagen}' alt='Card image cap'>
                            <div class='card-body'>
                                <h6 class='card-title biblioteca-card-title'><a class='fatenea-a-negro' target='_blank' href=${libro4.url}>${libro4.titulo}</a></h6>
                                <h6 class='biblioteca-card-author fatenea-a-azul font-italic'>${libro4.autor}</h6>
                                <h6 class='biblioteca-card-year fatenea-a-azul font-italic'>(${libro4.anio})</h6>
                            </div>
                        </div>
                    </div>
                </div>`);
        } else if(libro3 != null) {
            $(".card-content-biblioteca").append(
                `<div class='row card-content-biblioteca-row mb-4'>
                    <div class='col-3'>                        
                        <div class='card biblioteca-libros-card'>
                            <img class='card-img-top biblioteca-card-image mx-auto mt-4' src='${libro.imagen}' alt='Card image cap'>
                            <div class='card-body'>
                                <h6 class='card-title biblioteca-card-title'><a class='fatenea-a-negro' target='_blank' href=${libro.url}>${libro.titulo}</a></h6>
                                <h6 class='biblioteca-card-author fatenea-a-azul font-italic'>${libro.autor}</h6>
                                <h6 class='biblioteca-card-year fatenea-a-azul font-italic'>(${libro.anio})</h6>
                            </div>
                        </div>
                    </div>
                    <div class='col-3'>                        
                        <div class='card biblioteca-libros-card'>
                            <img class='card-img-top biblioteca-card-image mx-auto mt-4' src='${libro2.imagen}' alt='Card image cap'>
                            <div class='card-body'>
                                <h6 class='card-title biblioteca-card-title'><a class='fatenea-a-negro' target='_blank' href=${libro2.url}>${libro2.titulo}</a></h6>
                                <h6 class='biblioteca-card-author fatenea-a-azul font-italic'>${libro2.autor}</h6>
                                <h6 class='biblioteca-card-year fatenea-a-azul font-italic'>(${libro2.anio})</h6>
                            </div>
                        </div>
                    </div>
                    <div class='col-3'>                        
                        <div class='card biblioteca-libros-card'>
                            <img class='card-img-top biblioteca-card-image mx-auto mt-4' src='${libro3.imagen}' alt='Card image cap'>
                            <div class='card-body'>
                                <h6 class='card-title biblioteca-card-title'><a class='fatenea-a-negro' target='_blank' href=${libro3.url}>${libro3.titulo}</a></h6>
                                <h6 class='biblioteca-card-author fatenea-a-azul font-italic'>${libro3.autor}</h6>
                                <h6 class='biblioteca-card-year fatenea-a-azul font-italic'>(${libro3.anio})</h6>
                            </div>
                        </div>
                    </div>
                </div>`);
        } else if(libro2 != null) {
            $(".card-content-biblioteca").append(
                `<div class='row card-content-biblioteca-row mb-4'>
                    <div class='col-3'>                        
                        <div class='card biblioteca-libros-card'>
                            <img class='card-img-top biblioteca-card-image mx-auto mt-4' src='${libro.imagen}' alt='Card image cap'>
                            <div class='card-body'>
                                <h6 class='card-title biblioteca-card-title'><a class='fatenea-a-negro' target='_blank' href=${libro.url}>${libro.titulo}</a></h6>
                                <h6 class='biblioteca-card-author fatenea-a-azul font-italic'>${libro.autor}</h6>
                                <h6 class='biblioteca-card-year fatenea-a-azul font-italic'>(${libro.anio})</h6>
                            </div>
                        </div>
                    </div>
                    <div class='col-3'>                        
                        <div class='card biblioteca-libros-card'>
                            <img class='card-img-top biblioteca-card-image mx-auto mt-4' src='${libro2.imagen}' alt='Card image cap'>
                            <div class='card-body'>
                                <h6 class='card-title biblioteca-card-title'><a class='fatenea-a-negro' target='_blank' href=${libro2.url}>${libro2.titulo}</a></h6>
                                <h6 class='biblioteca-card-author fatenea-a-azul font-italic'>${libro2.autor}</h6>
                                <h6 class='biblioteca-card-year fatenea-a-azul font-italic'>(${libro2.anio})</h6>
                            </div>
                        </div>
                    </div>
                </div>`);
        } else {
            $(".card-content-biblioteca").append(
                `<div class='row card-content-biblioteca-row mb-4'>
                    <div class='col-3'>                        
                        <div class='card biblioteca-libros-card'>
                            <img class='card-img-top biblioteca-card-image mx-auto mt-4' src='${libro.imagen}' alt='Card image cap'>
                            <div class='card-body'>
                                <h6 class='card-title biblioteca-card-title'><a class='fatenea-a-negro' target='_blank' href=${libro.url}>${libro.titulo}</a></h6>
                                <h6 class='biblioteca-card-author fatenea-a-azul font-italic'>${libro.autor}</h6>
                                <h6 class='biblioteca-card-year fatenea-a-azul font-italic'>(${libro.anio})</h6>
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

function getBooks() {
    return new Promise((resolve, reject) => {
      fetch("/file/libros.json")
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

function createPagination(libros) {

    $(".pagination").empty();

    if(libros.length > 0) {

        let nextString = "Siguiente";
        let previousString = "Anterior";

        if(windowWidth < 431) {
            nextString = ">>";
            previousString = "<<";
        }

        $(".pagination").append(
            $("<li>").addClass("page-item").addClass("previous-page").append($("<a>").addClass("page-link")
                .attr({href: "javascript:void(0)"}).text(previousString)),
            $("<li>").addClass("page-item").addClass("next-page").append($("<a>").addClass("page-link")
                .attr({href: "javascript:void(0)"}).text(nextString))
        );

        showPage(1, libros);
    } else {
        $(".pagination").append(
            $("<h4>").text("No hay resultados")
        )
    }

}

function showPage(pageToShow, libros) {

    let numberOfItems = libros.length;
    let limitPerPage = 1; // how many rows you want to display
    let numberItemsPerPage = 4; // how many items have each row
    let paginationSize = 7; // how many page elements visible in the pagination

    if(windowWidth < 431) {
        numberItemsPerPage = 2; // how many items have each row
    } 

    let totalPages = Math.ceil(numberOfItems / (limitPerPage * numberItemsPerPage));


    if(pageToShow < 1 || pageToShow > totalPages) {
        return false;
    }

    currentPage = pageToShow;

    $(".card-content-biblioteca .card-content-biblioteca-row").hide().slice((currentPage - 1) * limitPerPage, 
                                                                    currentPage * limitPerPage).show();

    $(".pagination li").slice(1, -1).remove();
    
    getPageList(totalPages, currentPage, paginationSize).forEach(item => {
        $("<li>").addClass("page-item").addClass(item ? "current-page" : "dots").toggleClass("activePage", item === currentPage)
            .append($("<a>").addClass("page-link").attr({href: "javascript:void(0)"}).text(item || "...")).insertBefore(".next-page");
    });

    $(".previous-page").toggleClass("disable", currentPage === 1);
    $(".next-page").toggleClass("disable", currentPage === totalPages);

    return true;

}

function getPageList(totalPages, page, maxLength) {
    
    let sideWidth = maxLength < 9 ? 1 : 2;
    let leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
    let rightWidth = (maxLength - sideWidth * 2 - 3) >> 1;

    if(totalPages <= maxLength) {
        return range(1, totalPages);
    }

    if(page <= maxLength - sideWidth - 1 - rightWidth) {
        return range(1, maxLength - sideWidth - 1).concat(0, range(totalPages - sideWidth + 1, totalPages));
    }

    if(page >= totalPages - sideWidth - 1 -rightWidth) {
        return range(1, sideWidth).concat(0, range(totalPages - sideWidth - 1 -rightWidth -leftWidth, totalPages));
    }

    return range(1, sideWidth).concat(0, range(page - leftWidth, page + rightWidth), 0, range(totalPages - sideWidth + 1, totalPages));
}

function range(start, end) {
    return Array.from(Array(end - start + 1), (_, i) => i + start);
}

