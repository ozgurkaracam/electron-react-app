const { app,BrowserWindow,Tray } = require('electron')
const path=require('path')
let mainWindow,tray;

app.on('ready',()=>{
    mainWindow=new BrowserWindow({

        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,

        },
        width:300,
        height:500,
        resizable:false,
        frame:false,
        show:true
    })

    mainWindow.loadURL(`file://${__dirname}/src/index.html`)
    let iconName=process.platform === 'darwin' ? 'iconTemplate.png' : 'windows-icon.png';
    tray=new Tray(path.join(__dirname,'./src/assets/'+iconName))
    const {x,y}=tray.getBounds()
    const {width,height}=mainWindow.getBounds()
    mainWindow.setBounds({
        width,
        height,
        y:0,
        x:x+width*5/2
    })
    tray.on("click",()=>{
        mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show()
    })

    mainWindow.on("blur",()=>{
        mainWindow.hide()
    })

    app.dock.hide()
})