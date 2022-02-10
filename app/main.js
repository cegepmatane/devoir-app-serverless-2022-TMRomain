const { app, BrowserWindow } = require('electron')



function createWindow () {
    const win = new BrowserWindow({
      width: 1200,
      height: 800,
      
    })
  
    win.loadFile('index.html')
    win.webContents.openDevTools()
  }

  app.whenReady().then(() => {
    createWindow()
  })
  app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
  })