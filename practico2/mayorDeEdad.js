
const readline = require('readline-sync');


var edad = readline.question("Ingrese su edad: ");

// Verificar si es mayor o igual a 18
if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}