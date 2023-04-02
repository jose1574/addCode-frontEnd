const fs = require('fs');
const express = require('express');
const filePath = 'server.txt';

const app = express();

app.use((req, res, next) => {
  // Establecer encabezados de respuesta
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.post('/', async (req, res) => {
  try {
    // Leer el cuerpo de la solicitud
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', async () => {


      console.log(body);
      // Validar que el cuerpo no esté vacío
      if (!body) {
        res.status(400).send('Datos inválidos!');
        return;
      }
      // Guardar el cuerpo en un archivo
      await fs.promises.writeFile(filePath, body);
      console.log('El archivo ha sido guardado!', body);
      res.statusCode = 200;
      res.send(JSON.stringify(body))
      res.end();
    });
  } catch (err) {
    // Manejar errores
    console.error(err);
    res.status(500).send('Ocurrió un error en el servidor!');
  }
});

app.get('/', async (req, res) => {
  try {
    // Leer el contenido del archivo y enviarlo como respuesta
    const data = await fs.promises.readFile(filePath, 'utf8');
    res.statusCode = 200;
      res.send(JSON.stringify(data))
      res.end();
  } catch (err) {
    // Manejar errores
    console.error(err);
    res.status(500).send('Ocurrió un error en el servidor!');
  }
});

const hostname = '127.0.0.1';
const port = 3002;
const server = app.listen(port, hostname, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});

module.exports = server;
