const express = require("express");
const router = express.Router();
const User = require("../models/User"); //import user model
const { body, validationResult } = require("express-validator");
const { findOne } = require("../models/User");
const fetchUser = require("../middleware/fetchUser");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "PrinceI$AG00dB0y";

//Route 1:Create a user using: POST "/api/auth/createuser". No login required
router.post(
  "/createuser",
  [
    body("email", "Enter a Valid Email").isEmail(),
    body("name", "Enter a Valid name").isLength({ min: 3 }),
    body("password", "Enter a Valid password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    let success = false;
    //if error is an error return Bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      success = false
      return res.status(400).json({ success:success, errors: errors.array() });
    }
    //creating user
    try {
      let user = await User.findOne({ email: req.body.email }); //checking user already exists
      // console.log(user); //if user exist than it log that user
      if (user) {
        return res.status(400).json({
          success:success,
          error: "Sorry user with this email address already exists!!",
        });
      }
      const salt = await bcrypt.genSalt(10);
      const SecurePass = await bcrypt.hash(req.body.password, salt);
      user = await User.create({
        name: req.body.name,
        password: SecurePass,
        email: req.body.email,
      });
      const data = {
        user: {
          id: user.id,
        },
      };
      const JwtToken = jwt.sign(data, JWT_SECRET);
      console.log(JwtToken);
      // res.json(user);
      success = true
      // return res.json({ success, JwtToken });  //here we are sending JwtToken for testing
      return res.json({ success });
    } catch (error) {
      //if  any error occurs than this catch will run
      console.log(error.message);
      return res.status(500).send("Server Internal Error");
    }
  }
);

//Route 2:Create a user using: POST "/api/auth/login". No login required
router.post(
  "/login",
  [
    body("email", "Enter a Valid Email").isEmail(),
    body("password", "Password cannot be black").exists(),
  ],
  async (req, res) => {
    let success = false;
    //if error is an error return Bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        success = false
        //if user not exists
        return res.status(400).send({
          error: "Please Enter Valid Credentials to Login",
        });
      } else {
        //if user exists
        const checkPassword = await bcrypt.compare(password, user.password);
        if (!checkPassword) {
          success = false
          //if user not Password is not correct
          return res.status(400).send({
            error: "Please Enter Valid Credentials to Login",
          });
        }
        const data = {
          user: {
            id: user.id,
          },
        };
        const JwtToken = jwt.sign(data, JWT_SECRET);
        // console.log(JwtToken);
        success = true;
        // res.json(user);  //it returning the whole object of user included password
        return res.json({ success,JwtToken });
      }
    } catch (error) {
      //if  any error occurs than this catch will run
      console.log(error.message);
      return res.status(500).send("Server Internal Error");
    }
  }
);

//Route 3:Get Loggedin user Details using: POST "/api/auth/getuser". login required
router.post("/getuser", fetchUser, async (req, res) => {
  try {
    let userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    return res.send(user)
  } catch (error) {
    //if  any error occurs than this catch will run
    console.log(error.message);
    return res.status(500).send("Server Internal Error");
  }
});

module.exports = router;

// npm run nodemon
