const fs = require('fs');

function filtranum(numeros, resultado) {
  let count = 0;
  let resultadoIndex = 0;

  for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i].toString();
    const primerDigito = numero[0];
    const ultimoDigito = numero[numero.length - 1];

    if (primerDigito === ultimoDigito) {
      resultado[resultadoIndex] = Number(numero);
      resultadoIndex++;
      count++;
    }
  }

  return count;
}


const input = fs.readFileSync('datos.in', 'utf8').trim().split('\n');
const N = parseInt(input[0]);
const numeros = input[1].split(' ').map(Number);
const resultado = [];

const cantidadResultados = filtranum(numeros, resultado);


const output = `${cantidadResultados}\n${resultado.join(' ')}`;
fs.writeFileSync('datos.out', output);