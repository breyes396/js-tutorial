let palabras = [
    "ALGORITMO", "FUNCION", "VARIABLE", "ARREGLO", "BLOQUE", 
    "CONDICIONAL", "LOOP", "CLASE", "OBJETO", "INTERFACE", 
    "APLICACION", "LIBRERIA", "DEPENDENCIA", "COMANDO", "EXCEPCION", 
    "CICLO", "BASEDEDATOS", "MODULO", "DEBUG", "CODIGO"
];

let palabraSecreta, progreso, intentos, maxIntentos, letrasUsadas;

let canvas = document.getElementById("canvas");
let dibujar = canvas.getContext("2d");

function iniciarJuego() {
  document.getElementById("bienvenida").style.display = "none";

  document.getElementById("juego").style.display = "block";

  palabraSecreta = palabras[Math.floor(Math.random() * palabras.length)];
  progreso = Array(palabraSecreta.length).fill("_");
  intentos = 0;
  maxIntentos = 7; 
  letrasUsadas = [];

  dibujar.clearRect(0, 0, canvas.width, canvas.height);
  dibujarHorca();

  document.getElementById("palabra").textContent = progreso.join(" ");
  document.getElementById("mensaje").textContent = "";
  document.getElementById("intentos").textContent = "Intentos restantes: " + (maxIntentos - intentos);
  crearBotones();
}

function crearBotones() {
  const contenedor = document.getElementById("letras");
  contenedor.innerHTML = "";
  const abecedario = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
  for (let letra of abecedario) {
    let btn = document.createElement("button");
    btn.textContent = letra;
    btn.onclick = () => elegirLetra(letra, btn);
    contenedor.appendChild(btn);
  }
}

function elegirLetra(letra, btn) {
  if (letrasUsadas.includes(letra) || intentos >= maxIntentos) return;

  letrasUsadas.push(letra);
  btn.disabled = true;

  if (palabraSecreta.includes(letra)) {
    btn.style.backgroundColor = "green";
    for (let i = 0; i < palabraSecreta.length; i++) {
      if (palabraSecreta[i] === letra) progreso[i] = letra;
    }
  } else {
    btn.style.backgroundColor = "red";
    intentos++;
    dibujarParte(intentos);
  }

  actualizarPantalla();
}

function actualizarPantalla() {
  document.getElementById("palabra").textContent = progreso.join(" ");
  document.getElementById("intentos").textContent = "Intentos restantes: " + (maxIntentos - intentos);

  if (!progreso.includes("_")) {
    document.getElementById("mensaje").textContent = `FELICIDADES, HAS GANADO EL JUEGO!!! Y ADIVINASTE LA PALABRA EN ${intentos} INTENTOS`;
    deshabilitarBotones();
    habilitarBotonNuevoJuego();
  } else if (intentos >= maxIntentos) {
    document.getElementById("mensaje").textContent = `HAS PERDIDO :( LA PALABRA ERA: ${palabraSecreta}`;
    deshabilitarBotones();
    habilitarBotonNuevoJuego();
  }
}

function deshabilitarBotones() {
  const botones = document.querySelectorAll("#letras button");
  botones.forEach(b => b.disabled = true);
}

function habilitarBotonNuevoJuego() {
  document.getElementById("nuevoJuegoBtn").disabled = false;
}

function dibujarHorca() {
  dibujar.strokeStyle = "black";
  dibujar.lineWidth = 2;

  dibujar.beginPath();
  dibujar.moveTo(10, 190);
  dibujar.lineTo(150, 190);
  dibujar.stroke();

  dibujar.moveTo(40, 190);
  dibujar.lineTo(40, 20);
  dibujar.lineTo(100, 20);
  dibujar.lineTo(100, 40);
  dibujar.stroke();
}

function dibujarParte(intentos) {
  dibujar.strokeStyle = "black";
  dibujar.lineWidth = 2;

  switch (intentos) {
    case 1: 
      dibujar.beginPath();
      dibujar.arc(100, 55, 15, 0, Math.PI * 2);
      dibujar.stroke();
      break;
    case 2: 
      dibujar.beginPath();
      dibujar.moveTo(100, 70);
      dibujar.lineTo(100, 120);
      dibujar.stroke();
      break;
    case 3: 
      dibujar.beginPath();
      dibujar.moveTo(100, 120);
      dibujar.lineTo(80, 150);
      dibujar.stroke();
      break;
    case 4: 
      dibujar.beginPath();
      dibujar.moveTo(100, 120);
      dibujar.lineTo(120, 150);
      dibujar.stroke();
      break;
    case 5: 
      dibujar.beginPath();
      dibujar.moveTo(100, 80);
      dibujar.lineTo(80, 100);
      dibujar.stroke();
      break;
    case 6: 
      dibujar.beginPath();
      dibujar.moveTo(100, 80);
      dibujar.lineTo(120, 100);
      dibujar.stroke();
      break;
    case 7: 
      dibujar.beginPath();
      dibujar.arc(100, 55, 15, 0, Math.PI * 2); 
      dibujar.moveTo(92, 50); dibujar.lineTo(96, 54); 
      dibujar.moveTo(96, 50); dibujar.lineTo(92, 54); 
      dibujar.moveTo(104, 50); dibujar.lineTo(108, 54); 
      dibujar.moveTo(108, 50); dibujar.lineTo(104, 54); 
      dibujar.moveTo(92, 62); dibujar.lineTo(108, 62); 
      dibujar.stroke();
      break;
  }
}

window.onload = function() {
  document.getElementById("iniciarJuegoBtn").addEventListener("click", iniciarJuego);
};
