var User = require("../models/userModel");

//@desc Get User
//@API GET /api/users/getUsers
const getUsers = async (req, res) => {
  const users = await User.find();
  // console.table(users);
  res.status(201).json({ data: users });
};

//@desc Register User
//@API POST /api/users/registerUser
const registerUser = async (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  const uniqueUser = await User.findOne({ email: email });
  if (!uniqueUser) {
    const users = await User.create({ firstname, lastname, email, password });
    res.status(201).json({ data: "User Created" });
  } else {
    res.status(201).json({ data: "User Already Exists" });
  }
};

//@desc Login User
//@API POST /api/users/loginUser
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const users = await User.findOne({ email });
  if (users) {
    if (users.password == password) {
      res.status(201).json({ data: "Login Successfull" });
    } else {
      res.status(201).json({ data: "Invalid Credentials" });
      console.log(
        "password from database : " + users.password,
        "|",
        "password from user : " + password
      );
    }
  } else {
    res.status(201).json({ data: "User Does not Exists" });
  }
};

module.exports = { getUsers, registerUser, loginUser };
