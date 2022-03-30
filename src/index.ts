require("dotenv").config();
export {};
const debug = require("debug")("painting-app:root");
const app = require("./server");
const startServer = require("./server/startServer");
const serverPort = process.env.PORT;

(async () => {
  try {
    await startServer(app, serverPort);
  } catch (error) {
    debug("The server blow up ");
  }
})();

debug(serverPort);
