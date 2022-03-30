const debug = require("debug")("painting-app:serverStart");

const startServer = (app: any, port: number) =>
  new Promise<void>((resolve, reject): void => {
    const server = app.listen(port, () => {
      debug(`The server it's up in http://localhost:${port}`);
      resolve();
    });

    server.on("error", (error: Error) => {
      debug(`Oh no the server couldn't start ${error.message}`);
      reject();
    });
  });

module.exports = startServer;
