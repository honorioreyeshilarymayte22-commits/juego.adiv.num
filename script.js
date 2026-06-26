// Número secreto
let secreto = Math.floor(Math.random() * 100) + 1;

// Contador de intentos
let intentos = 0;

// Historial de números
let Historial = [];

function comprobar() {

    let intento = Number(document.getElementById("numero").value);

    // Validar que el número esté entre 1 y 100
    if (isNaN(intento) || intento < 1 || intento > 100) {
        document.getElementById("mensaje").innerHTML =
            "Escribe un número entre 1 y 100";
        return;
    }

    // Sumar intento
    intentos++;

    document.getElementById("intentos").innerHTML =
        "Intentos: " + intentos;

    // Guardar historial
    Historial.push(intento);
    document.getElementById("historial").innerHTML =
        Historial.join(", ");

    // Comprobar si ganó
    if (intento == secreto) {

        document.getElementById("mensaje").innerHTML =
            "¡Ganaste en " + intentos + " intentos!";

    } else {

        let diferencia = Math.abs(secreto - intento);

        if (diferencia <= 5) {

            if (intento < secreto) {
                document.getElementById("mensaje").innerHTML =
                    "¡Muy cerca! El número es más alto.";
            } else {
                document.getElementById("mensaje").innerHTML =
                    "¡Muy cerca! El número es más bajo.";
            }

        } else if (diferencia <= 10) {

            if (intento < secreto) {
                document.getElementById("mensaje").innerHTML =
                    "Cerca. El número es más alto.";
            } else {
                document.getElementById("mensaje").innerHTML =
                    "Cerca. El número es más bajo.";
            }

        } else {

            if (intento < secreto) {
                document.getElementById("mensaje").innerHTML =
                    "🔺 El número es más alto.";
            } else {
                document.getElementById("mensaje").innerHTML =
                    "🔻 El número es más bajo.";
            }

        }

    }

}

// Reiniciar juego
function reiniciar() {

    secreto = Math.floor(Math.random() * 100) + 1;

    intentos = 0;

    Historial = [];

    document.getElementById("numero").value = "";

    document.getElementById("mensaje").innerHTML = "";

    document.getElementById("intentos").innerHTML =
        "Intentos: 0";

    document.getElementById("historial").innerHTML =
        "Ninguno";
}