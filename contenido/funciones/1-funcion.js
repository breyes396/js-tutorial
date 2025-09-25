/**
 * 
 *      FUNCIONES - JavaScript -> Tipos de datos
 */

//somos dueños de una empresa, necesitamos calcular el descuento de productos en oferta


function calcularDescuento(precio, porcentajeDeDescuento) {
    const descuento = precio *porcentajeDeDescuento;
    const precioConDescuento = precio - descuento;
    return precioConDescuento;
}

const precioOriginal = 1000;
const porcentajeDeDescuento = 15;
const precioFinal = calcularDescuento(precioOriginal, porcentajeDeDescuento);

console.log("Precio original: Q."+precioOriginal);
console.log("Descuento: " + porcentajeDeDescuento +"%");
console.log("Precio con descuento: Q." + precioFinal);