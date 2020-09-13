const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { body, validationResult } = require("express-validator");
const Profile = require("../../models/Profile");
const User = require("../../models/User");

//@route get api/profile/me
//@dec get current users profile
//@access private
router.get("/me", auth, async (req, res) => {
  try {
    const profile = await (
      await Profile.findOne({ user: req.user.id })
    ).populated("user", ["name", "avatar"]);
    if (!profile) {
      return res.status(400).json({ mag: "There is no profile for this user" });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route Post api/profile/me
//@dec create or update a users profile
//@access private
router.post(
  "/",
  [
    auth,
    [
      body("status", "Status is require").not().isEmpty(),
      body("skills", "skills is required").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  }
);

module.exports = router;
