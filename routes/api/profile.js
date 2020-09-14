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

//@route Post api/profile
//@dec create or update a users profile
//@access private
router.post(
  "/",
  [
    auth,
    [
      body("status", "Status is required").not().isEmpty(),
      body("skills", "skills is required").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  const {
    company,
    website,
    location,
    bio,
    status,
    githubusername,
    skills,
    youtube,
    facebook,
    twitter,
    instagram,
    linkedin
  }=req.body;

// Build profile object
const profileFiels ={};
profileFields.user = req.user.id;
if(company) profileFields.company = company;
if(website) profileFields.website = website;
if(location) profileFields.location = location;
if (bio) profileFields.bio = bio;
if(status) profileFields.status = status;
if(githubusername) profileFields.githubusername=githubusername;  
if(skills){
  profileFields.skills = skills.split(',').map(skill => skill.trim());
}
// Build social object

console.log(profileFields.skills);
res.send('Hello');
}
);

module.exports = router;
