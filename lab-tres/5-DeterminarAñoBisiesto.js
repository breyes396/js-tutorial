/**
 *  Lab1-JS
 *  Billy Adrián Reyes López - 2024396
 *     
 *  Ejercicio de Condicional: 
 *  6-DETERMINE SI UN AÑO ES BISIESTO
 *      
 */

function determinarAñoBisiesto() {
    const añoAComprobar = parseInt(prompt("Ingrese un año:"));
    if ((añoAComprobar % 4 === 0 && añoAComprobar % 100 !== 0) || (añoAComprobar % 400 === 0)) {
        console.log(añoAComprobar + " es un año bisiesto.");
    } else {
        console.log(añoAComprobar + " no es un año bisiesto.");
    }
}


