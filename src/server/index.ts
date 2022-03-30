const debug = require("debug")("painting-app:serverStart");

const startServer = (app, port) =>
  new Promise<void>((resolve, reject): void => {
    const server = app.listen(port, () => {
      debug(`The server it's up in http://localhost:${port}`);
      resolve();
    });

    server.on("error", (error) => {
      debug(`Oh no the server couldn't start ${error.message}`);
      reject();
    });
  });

module.exports = startServer;
