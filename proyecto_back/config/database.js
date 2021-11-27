const mongoose = require("mongoose");

const remoteHost = "cluster0.yg0zx.mongodb.net";
const remoteUser = "proyecto";
const remotePass = "PrOyEcTo1";
const remoteDB = "hr";

exports.mongoConnect = () => {
  //const mongoStringConnection = `mongodb://${host}:${port}/${db}`;
  const mongoStringConnection = `mongodb+srv://${remoteUser}:${remotePass}@${remoteHost}/${remoteDB}?retryWrites=true&w=majority`;
  mongoose.connect(mongoStringConnection);
  mongoose.Promise = global.Promise;
  const dbConnection = mongoose.connection;
  dbConnection.on(
    "error",
    console.error.bind(console, "mongodb connection error")
  );
};
