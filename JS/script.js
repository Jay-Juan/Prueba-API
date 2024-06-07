// Dirección de la API
const API = 'https://avwx.rest/api/metar/';

// Función para traer la información de la api
//    Lee el input del buscador 
//    Completa la petición usando la dirección en línea 2 y el input
async function traerMetar(fuction) {
    let icaoInput = document.getElementById("buscador")
    let icaoCode = icaoInput.value;

    const response = await fetch(`${API}/${icaoCode}`, {
        mode: "cors",
        method: "GET",
        headers: {
            "Authorization": "teTvrLx_-0c9XaWNWpr2qzJEia4gxlft5kRekDBp8Pg",
        }
    })
    await response.json()
        .then(data => { fuction(data); console.log(data) });
}

// Crea el array con los datos con los datos filtrados
//    Separa los datos traidos de la API
//    Guarda los datos separados en un array nuevo
function saveArray(response) {
    let icaoInput = document.getElementById("buscador")
    let icaoCode = icaoInput.value.toUpperCase();
    let arrayRepr = [];
    for (const prop in response) {
        if (Array.isArray(response[prop])) {
            response[prop].forEach(elemento => {
                arrayRepr.push(elemento.repr);
            })
        } else if (response[prop]) {
            arrayRepr.push(response[prop].repr);
        }
    }
    for (const prop in response) {

    }
    arrayRepr.push(response.remarks)
    arrayRepr.unshift(icaoCode)

    let arrayFiltrado = arrayRepr.filter(Boolean)  // Quita los undefined
    if (sessionStorage.getItem("array") !== undefined) {
        sessionStorage.removeItem("array")
        sessionStorage.setItem("array", JSON.stringify(arrayFiltrado))
    } else {
        sessionStorage.setItem("array", JSON.stringify(arrayFiltrado))
    }
    return console.log(arrayFiltrado);

}




// Función que imprime los botones en el HTML
//    Utiliza el contenedor con ID contenedor para colocar los botones ahí
//    Utiliza Bootstrap para darle formato y ponerles un modal
//    El modal se utiliza para mostrar las explicaciones
function mostrarMetar(info) {
    const contenedor = document.getElementById("container")
    for (let i = 0; i < info.length; i++) {
        contenedor.innerHTML += `
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#identify${info[i].substring(0, 2)}">
        ${info[i]}
        </button>
        <div class="modal fade" id="identify${info[i].substring(0, 2)}" tabindex="-1" aria-labelledby="modal-title" aria-hidden= "true">
            <div class="modal-dialog">
                <div class="modal-content">    
                    <div class="modal-header">
                        <h5 class="modal-title" id="modal-title">${info[i]}</h5> 
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="fs-5">
                            <p><strong>Designación de OACI para cada aeropuerto</strong><br>Las primeras dos letras indican el país donde se ubica y las últimas dos letras indican el aeropuerto al que corresponde.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    }
}
/////////////////////////////////////// En Progreso /////////////////////////////////////// En Progreso /////////////////////////////////////// En Progreso ///////////////////////////////////////

function limpiarBotones(){ 
    let padre = document.getElementById("container")
    while(padre.firstChild) {
       padre.removeChild(padre.firstChild) 
    }
}
/////////////////////////////////////// En Progreso /////////////////////////////////////// En Progreso /////////////////////////////////////// En Progreso ///////////////////////////////////////

// DOM Content Loaded
//    Define todos los botones
//    Escucha todos los botones
//    El botón genérico toma lo que haya escrito en el buscador y trae el metar
//    Los botones preseteados le dan el value al input de texto y traen el metar
//    Al final hay un evento para que acepte que el buscador se active pulsando enter
document.addEventListener("DOMContentLoaded", () => {
    let botonRaw = document.getElementById("botonRaw")
    let botonCyow = document.getElementById("botonCyow")
    let botonSumu = document.getElementById("botonSumu")
    let botonOoms = document.getElementById("botonOoms")
    let botonKjfk = document.getElementById("botonKjfk")
    let botonOejn = document.getElementById("botonOejn")
    var arrayJson = sessionStorage.getItem("array")
    var array = JSON.parse(arrayJson)

    botonCyow.addEventListener("click", () => {             /*  CYOW  */
        document.getElementById("buscador").value = "CYOW"  /*  CYOW  */
        limpiarBotones()                                    /*  CYOW  */
        traerMetar(saveArray)                               /*  CYOW  */
        mostrarMetar(array)                                 /*  CYOW  */
    })                                                      /*  CYOW  */

    botonSumu.addEventListener("click", () => {             /*  SUMU  */
        document.getElementById("buscador").value = "SUMU"  /*  SUMU  */
        limpiarBotones()
        traerMetar(saveArray)                               /*  SUMU  */
        mostrarMetar(array)                                 /*  SUMU  */
    })                                                      /*  SUMU  */

    botonOoms.addEventListener("click", () => {             /*  OOMS  */
        document.getElementById("buscador").value = "OOMS"  /*  OOMS  */
        traerMetar(saveArray)                               /*  OOMS  */
        mostrarMetar(array)                                 /*  OOMS  */
    })                                                      /*  OOMS  */

    botonKjfk.addEventListener("click", () => {             /*  KJFK  */
        document.getElementById("buscador").value = "KJFK"  /*  KJFK  */
        traerMetar(saveArray)                               /*  KJFK  */
        mostrarMetar(array)                                 /*  KJFK  */
    })                                                      /*  KJFK  */

    botonOejn.addEventListener("click", () => {             /*  OEJN  */
        document.getElementById("buscador").value = "OEJN"  /*  OEJN  */
        traerMetar(saveArray)                               /*  OEJN  */
        mostrarMetar(array)                                 /*  OEJN  */
    })                                                      /*  OEJN  */

    botonRaw.addEventListener("click", () => {              /*  General  */
        traerMetar(saveArray)                               /*  General  */
        mostrarMetar(array)                                 /*  General  */
    })                                                      /*  General  */

    var input = document.getElementById("buscador");
    input.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            botonRaw.click();
            console.log()
        }
    });
})
