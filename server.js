var express = require("express");
const connectDb = require("./config/DbConnection");
var dotenv = require("dotenv").config();
const app = express();
app.use(express.json());
var cors = require("cors");
app.use(cors());

connectDb();
const port = 8080;
app.use("/api/users", require("./routes/UserRoutes"));

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server Started at port : ", port);
  }
});
