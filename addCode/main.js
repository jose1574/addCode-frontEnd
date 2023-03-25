const { app, BrowserWindow } = require("electron");
const fs = require('fs');
const path = require('path');
const http = require('http');



let appWin;

createWindow = () => {
  appWin = new BrowserWindow({
    fullscreenable: true,
    height: 1000,
    width: 1900,
    title: "Angular and Electron",
    resizable: false,
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true
    },
    devTools: false,
    maximizable: true
  });

  appWin.loadURL(`file://${__dirname}/dist/index.html`);

  appWin.setMenu(null);
  appWin.fullScreenable = true;
  appWin.on("closed", () => {
    appWin = null;
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});


const filePath = 'server.txt'

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      console.log(body);
      fs.writeFile(filePath, body, (err) => {
        if (err) throw err;
        console.log('El archivo ha sido guardado!');
      });
      res.end('Datos recibidos!');
    });
  } else if (req.method === 'GET') {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) throw err;
      res.end(data);
    });
  } else {
    res.end(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Formulario</title>
        </head>
        <body>
          <form method="post" action="/">
            <input type="text" name="nombre" placeholder="Nombre">
            <button>Enviar</button>
          </form>
        </body>
      </html>
    `);
  }
});
app.on('ready', () => {
  server.listen(3001);
});
