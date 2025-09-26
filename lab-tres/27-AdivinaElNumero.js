/**
 *  Lab1-JS
 *  Billy Adrián Reyes López - 2024396
 *     
 *  Ejercicios Combinados y Desafíos: 
 *  27-ADIVINAR UN NUMERO ENTRE 1 A 100
 *      
 */

function adivinaElNumero() {
    const numeroSecreto = Math.floor(Math.random() * 100) + 1;
    const numeroJugador = parseInt(prompt("Adivina el numero secreto entre 1 y 100:"));

    console.log(`El numero que ingresaste fue ${numeroJugador}`);

    if (numeroJugador === numeroSecreto) {
        console.log("Felicidades ganaste. Adivinaste el numero");
    } else if (numeroJugador < numeroSecreto) {
        console.log("El numero secreto es mayor");
    } else {
        console.log("El numero secreto es menor");
    }

    console.log(`El numero secreto era ${numeroSecreto}`);
}
