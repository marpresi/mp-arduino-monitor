import { SerialPort } from 'serialport'
import { ReadlineParser } from '@serialport/parser-readline';

let distancia = null;

const init = () => {
  // Definir el puerto serie y la velocidad de baudios
  const puertoSerie = new SerialPort(
    { path:'/dev/ttyACM0', baudRate: 9600 }
  );

  // Crear un parser de lectura en línea
  const parser = puertoSerie.pipe(new ReadlineParser({ delimiter: '\r\n' }));

  // Escuchar los datos del puerto serie
  parser.on('data', (data) => {
    console.log(`Datos recibidos: ${data}`);
    distancia = data;
  });

  // Manejar errores
  puertoSerie.on('error', (err) => {
  console.error('Error en el puerto serie:', err.message);
  });
}

const getDistancia = () => {
  return distancia;
}

export { init, getDistancia };