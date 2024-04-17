const express = require("express");
const path = require("path");
const fetchuser = require("../middleware/fetchuser");
const { body, validationResult } = require("express-validator");

const Garbage = require("../DataBase/Schema/Garbage");


const router = express.Router();
router.use(express.json());

router.get("/garbage", fetchuser, async (req, res) => {
  try {
    const garbagepost = await Garbage.find({ user: req.user.id });
    res.send(garbagepost);
  } catch (error) {
    console.error(error.message);
    res.status(401).json({ error: "Internal Error Occured.." });
  }
});

router.post(
  "/addgarbage",
  fetchuser,
  [
    
    // password must be at least 5 chars long
    body("description", "Add at least 5 chars in Description.").isLength({
      min: 5,
    }),
    body("location", "Add a valid Location.").isLength({
      min: 3,
    }),
    body('selectOption').notEmpty().withMessage('Please select a valid option')
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { selectOption, description, location } = req.body;
      const garbage = new Garbage({
        selectOption,
        description,
        location,
        user: req.user.id,
      });
      const savegarbage = await garbage.save();
      res.send(savegarbage);
    } catch (error) {
      console.error(error.message);
      res.status(505).send("Some error occured");
    }
  }
);

router.put("/updategarbage/:id", fetchuser, async (req, res) => {
  const { selectOption, description, location } = req.body;
  const newGarbage = {};
  if (selectOption) {
    newGarbage.selectOption = selectOption;
  }
  if (description) {
    newGarbage.description = description;
  }
  if (location) {
    newGarbage.location = location;
  }
  let garbage = await Garbage.findById(req.params.id);
  if (!garbage) {
    return res.status(500).json({ error: "Not possible.." });
  }
  if (garbage.user.toString() !== req.user.id) {
    return res.status(500).send("Not allowed..");
  }
  garbage = await Garbage.findByIdAndUpdate(
    req.params.id,
    { $set: newNote },
    { new: true }
  );
  res.json({ note });
});
router.delete("/deletegarbage/:id", fetchuser, async (req, res) => {
  let note = await Garbage.findById(req.params.id);
  if (!note) {
    return res.status(500).json({ error: "Not possible.." });
  }
  if (note.user.toString() !== req.user.id) {
    return res.status(500).send("Not allowed..");
  }
  note = await Garbage.findByIdAndDelete(req.params.id);
  res.json({ success: "Your note has been deleted successfully", note: note });
});
module.exports = router;
