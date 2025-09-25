/**
 *     Ciclo FOR -> PARA
 */

/*
for (let index = 0; index 
    /*< array.length; index++) {
    const element = array[index];
    
}
    */

let lista = ["Comer", "Dormir", "Code", "Repetir"];

for (let i = 0; i < lista.length; i++) {
    console.log(lista[i]);
}
console.log("------------------------")

// FOR OF -----------------------> FOR EACH
let canasta = ["Manzanas", "Naranjas", "Platanos", "Uvas"];
for (const fruta of canasta) {
    console.log(fruta);
}

//for int
// itera soble las propiedades de un objeto

const canastaDeFrutas = {
    nombre: "Manzanas",
    precio: 5.00,
    tipo: "verde",
    marca: "Chanita's apples"
}
console.log("----------------------")
for (fruta in canastaDeFrutas) {
    console.log(fruta)
}

console.log("----------------------")
for (fruta in canastaDeFrutas) {
    console.log(`${fruta}: ${canastaDeFrutas[fruta]}`)
}

for (fruta of canastaDeFrutas) {
    console.log(fruta);
}