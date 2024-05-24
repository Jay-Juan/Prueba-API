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

    contenedor.innerHTML = `
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#codeModal">
        ${icaoCode.toUpperCase()}
        </button>
        <div class="modal fade" id="codeModal" tabindex="-1" aria-labelledby="modal-title" aria-hidden= "true">
            <div class="modal-dialog">
                <div class="modal-content">    
                    <div class="modal-header">
                        <h5 class="modal-title" id="modal-title">${icaoCode.toUpperCase()}</h5> 
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
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#timeModal">
        ${info.time.repr}
        </button>
        <div class="modal fade" id="timeModal" tabindex="-1" aria-labelledby="modal-title" aria-hidden= "true">
            <div class="modal-dialog">
                <div class="modal-content">    
                    <div class="modal-header">
                        <h5 class="modal-title" id="modal-title">${info.time.repr}</h5> 
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
        `;

    if (info.wind_gust) {
        contenedor.innerHTML +=
            `<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#windDirModal">
            ${info.wind_direction.repr}
            </button>
            <div class="modal fade" id="windDirModal" tabindex="-1" aria-labelledby="modal-title" aria-hidden= "true">
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
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#windSpeedModal">
            ${info.wind_speed.repr}
            </button>
            <div class="modal fade" id="windSpeedModal" tabindex="-1" aria-labelledby="modal-title" aria-hidden= "true">
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
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#gustModal">
            G
            </button>
            <div class="modal fade" id="gustModal" tabindex="-1" aria-labelledby="modal-title" aria-hidden= "true">
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
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#windGustModal">
            ${info.wind_gust.repr}
            </button>
            <div class="modal fade" id="windGustModal" tabindex="-1" aria-labelledby="modal-title" aria-hidden= "true">
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
            `<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#windDirModal">
            ${info.wind_direction.repr} 
            </button>
            <div class="modal fade" id="windDirModal" tabindex="-1" aria-labelledby="modal-title" aria-hidden= "true">
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
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#windSpeedModal">
            ${info.wind_speed.repr} KT
            </button>
            <div class="modal fade" id="windSpeedModal" tabindex="-1" aria-labelledby="modal-title" aria-hidden= "true">
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
            `<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#variableModal">
            ${variable.repr}
            </button>
            <div class="modal fade" id="variableModal" tabindex="-1" aria-labelledby="modal-title" aria-hidden= "true">
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
            `<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#visibilityModal">
            ${info.visibility.repr} SM
            </button>
            <div class="modal fade" id="visibilityModal" tabindex="-1" aria-labelledby="modal-title" aria-hidden= "true">
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
            `<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#visibilityModal">
        ${info.visibility.repr}
        </button>
        <div class="modal fade" id="visibilityModal" tabindex="-1" aria-labelledby="modal-title" aria-hidden= "true">
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
            `<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#weatherModal">
            ${weather.repr}
            </button>
            <div class="modal fade" id="weatherModal" tabindex="-1" aria-labelledby="modal-title" aria-hidden= "true">
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
                `<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#cloudTypeModal">
                ${nube.type}
                </button>
                <div class="modal fade" id="cloudTypeModal" tabindex="-1" aria-labelledby="modal-title" aria-hidden= "true">
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
                `<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#cloudTypeModal">
                ${nube.type}
                </button>
                <div class="modal fade" id="cloudTypeModal" tabindex="-1" aria-labelledby="modal-title" aria-hidden= "true">
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
                `<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#cloudTypeModal">
                ${nube.type}
                </button>
                <div class="modal fade" id="cloudTypeModal" tabindex="-1" aria-labelledby="modal-title" aria-hidden= "true">
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
    let botonCyow = document.getElementById("botonCyow")
    let botonSumu = document.getElementById("botonSumu")
    let botonOoms = document.getElementById("botonOoms")
    let botonKjfk = document.getElementById("botonKjfk")
    let botonOejn = document.getElementById("botonOejn")

    botonCyow.addEventListener("click", () => {
        document.getElementById("buscador").value = "CYOW"
        traerMetar(mostrarMetar)
    })
    botonSumu.addEventListener("click", () => {
        document.getElementById("buscador").value = "SUMU"
        traerMetar(mostrarMetar)
    })
    botonOoms.addEventListener("click", () => {
        document.getElementById("buscador").value = "OOMS"
        traerMetar(mostrarMetar)
    })
    botonKjfk.addEventListener("click", () => {
        document.getElementById("buscador").value = "KJFK"
        traerMetar(mostrarMetar)
    })

    botonOejn.addEventListener("click", () => {
        document.getElementById("buscador").value = "OEJN"
        traerMetar(mostrarMetar)
    })

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
