const express = require("express");
const router = express.Router();
const User = require("../models/User"); //import user model
const { body, validationResult } = require("express-validator");

//create a user using: POST "/api/user/". Doesnt require Auth
router.post(
  "/",
  [
    body("email", "Enter a Valid Email").isEmail(),
    body("name", "Enter a Valid name").isLength({ min: 3 }),
    body("password", "Enter a Valid password").isLength({ min: 5 }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    User.create({
      name: req.body.name,
      password: req.body.password,
      email: req.body.email,
    }).then(user=>res.json(user))
    .catch(err=>{console.log(err)
    res.json({error:"Please enter unique values",message:err.message})})
  }
);

module.exports = router;
