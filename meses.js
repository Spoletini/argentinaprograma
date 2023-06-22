
const readline = require('readline-sync');


const meses = {
  1: 'enero',
  2: 'febrero',
  3: 'marzo',
  4: 'abril',
  5: 'mayo',
  6: 'junio',
  7: 'julio',
  8: 'agosto',
  9: 'septiembre',
  10: 'octubre',
  11: 'noviembre',
  12: 'diciembre'
};


var numeroMes = readline.questionInt("Ingrese un número del 1 al 12: ");


var nombreMes = meses[numeroMes];


if (nombreMes) {
  
  var cantidadDias;

 
  switch (numeroMes) {
    case 2: // febrero
      cantidadDias = 28;
      break;
    case 4: // abril
    case 6: // junio
    case 9: // septiembre
    case 11: // noviembre
      cantidadDias = 30;
      break;
    default:
      cantidadDias = 31;
  }

  
  console.log("La cantidad de días del mes de " + nombreMes + " es " + cantidadDias);
} else {
  console.log("El número ingresado no es válido.");
}
