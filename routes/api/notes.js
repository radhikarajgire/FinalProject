
const express = require ('express');
const router = express.Router();


//@route get api/notes
//@dec test route
//@access public
router.get('/' ,(req , res) => res.send ('Notes route'));

module.exports=router;