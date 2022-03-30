const { default: mongoose } = require("mongoose");
export {};
const debug = require("debug")("painting-app:database");

const connectDataBase = (connectionString: string) =>
  new Promise<void>((resolve, reject) => {
    mongoose.set("debug", false);
    mongoose.connect(connectionString, (error: Error) => {
      if (error) {
        reject(error);
        return;
      }
      debug("Database connected");
      resolve();
    });
  });

module.exports = connectDataBase;
