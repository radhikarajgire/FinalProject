const express = require ('express');
const router = express.Router();
const bcrypt = require("bcryptjs");
const auth = require('../../middleware/auth');
const User = require('../../models/User');
const jwt = require("jsonwebtoken");
const config = require("config");
const { body, validationResult } = require("express-validator");

router.get('/' ,auth ,async (req , res) => {
    try{
     const user = await User.findById(req.user.id).Select('-password');
     res.json(user);
    }catch(err){
console.error(err.message);
res.status(500).send('Server error')
    }
});
router.get("/", async (req, res) => {
    const users = await User.find();
    res.json({ success: true, msg: "show all users", data: users });
  });
  
//@route get api/auth
//@dec test route
//@access public
  router.post(
    "/",
    [
     
      body("email", "Please include a a valid email").isEmail(),
      body(
        "password",
        "Password is required"
      ).exists()
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
        if (!user) {
         return res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
        }
              const isMatch = await bcrypt.compare(password, user.password);
              if(!isMatch){
                return res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] }); 
              }
        
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

module.exports=router;
