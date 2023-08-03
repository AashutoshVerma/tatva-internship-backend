var mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
    },
    email: {
      type: String,
      unique: [true],
    },
    password: {
      type: String,
    },
  },
  {
    collection: "UserDatabase",
  }
);

module.exports = mongoose.model("UserDatabase", userSchema);
