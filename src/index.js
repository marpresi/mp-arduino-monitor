import { createRequire } from "module";
import { init, getDistancia } from "./readSerialPort.js";

const require = createRequire(import.meta.url);
const cors = require('cors');
const express = require('express');

const app = express();
app.use(cors());

const port = 3000;

init();

app.get('/', (req, res) => {
  res.send('Hola, mundo desde Express!');
});

app.get('/sensor', (req, res) => {
  const distancia = getDistancia();
  res.send(distancia);
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});