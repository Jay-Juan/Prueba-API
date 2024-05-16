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
            `<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#dataModal">
            ${info.wind_direction.repr}
            </button>
            <div class="modal fade" id="dataModal" tabindex="-1" aria-labelledby="modal-title" aria-hidden= "true">
                <div class="modal-dialog">
                    <div class="modal-content">    
                        <div class="modal-header">
                            <h5 class="modal-title" id="modal-title">${info.wind_direction.repr}</h5> 
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
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#dataModal">
            ${info.wind_speed.repr}
            </button>
            <div class="modal fade" id="dataModal" tabindex="-1" aria-labelledby="modal-title" aria-hidden= "true">
                <div class="modal-dialog">
                    <div class="modal-content">    
                        <div class="modal-header">
                            <h5 class="modal-title" id="modal-title">${info.wind_speed.repr}</h5> 
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
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#dataModal">
            G
            </button>
            <div class="modal fade" id="dataModal" tabindex="-1" aria-labelledby="modal-title" aria-hidden= "true">
                <div class="modal-dialog">
                    <div class="modal-content">    
                        <div class="modal-header">
                            <h5 class="modal-title" id="modal-title">G</h5> 
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
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#dataModal">
            ${info.wind_gust.repr}
            </button>
            <div class="modal fade" id="dataModal" tabindex="-1" aria-labelledby="modal-title" aria-hidden= "true">
                <div class="modal-dialog">
                    <div class="modal-content">    
                        <div class="modal-header">
                            <h5 class="modal-title" id="modal-title">${info.wind_gust.repr}</h5> 
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="fs-5">
                                <p>Scattered: Si hay entre 3 y 4 octas de nubes en el cielo se utiliza SCT, significa nubes dispersas</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>`

    } else {
        contenedor.innerHTML +=
            `<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#dataModal">
            ${info.wind_direction.repr} 
            </button>
            <div class="modal fade" id="dataModal" tabindex="-1" aria-labelledby="modal-title" aria-hidden= "true">
                <div class="modal-dialog">
                    <div class="modal-content">    
                        <div class="modal-header">
                            <h5 class="modal-title" id="modal-title">${info.wind_direction.repr} </h5> 
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
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#dataModal">
            ${info.wind_speed.repr} KT
            </button>
            <div class="modal fade" id="dataModal" tabindex="-1" aria-labelledby="modal-title" aria-hidden= "true">
                <div class="modal-dialog">
                    <div class="modal-content">    
                        <div class="modal-header">
                            <h5 class="modal-title" id="modal-title">${info.wind_speed.repr} KT</h5> 
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="fs-5">
                                <p>Scattered: Si hay entre 3 y 4 octas de nubes en el cielo se utiliza SCT, significa nubes dispersas</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>`

    }
    info.wind_variable_direction.forEach(function (variable) {
        contenedor.innerHTML +=
            `<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#dataModal">
            ${variable.repr}
            </button>
            <div class="modal fade" id="dataModal" tabindex="-1" aria-labelledby="modal-title" aria-hidden= "true">
                <div class="modal-dialog">
                    <div class="modal-content">    
                        <div class="modal-header">
                            <h5 class="modal-title" id="modal-title">${variable.repr}</h5> 
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="fs-5">
                                <p>Scattered: Si hay entre 3 y 4 octas de nubes en el cielo se utiliza SCT, significa nubes dispersas</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>`

    })

    if (visibility.length < 4) {
        contenedor.innerHTML +=
            `<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#dataModal">
            ${info.visibility.repr} SM
            </button>
            <div class="modal fade" id="dataModal" tabindex="-1" aria-labelledby="modal-title" aria-hidden= "true">
                <div class="modal-dialog">
                    <div class="modal-content">    
                        <div class="modal-header">
                            <h5 class="modal-title" id="modal-title">${info.visibility.repr} SM</h5> 
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="fs-5">
                                <p>Scattered: Si hay entre 3 y 4 octas de nubes en el cielo se utiliza SCT, significa nubes dispersas</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>`

    } else {
        contenedor.innerHTML +=
        `<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#dataModal">
        ${info.visibility.repr}
        </button>
        <div class="modal fade" id="dataModal" tabindex="-1" aria-labelledby="modal-title" aria-hidden= "true">
            <div class="modal-dialog">
                <div class="modal-content">    
                    <div class="modal-header">
                        <h5 class="modal-title" id="modal-title">${info.visibility.repr}</h5> 
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="fs-5">
                            <p>Scattered: Si hay entre 3 y 4 octas de nubes en el cielo se utiliza SCT, significa nubes dispersas</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>`

    }

    info.wx_codes.forEach(function (weather) {
        contenedor.innerHTML +=
            `<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#dataModal">
            ${weather.repr}
            </button>
            <div class="modal fade" id="dataModal" tabindex="-1" aria-labelledby="modal-title" aria-hidden= "true">
                <div class="modal-dialog">
                    <div class="modal-content">    
                        <div class="modal-header">
                            <h5 class="modal-title" id="modal-title">${weather.repr}</h5> 
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="fs-5">
                                <p>Scattered: Si hay entre 3 y 4 octas de nubes en el cielo se utiliza SCT, significa nubes dispersas</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>`

    });
    info.clouds.forEach(function (nube) {
        let nubeAlt = nube.altitude
        if (nubeAlt.toString().length === 1) {
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
                00${nube.altitude}
                </div>`
        } else if (nubeAlt.toString().length === 2) {
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
                0${nube.altitude}
                </div>`
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