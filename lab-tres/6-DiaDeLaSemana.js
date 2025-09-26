/**
 *  Lab1-JS
 *  Billy Adrián Reyes López - 2024396
 *     
 *  Ejercicio de Condicional: 
 *  6-DETERMINE SI UN AÑO ES BISIESTO
 *      
 */

function diaDeLaSemana() {
    const numero = parseInt(prompt("Ingrese un numero del 1 al 7:"));
    if (numero === 1) {
        console.log("El dia de la semana es lunes");
    } else if (numero === 2) {
        console.log("El dia de la semana es martes");
    } else if (numero === 3) {
        console.log("El dia de la semana es miercoles");
    } else if (numero === 4) {
        console.log("El dia de la semana es jueves");
    } else if (numero === 5) {
        console.log("El dia de la semana es viernes");
    } else if (numero === 6) {
        console.log("El dia de la semana es sabado");
    } else if (numero === 7) {
        console.log("El dia de la semana es domingo");
    } else {
        console.log("Dia inexistente (debe ingresar un numero del 1 al 7)");
    }
}


