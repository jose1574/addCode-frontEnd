const { app, BrowserWindow } = require("electron");
const server = require('./local-server.js')
const express = require('express');
const api = express();
const path = require('path');

const assetsFolder = path.join(__dirname, 'dist/assets');
api.use(express.static(assetsFolder));

server;
let appWin;

createWindow = () => {
  appWin = new BrowserWindow({
    title: "AddCode",
    transparent: true,
    width: 800,
    height: 600,
    minWidth: 400,
    minHeight: 300,
    resizable: true,
    movable: true
  })


  appWin.maximize();
  appWin.show()
  appWin.openDevTools()

  appWin.loadURL(`file://${__dirname}/dist/index.html`);

  appWin.setMenu(null);
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
