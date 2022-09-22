const {BrowserWindow}=require('electron')

class FirstWindow extends BrowserWindow{
    constructor(url) {
        super({

            webPreferences: {
                nodeIntegration: true,
                contextIsolation: false,
                backgroundThrottling:false

            },
            width:300,
            height:500,
            resizable:false,
            frame:false,
            show:true,

        });
        this.loadURL(url)

        this.on("blur",()=>{
            this.hide()
        })


    }

}

module.exports=FirstWindow