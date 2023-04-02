const { app, BrowserWindow } = require("electron");
const server = require('./local-server.js')
const express = require('express');
const api = express();
const path = require('path');
const url = require('url')

const assetsFolder = path.join(__dirname, 'dist/assets');
api.use(express.static(assetsFolder));

server;
let appWin;
createWindow = () => {
  appWin = new BrowserWindow({
    frame: true,
    title: "AddCode",
    transparent: true,
    minWidth: 400,
    minHeight: 300,
    movable: true,
    icon: path.join(__dirname, 'dist/assets/icons/logo.ico'),
  })


  appWin.setMaximizable(true)
  appWin.setFullScreenable(true)
  appWin.setResizable(true)
  appWin.setMinimumSize(800, 600)
  appWin.maximize(true)
  appWin.show()

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
