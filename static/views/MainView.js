/**
 * Created by plter on 8/26/16.
 */

(function () {

    const Log = require("../Log");
    const Server = require("../Server");

    class App {

        constructor() {
            this.renderUI();
            this.addListeners();
            this.resizeWindowHandler();

            Log.setOutputText(this._taOutput);
        }

        renderUI() {
            $(".btn").button();

            this._btnStartServer = document.querySelector("#btn-start-server");

            this._taOutput = document.querySelector("#ta-output");
            Log.outputText = this._taOutput;

            this._portInput = document.querySelector("#port-input");
        }

        addListeners() {
            this._btnStartServer.onclick = () => {
                var port = parseInt(this._portInput.value);
                if (!isNaN(port) && port > 0) {
                    Server.getInstance().start(port);
                } else {
                    alert("无效的端口号");
                }
            };

            $(window).resize(this.resizeWindowHandler);
        }

        resizeWindowHandler() {
            document.body.style.width = window.innerWidth + "px";
            document.body.style.height = window.innerHeight + "px";
        }
    }

    new App();

    window.getApp = function () {
        return App;
    }
})();