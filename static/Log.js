/**
 * Created by plter on 8/29/16.
 */

(function () {

    class Log {

        static setOutputText(text) {
            Log._outputText = text;
        }

        static info(msg) {
            if (Log._outputText) {
                Log._outputText.innerHTML += msg + "<br>";
                Log._outputText.scrollTop = Log.outputText.scrollHeight;
            }
        }
    }

    window.Log = Log;
})();