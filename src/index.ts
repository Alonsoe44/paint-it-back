require("dotenv").config();
export {};
const debug = require("debug")("painting-app:root");
const app = require("./server");
const startServer = require("./server/startServer");
const connectDataBase = require("./database/index");
const serverPort = process.env.PORT;
const connectionString = process.env.LOGIN_CREDENTIALS;

(async () => {
  try {
    await connectDataBase(connectionString);
    await startServer(app, serverPort);
  } catch (error) {
    debug("The server blow up ");
  }
})();

debug(serverPort);
