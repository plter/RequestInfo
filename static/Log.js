/**
 * Created by plter on 8/29/16.
 */

const electron = require("electron");
const ipcRenderer = electron.ipcRenderer;

class Log {

    static setOutputText(text) {
        Log._outputText = text;
    }

    static info(msg) {
        if (Log._outputText) {
            Log._outputText.innerHTML += msg + "\n";
            Log._outputText.scrollTop = Log.outputText.scrollHeight;
        }
    }

    static print() {
        arguments.join = Array.prototype.join;
        ipcRenderer.sendSync("print", arguments.join(","));
    }
}

module.exports = Log;