// Declarar variables en javascript
/*
1. var nombrevariable = valor;
   var futbolista = "delantero";// vble de tipo texto
2. let edad = 15;// vble de tipo entero
3. const iva = 0.19; // vble o constante de tipo flotante
*/

var futbolista1 = "delantero";
var futbolista2 = "arquero1";
var futbolista3 = "arquerorival";
var resultado ="gol";

document.write("Saque del arquero: " + futbolista2 + "<br/>");
document.write("recepcion del delantero: " + futbolista1 + "<br/>");
document.write("El delantero dispara: " + futbolista1 + "<br/>");
document.write("El arquero rival no puede hacer nada: " + futbolista3 + " " + resultado +"<br/>");
//mostrar otro dato de salid es con  console.log();
console.log(resultado);

//operaciones básicas con dos números
// datos de entrada con prompt

let num1 = prompt("Digita el valor del número 1");
let num2 = prompt("Digita el valor del número 2");
let suma=0;
let resta=0;
let multi=0;
let division=0;


//procesos o calculo u operaciones
suma = parseInt(num1) + parseInt(num2);
resta = parseInt(num1) - parseInt(num2);
multi = parseInt(num1) * parseInt(num2);
division = parseInt(num1) / parseInt(num2);

//datos de salida
document.write("La suma: " + suma + "<br/>");
document.write("La resta: " + resta + "<br/>");
document.write("La multiplicación: " + multi + "<br/>");
document.write("La división: " + division + "<br/>");



