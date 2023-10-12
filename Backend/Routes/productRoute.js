const express = require('express');
const product = require('../models/product'); // Make sure to use PascalCase for model names
const upload=require('../utils/multer')
const isAuth=require('../middlewares/Autho')
const router = express.Router();

// Add new product
router.post("/", upload("products").single("file"),isAuth(),async (req, res) => {
    try {
        const url =` ${req.protocol}://${req.get("host")}/${req.file.path}`
        // Create a new product instance using the request body
        const newProduct = new product(req.body);
        newProduct.img=url
        // Save the new product to the database
        const savedProduct = await newProduct.save();

        // Send a success response with the saved product
        res.send(  savedProduct );  
    } catch (error) {
        // Handle errors and send an error response to the client
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
})
//get
router.get('/', async (req, res) => {
    try {
      const products= await product.find();
      res.send(products);
    } catch (error) {
     console.log(error);
    }
  });
//put
  router.put('/:id', upload("products").single("file"), async (req, res) => {
    try {     
       const updatedproduct = await product.findByIdAndUpdate(req.params.id, {...req.body});
       if (req.file){
        const url =` ${req.protocol}://${req.get("host")}/${req.file.path}`
        updatedproduct.img=url
       }
       res.send(updatedproduct);
     } 
     catch (error) {
    console.log(error);
     }
   });
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      result=await product.findByIdAndRemove(id);
      res.send( result );
    } catch (error) {
   
      console.log(error);
    }
  });
  
module.exports = router;
