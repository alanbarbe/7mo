const fs = require('fs');

// Función para decodificar el mensaje
function decodificarMensaje(mensaje) {
  let decodificado = '';
  let trozo = '';
  let esInverso = false;

  for (let i = 0; i < mensaje.length; i++) {
    const caracter = mensaje[i];

    if (caracter === '(') {
      esInverso = true;
    } else if (caracter === ')') {
      decodificado += trozo.split('').reverse().join('');
      trozo = '';
      esInverso = false;
    } else {
      if (esInverso) {
        trozo += caracter;
      } else {
        decodificado += caracter;
      }
    }
  }

  return decodificado;
}

// Leer el mensaje codificado desde el archivo SECRETO.IN
const mensajeCodificado = fs.readFileSync('secreto.in', 'utf8').trim();

// Decodificar el mensaje
const mensajeDecodificado = decodificarMensaje(mensajeCodificado);

// Escribir el mensaje decodificado en el archivo SECRETO.OUT
fs.writeFileSync('secreto.out', mensajeDecodificado);