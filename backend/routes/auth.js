const express = require("express");
const router = express.Router();
const User=require("../models/User"); //import user model

//create a user using: POST "/api/user/". Doesnt require Auth
router.post("/", (req, res) => {
  console.log(req.body);
  const user=User(req.body);
  user.save()
  res.send(req.body);
});

module.exports = router;
