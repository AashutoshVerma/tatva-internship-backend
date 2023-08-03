var mongoose = require("mongoose");

const DbConnection = async () => {
  try {
    const connect = await mongoose.connect(process.env.CONNECTION_STRING);
    console.log(connect.connection.name);
    // const connection = await mongoose.connect(
    //   "mongodb://127.0.0.1:27017/tatvasoft"
    // );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = DbConnection;
