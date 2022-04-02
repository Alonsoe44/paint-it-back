import { Request, Response } from "express";
import Debug from "debug";

const debug = Debug("painting-app:serverStart");

const startServer = (app: any, port: number) =>
  new Promise<void>((resolve, reject): void => {
    app.get("*", (req: Request, res: Response) => {
      res.send("Not found");
    });
    const server = app.listen(port, () => {
      debug(`The server it's up in http://localhost:${port}`);
      resolve();
    });

    server.on("error", (error: Error) => {
      debug(`Oh no the server couldn't start ${error.message}`);
      reject();
    });
  });

export default startServer;
