/**
 * Created by plter on 8/29/16.
 */

(function () {

    const net = require("net");

    class Server {

        constructor() {

        }

        start(port) {
            net.createServer((socket)=> {

            }).listen(port, ()=> {

            });
        }

        stop() {

        }
    }

    window.Server = Server;
})();