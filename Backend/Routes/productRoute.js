const express = require('express');
const product = require('../models/product'); // Make sure to use PascalCase for model names

const router = express.Router();

// Add new product
router.post("/", async (req, res) => {
    try {
        // Create a new product instance using the request body
        const newProduct = new product(req.body);

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
  router.put('/:id', async (req, res) => {
    try {
       const updatedproduct = await product.findByIdAndUpdate(req.params.id, {...req.body});
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
