/**
 *  Lab1-JS
 *  Billy Adrián Reyes López - 2024396
 *     
 *  Ejercicios Combinados y Desafíos: 
 *  28-DETERMINAR SI UN NUMERO ES PRIMO O NO
 *      
 */

function determinarNumeroPrimo() {
    const numeroUsuario = parseInt(prompt("Ingrese un numero para verificar si es primo:"));
    if (numeroUsuario <= 1) {
        console.log(numeroUsuario + " no es un numero primo.");
        return;
    }

    let primo = true;
    for (let i = 2; i <= Math.sqrt(numeroUsuario); i++) {
        if (numeroUsuario % i === 0) {
            primo = false;
            break;
        }
    }

    if (primo) {
        console.log(numeroUsuario + " es un numero primo.");
    } else {
        console.log(numeroUsuario + " no es un numero primo.");
    }
}
