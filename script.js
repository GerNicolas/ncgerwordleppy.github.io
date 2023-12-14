let intentos = 6;
let diccionario = ['APPLE', 'HURLS', 'WINGS', 'YOUTH'];
let palabra = diccionario[Math.floor(Math.random() * diccionario.length)];

const button = document.getElementById("guess-button");
button.addEventListener("click", intentar);

function intentar() {
    const intento = leerIntento();

    // Verificar si el intento tiene al menos 5 letras
    if (intento.length !== 5) {
        alert("Por favor, ingresa una palabra de exactamente 5 letras.");
        return;
    }

    if (intento === palabra) {
        terminar("<h1>¡GANASTE!😀</h1>");
        return;
    }

    const conjuntoDiv = document.createElement('div');
    conjuntoDiv.className = 'conjunto'; // Nuevo contenedor para cada conjunto de letras

    for (let i in palabra) {
        const span = document.createElement('span');
        span.className = 'letter';
        if (intento[i] === palabra[i]) {
            span.innerHTML = intento[i];
            span.style.backgroundColor = '#79b851';
        } else if (palabra.includes(intento[i])) {
            span.innerHTML = intento[i];
            span.style.backgroundColor = '#f3c237';
        } else {
            span.innerHTML = intento[i];
            span.style.backgroundColor = '#a4aec4';
        }
        conjuntoDiv.appendChild(span);
    }

    document.getElementById('grid').appendChild(conjuntoDiv);
    intentos--;

    if (intentos === 0) {
        terminar("<h1>¡PERDISTE!😖</h1>");
    }
}

function leerIntento() {
    let intento = document.getElementById("guess-input");
    intento = intento.value;
    intento = intento.toUpperCase();
    return intento;
}

function terminar(mensaje) {
    const input = document.getElementById("guess-input");
    const boton = document.getElementById("guess-button");
    input.disabled = true;
    boton.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}