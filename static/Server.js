/**
 * Created by plter on 8/29/16.
 */


const net = require("net");
const Log = require("./Log");

class Server {

    constructor() {
        this.running = false;
    }

    start(port) {
        if (!this.running) {
            this.server = net.createServer((socket)=> {
                socket.on("data", (data)=> {
                    Log.info(data + "");
                });
            }).listen(port, ()=> {
                this.running = true;
                Log.info("Server started");
            });
        } else {
            Log.info("Server already running");
        }
    }

    stop() {
        //TODO stop server
    }

    /**
     *
     * @returns {Server}
     */
    static getInstance() {
        if (!Server.__ins) {
            Server.__ins = new Server();
        }
        return Server.__ins;
    }
}

module.exports = Server;