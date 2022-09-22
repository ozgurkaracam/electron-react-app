const { app,BrowserWindow,Tray,ipcMain } = require('electron')
const path=require('path')

const TimerTray =require('./src/classes/TimerTray')
const FirstWindow =require('./src/classes/FirstWindow')
let mainWindow,tray;


app.on('ready',()=>{
    mainWindow=new FirstWindow(`file://${__dirname}/src/index.html`);
    let iconName=process.platform === 'darwin' ? 'iconTemplate.png' : 'windows-icon.png';
    tray=new TimerTray(path.join(__dirname,'./src/assets/'+iconName),mainWindow)
    const {x}=tray.getBounds()
    const {width}=mainWindow.getBounds()
    mainWindow.setBounds({
        y:0,
        x:x+width*5/2
    })






    app.dock.hide()
})

ipcMain.on("update-title",(e,d)=>{
    tray.setTitle(d)
})