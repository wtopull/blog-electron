import {
  app,
  BrowserWindow, ipcMain,
  Menu,
  Tray,
  shell
} from 'electron'
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}
let mainWindow
const winURL = process.env.NODE_ENV === 'development' ?
  `http://localhost:9080` :
  `file://${__dirname}/index.html`

function createWindow() {
  mainWindow = new BrowserWindow({
    useContentSize: true,
    height: 900,
    minHight: 900,
    width: 1440,
    minWidth: 1440,
    webPreferences: {
      webSecurity: true,
      plugins: true
    },
    frame: false,
    autoHideMenuBar: true,
    transparent: false
  })
  mainWindow.loadURL(winURL)
  mainWindow.on('closed', () => {
    mainWindow = null
  })
}
app.on('ready', createWindow)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
//关闭窗口
ipcMain.on('close', e => {
  app.quit()
})
//最小化窗口
ipcMain.on('minimize', e => {
  mainWindow.minimize()
})
/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */