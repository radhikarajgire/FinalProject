const User = require("../../models/User");
const express = require("express");

const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator/check");

router.get("/", async (req, res) => {
  const users = await User.find();
  res.json({ success: true, msg: "show all users", data: users });
});
router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Please include a a valid email").isEmail(),
    check(
      "password",
      "Please emter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password } = req.body;
    try {
      //See if the user exits if yes send back error
      let user = await User.findOne({ email });
      if (user) {
        res.status(400).json({ errors: [{ msg: "User already exists" }] });
      }
      //get users gravatar on there email

      const avatar = gravatar.url(email, {
        s: "200",
        r: "pg",
        d: "mm",
      });
      user = new User({
        name,
        email,
        avatar,
        password,
      });
      //encrpt password using bycrpt
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(passsword, salt);
      await user.save();

       //return jsonwebtoken

      res.send("User registered");
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

module.exports = router;
