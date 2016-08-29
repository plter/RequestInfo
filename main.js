/**
 * Created by plter on 8/26/16.
 */

const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

class Main {

    constructor() {
        this.addAppListeners();
    }

    createWindow() {
        this.mainWindow = new BrowserWindow({width: 550, height: 400});
        this.mainWindow.loadURL(`file://${__dirname}/index.html`);
        this.mainWindow.on("closed", ()=> {
            this.mainWindow = null;
        });
    }

    addAppListeners() {
        app.on("ready", ()=> {
            this.createWindow();
        });

        app.on('window-all-closed', ()=> {
            if (process.platform !== 'darwin') {
                app.quit();
            }
        });

        app.on('activate', ()=> {
            if (!this.mainWindow) {
                this.createWindow()
            }
        });
    }

}

new Main();
