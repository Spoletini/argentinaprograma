let cita = 'Tres tistres tigres comen trigo en un trigal';
let substring = 'tigres comen trigo';

//a
let tamañoDeCita = cita.length
console.log('El tamaño de la cita es: ' + tamañoDeCita )

//b
let indice = cita.indexOf("tigres comen trigo");
console.log("El indice del substring es: " + indice)

//c
let recorte = cita.indexOf("en un trigal");
console.log(recorte)//esa frase empieza en el indice 32
citaRevisada = cita.slice(0,32);
console.log(citaRevisada)

