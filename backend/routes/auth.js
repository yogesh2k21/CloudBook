const express = require("express");
const router = express.Router();
const User = require("../models/User"); //import user model
const { body, validationResult } = require("express-validator");
const { findOne } = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'PrinceI$AG00dB0y';

//create a user using: POST "/api/auth/createuser". No login required
router.post(
  "/createuser",
  [
    body("email", "Enter a Valid Email").isEmail(),
    body("name", "Enter a Valid name").isLength({ min: 3 }),
    body("password", "Enter a Valid password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    //if error is an error return Bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //creating user
    try {
      let user = await User.findOne({ email: req.body.email }); //checking user already exists
      // console.log(user); //if user exist than it log that user
      if (user) {
        return res.status(400).json({
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
      const data={
        user:{
          id:user.id
        }
      }
      const JwtToken = jwt.sign(data, JWT_SECRET);
      console.log(JwtToken);
      // res.json(user);
      res.json({JwtToken});
    } catch (error) {
      //if  any error occurs than this catch will run
      console.log(error.message);
      return res.status(500).send("Some error occured");
    }
  }
);

module.exports = router;

// npm run nodemon