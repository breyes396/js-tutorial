/**
 *  Lab1-JS
 *  Billy Adrián Reyes López - 2024396
 *     
 *  Ejercicios de Bucles: 
 *  17-CALCULAR CUANTOS NUMERO PARES HAY EN UN ARREGLO
 *      
 */

function contarPares() {
    const arreglo = [3, 6, 8, 1, 9, 12, 15, 20, 7];
    let contadorPares = 0;
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] % 2 === 0) {
            contadorPares++;
        }
    }
    console.log("Cantidad de numeros pares en el arreglo: " + contadorPares);
}