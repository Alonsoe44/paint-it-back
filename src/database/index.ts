import mongoose from "mongoose";
import Debug from "debug";

const debug = Debug("painting-app:database");

const connectDataBase = (connectionString: string) =>
  new Promise<void>((resolve, reject) => {
    mongoose.set("debug", false);
    mongoose.connect(connectionString, (error: Error) => {
      if (error) {
        reject(error);
        return;
      }
      console.log("I know this shit workds");
      debug("Database connected");
      resolve();
    });
  });

export default connectDataBase;
