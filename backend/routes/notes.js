const express = require("express");
const router = express.Router();
const Notes = require("../models/Notes"); //import user model
const fetchUser = require("../middleware/fetchUser");
const { body, validationResult } = require("express-validator");

//Route 1:Get all the Notes using: GET "/api/auth/fetchallnotes". login required
router.get("/fetchallnotes", fetchUser, [], async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    //if  any error occurs than this catch will run
    console.log(error.message);
    return res.status(500).send("Server Internal Error");
  }
});

//Route 2:Add Note using: POST "/api/auth/addnote". login required
router.post(
  "/addnote",
  fetchUser,
  [
    body("title", "Enter a valid Title").isLength({ min: 3 }),
    body("description", "Enter a valid Description").isLength({ min: 5 }),
    body("tag", "Enter a valid tag").isLength({ min: 4 }),
  ],
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;

      //if error is an error return Bad request
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const note = new Notes({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const savedNote = await note.save();
      res.json(savedNote);
    } catch (error) {
      //if  any error occurs than this catch will run
      console.log(error.message);
      return res.status(500).send("Server Internal Error");
    }
  }
);

module.exports = router;
