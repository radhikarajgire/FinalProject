
const express = require("express");
const User = require("../../models/User");

const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { body, validationResult } = require("express-validator");

router.get("/", async (req, res) => {
  const users = await User.find();
  res.json({ success: true, msg: "show all users", data: users });
});
router.post(
  "/",
  [
    body("name", "Name is required").not().isEmpty(),
    body("email", "Please include a a valid email").isEmail(),
    body(
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
       return res.status(400).json({ errors: [{ msg: "User already exists" }] });
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
       const payload = {
         user:{
           id: user.id
         }
       };
       jwt.sign(payload ,
        config.get('jwtSecret'),
        {expiresIn: 360000 },
         (err, token) => {
           if(err) throw err;
           res.json({ token });
         }
        );

 
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

module.exports = router;
