require("dotenv").config();
import apolloServer from "./server/apolloServer";
import Debug from "debug";
import app from "./server/expressServer";
import startServer from "./server/startServer";
import connectDataBase from "./database";

const serverPort: number = process.env.PORT as unknown as number;
const connectionString = process.env.LOGIN_CREDENTIALS;

const debug = Debug("painting-app:root");

(async () => {
  try {
    await connectDataBase(connectionString);
    await apolloServer.start();
    (apolloServer as any).applyMiddleware({ app });
    await startServer(app, serverPort);
  } catch (error) {
    debug("The server blow up ");
  }
})();

debug(serverPort);
