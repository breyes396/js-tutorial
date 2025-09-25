/*
        CONVERSIONES  -> EXPLICITAS e IMPLICITAS
*/

//CONVERSION Explicit Type Casting
const string = "54"
const integer= parseInt(string)

//console.log(typeof string)
//console.log(typeof integer)

const float = parseFloat("3.14")
//console.log(typeof float) //number

        //8020
const binario = '1010'//10
const decimal = parseInt(binario, 2)
//console.log(decimal)

const hexa = 'CAFE' // 51966
const decimalhex = parseInt(hexa, 16)
//console.log(decimalhex)

//Conversion implicit type casting
const resultado = '5' + 3 //8
console.log(typeof resultado) //string

const sumaConBoolean = "3" + true
console.log(sumaConBoolean) //string

const sumaConNumero =  2 + true
console.log(sumaConNumero) //number //3

const valorString = "20"
const valorNumber = 10
const valorBoolean = true

console.log("(-------------------------")
console.log(valorString+valorString)//concatenar
console.log(valorString+valorNumber)//concatenar
console.log(valorString+valorBoolean)//concatenar
console.log("(-------------------------")

console.log(valorNumber+valorNumber)//sumar
console.log(valorNumber+valorString)//concatenar
console.log(valorNumber+valorBoolean)//sumar
console.log("(-------------------------")

console.log(valorBoolean+valorBoolean)//sumar
console.log(valorBoolean+valorNumber)//sumar
console.log(valorBoolean+valorString)//concatenar

