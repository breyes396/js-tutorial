/**
 * Se solicita un numero a usuario para adivinar un numero secreto que sera generado aleatoriamente entre el ranto de 1-10
 */

const numeroSecreto = Math.floor(Math.random() * 11) - 1;
const numeroJugador = parseInt(prompt("Adivina el número secreto entre 1 y 10:"));

console.log(`El numero que ingresaste fue ${numeroJugador}` );

if (numeroJugador === numeroSecreto) {
    console.log("Felicidades ganaste. Adivinaste el numero")
} else if(numeroJugador < numeroSecreto){
    console.log("El número secreto es mayor")
} else {
    console.log("El número secreto es menor")
}

console.log(`El número secreto era ${numeroSecreto}`);