const {Tray,Menu,app}=require('electron')

class TimerTray extends Tray{
    constructor(path,mainWindow) {
        super(path);
        this.on("click",()=>{
            mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show()
        })

        this.setToolTip("Timer App")

        let menu=Menu.buildFromTemplate([{
            label:"Quit",
            click(){
                app.quit()
            }
        }])

        this.popUpContextMenu(menu)
    }
}

module.exports=TimerTray