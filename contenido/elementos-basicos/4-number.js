/*

    TIPO DE DATO: NUMBER
*/ 

//1. ENTERO
const entero = 42;
const decimal = 3.14;
// 2. notacion cientifica
const cientifica = 1.5e4;
// 3. infinito y NaN(no es un numero)
const infinito = Infinity;
const noEsNumero = NaN;

//Operaciones Aritmeticas
//1. suma, resta, multiplicacion, division
const suma=5+6
const resta = 10-4
const multiplicacion = 4 * 5
const division = 20/4

//2. modulo y exponenciacion
const modulo = 16 % 8 //residuo 0
const exponenciacion = 2 ** 4 // 2 elevado a 4 = 16

//La presicion de javaScript
const resultado=0.1+0.2 //0.3

//console.log(resultado==0.3); // false
//console.log(resultado.toFixed(1)); //0.3
//console.log(resultado); //0.30000000000000004
//console.log(resultado.toFixed(1)==0.3); //true


//Operaciones avanzadas
const raizCuadrada = Math.sqrt(16) //4
const valorAbsoluto = Math.abs(-7) //7
const aleatorio = Math.floor(Math.random()*20-5) //numero aleatorio entre 10 y 30
//console.log(raizCuadrada);
//console.log(valorAbsoluto);
console.log(aleatorio);

// lenguajes de programacion

                //Runtime Exception
//COMPILADOS: Java (JVM -> .java --> .class); C, C++
//INTERPRETADOS: JavaScript --> lee > ejecuta

const numero = 2
const boolean = true
//conversion implicita
console.log(numero+boolean)
