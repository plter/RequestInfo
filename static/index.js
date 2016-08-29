/**
 * Created by plter on 8/26/16.
 */

(function () {

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
        }

        addListeners() {
            this._btnStartServer.onclick = () => {
                console.log(this);
            };

            $(window).resize(this.resizeWindowHandler);
        }

        resizeWindowHandler() {
            document.body.style.width = window.innerWidth + "px";
            document.body.style.height = window.innerHeight + "px";
        }
    }

    new App();
})();