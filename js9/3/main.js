import Calculadora from './calculadora.js';

const calc = new Calculadora();

console.log(calc.multiplicar(4, 5)); 
console.log(calc.dividir(10, 2)); 
try {
  console.log(calc.dividir(8, 0));
} catch (error) {
  console.error(error.message); 
}