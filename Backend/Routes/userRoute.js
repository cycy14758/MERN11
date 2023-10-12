const express = require('express');
const user= require('../models/user'); // Make sure to use PascalCase for model names
const { registerCheck,validator,loginCheck } = require('../middlewares/validator');
const bcrypt = require('bcrypt')
const router = express.Router(); 
const jwt = require("jsonwebtoken")
const isAuth=require("../middlewares/Autho")
const upload=require('../utils/multer')
// Add new product
router.post("/register",upload("users").single("file"),registerCheck(), validator, async (req, res) => {
    const { email, password, role } = req.body
    try {
        const url =` ${req.protocol}://${req.get("host")}/${req.file.path}`
        const newusers = new user(req.body);
        newusers.img=url
        if (role=="Admin") {
            return res.status(401).send({ msg: "not auth !!" })
        }
        const exist= await user.findOne({email})
        if(exist){
           return res.status(400).send({msg:"already exist"})
        }

        const newuser = new user(req.body);
        const hashedPassword = await bcrypt.hash(password, 10)
        newuser.password = hashedPassword
     const saveduser = await newuser.save();
        res.send( saveduser );  
    } catch (error) {
      
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
})

//login user 
router.post('/login', loginCheck(), validator, async (req, res) => {
    const { email, password } = req.body
    try { 
        
        const existUser = await user.findOne({ email })
        if (!existUser) {
            return res.status(400).send({ msg: "bad credential !!" })
        }
        const isMatched = await bcrypt.compare(password, existUser.password)

        if (!isMatched) {
            return res.status(400).send({ msg: "bad credential !!" })
        }
        existUser.password = undefined
        const payload = { _id: existUser._id }
        const token = jwt.sign(payload, process.env.secretKey)
        res.send({ user: existUser, token })
    } catch (error) {
        console.log(error);
        res.status(400).send({ msg: error.message })
}})
// get current user ==>private
router.get("/current",isAuth(), (req, res) => {
  
   
    res.send({User:req.user} );
   
})
//get
router.get('/', async (req, res) => {
    try {
      const users= await user.find();
      res.send(users);
    } catch (error) {
     console.log(error);
    }
  });
//put
  router.put('/:id',upload("users").single("file"), async (req, res) => {
    try {
        const url =` ${req.protocol}://${req.get("host")}/${req.file.path}`
        const newusers = new user(req.body);
     newusers.img=url
       const updateduser = await user.findByIdAndUpdate(req.params.id, {...req.body});
       res.send(updateduser);
     } 
     catch (error) {
    console.log(error);
     }
   });
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      result=await user.findByIdAndRemove(id);
      res.send( result );
    } catch (error) {
   
      console.log(error);
    }
  });
  
module.exports = router;
