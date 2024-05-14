const API = 'https://avwx.rest/api/metar/';


async function traerMetar(funcion) {
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
        .then(data => { funcion(data); console.log(data); });
}

function mostrarMetar(info) {
    const contenedor = document.getElementById("container")
    let icaoInput = document.getElementById("buscador")
    let icaoCode = icaoInput.value;
    let visibility = info.visibility.repr
    let intro = `<div>${icaoCode.toUpperCase()} &nbsp ${info.time.repr}</div>`;
    let outro = `<div>${info.temperature.repr}/${info.dewpoint.repr}&nbsp${info.altimeter.repr}&nbsp${info.remarks}</div>`;

    contenedor.innerHTML = intro;

    if (info.wind_gust) {
        contenedor.innerHTML +=
            `<div>${info.wind_direction.repr}${info.wind_speed.repr}G${info.wind_gust.repr} KT</div>`

    } else {
        contenedor.innerHTML +=
            `<div>${info.wind_direction.repr}${info.wind_speed.repr} KT</div>`

    }

    info.wind_variable_direction.forEach(function (variable) {
        contenedor.innerHTML +=
            `<div> ${variable.repr}</div>`

    })


    if (visibility.length < 4) {
        contenedor.innerHTML +=
            `<div> ${info.visibility.repr} SM</div>`

    } else {
        contenedor.innerHTML +=
            `<div> ${info.visibility.repr}</div>`

    }

    info.wx_codes.forEach(function (weather) {
        contenedor.innerHTML +=
            `<div>${weather.repr}</div>`

    });
    info.clouds.forEach(function (nube) {
        let nubeAlt = nube.altitude
        if (nubeAlt.toString().length === 1) {
            contenedor.innerHTML +=
                `<div class="modal-body"><div class="fs-5"> <button class="btn btn-secondary" data-bs-toggle="popover" title="Scattered" data-bs-content="si hay ntre 3 y 4 octas de nubes en el cielo se utiliza SCT, significa nubes dispersas">${nube.type}</button></div></div><div> 00${nube.altitude}</div>`
        } else if (nubeAlt.toString().length === 2) {
            contenedor.innerHTML +=
                `<div class="modal-body"><div class="fs-5"> <button class="btn btn-secondary" data-bs-toggle="popover" title="Scattered" data-bs-content="si hay ntre 3 y 4 octas de nubes en el cielo se utiliza SCT, significa nubes dispersas">${nube.type}</button></div></div><div> 0${nube.altitude}</div>`
        } else {
            contenedor.innerHTML +=
                `<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#dataModal">
                ${nube.type}
                </button>
                <div class="modal fade" id="dataModal" tabindex="-1" aria-labelledby="modal-title" aria-hidden= "true">
                    <div class="modal-dialog">
                        <div class="modal-content">    
                            <div class="modal-header">
                                <h5 class="modal-title" id="modal-title">${nube.type}</h5> 
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="fs-5">
                                    <p>Scattered: Si hay entre 3 y 4 octas de nubes en el cielo se utiliza SCT, significa nubes dispersas</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                ${nube.altitude}
                </div>`
        }
    });

    contenedor.innerHTML += outro
}

document.addEventListener("DOMContentLoaded", () => {
    let botonRaw = document.getElementById("botonRaw")

    botonRaw.addEventListener("click", () => {
        traerMetar(mostrarMetar)
    })

    var input = document.getElementById("buscador");
    input.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            botonRaw.click();
            console.log()
        }
    });
})

/* 
--------------------       Modal para abrir secciones del metar       --------------------

<div class="modal-body">
  <h2 class="fs-5">Popover in a modal</h2>
  <p>This <button class="btn btn-secondary" data-bs-toggle="popover" title="Popover title" data-bs-content="Popover body content is set in this attribute.">button</button> triggers a popover on click.</p>
  <hr>
  <h2 class="fs-5">Tooltips in a modal</h2>
  <p><a href="#" data-bs-toggle="tooltip" title="Tooltip">This link</a> and <a href="#" data-bs-toggle="tooltip" title="Tooltip">that link</a> have tooltips on hover.</p>
</div>

------------------------------------------------------------------------------------------

hover a cada parte

Centrar el metar bien grande en el medio

dividirlo en cajas

usar stringify para leer repr como la del tiempo
*/

/* 

                    ottawa: CYOW
                    muscat: OOMS
                    carrasco: SUMU
                    kennedy: KJFK

*/