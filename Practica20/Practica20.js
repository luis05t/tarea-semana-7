'use strict'

function multiplicar(Multiplicador , Multiplicando) {
    let suma = 0;
    for (let i=0; i < Multiplicador; i++) {
        suma = suma + Multiplicando; 
    }

    return suma; 
}
let numero1 = Number(prompt("Ingrese el multiplicador"))
let numero2 = Number(prompt("Ingrese el multiplicando"))

let resultado = multiplicar ( numero1, numero2);
alert (resultado);

