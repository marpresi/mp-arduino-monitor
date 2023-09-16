import { createRequire } from "module";
import { init, getDistancia } from "./readSerialPort.js";

const require = createRequire(import.meta.url);
const express = require('express');




const app = express();
const port = 3000;

init();

app.get('/', (req, res) => {
  res.send('Hola, mundo desde Express!');
});

app.get('/sensor', (req, res) => {
  const distancia = getDistancia();
  res.send(`Leyendo datos del sensor: ${distancia}cm`);
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});