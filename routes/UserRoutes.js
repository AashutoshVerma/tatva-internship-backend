var express = require("express");
const {
  getUsers,
  registerUser,
  loginUser,
} = require("../controllers/UserController");
const router = express.Router();
router.get("/getUsers", getUsers);
router.post("/registerUser", registerUser);
router.post("/loginUser", loginUser);

module.exports = router;
