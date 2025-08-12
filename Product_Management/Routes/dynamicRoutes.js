const express = require('express');
const dynamicRouter = express.Router();
const ProductModel= require('../Models/product.model');
dynamicRouter.post('/addProduct', async (req, res) => {
  try {
    const { ProdName, ProdDescription, ProdPrice } = req.body;
    console.log("Incoming product data:", req.body);

    if (!ProdName || !ProdDescription || !ProdPrice) {
      return res.status(400).json({ message: "Please fill all the fields" });
    }

    const product = await ProductModel.create({
      ProdName,
      ProdDescription,
      ProdPrice
    });

    return res.status(201).json({ message: "Product added successfully", product });
  } catch (error) {
    console.error("Error adding product:", error);
    return res.status(500).json({ message: "Server error", error: error.message });
  }
});

dynamicRouter.get('/getProducts',async (req,res)=>{
    const products = await ProductModel.find();
    if(products.length > 0) {
        return res.json(products);
    } else {
        return res.json({"message": "No products found"});
    }
})
dynamicRouter.get('/deleteProduct/:id',async (req,res)=>{
    const {id} = req.params;
    const product = await ProductModel.findByIdAndDelete(id);
    if(product) {
        return res.json({"message": "Product deleted successfully"});
    } else {
        return res.json({"message": "Product not found"});
    }
});

dynamicRouter.get('/fetchProduct/:id',async (req,res)=>{
    const {id} = req.params;
    const product = await ProductModel.findById(id);
    if(product) {
        return res.json(product);
    } else {
        return res.json({"message": "Product not found"});
    }
});

dynamicRouter.post('/updateProduct',async (req,res)=>{
    const {ProdId,ProdName,ProdDescription,ProdPrice} = req.body;
    if(!ProdId || !ProdName || !ProdDescription || !ProdPrice) {
        return res.json({"message": "Please fill all the fields"});
    } else {
        const product = await ProductModel.findByIdAndUpdate(ProdId, {
            ProdName,
            ProdDescription,
            ProdPrice
        }, {new: true});
        if(product) {
            return res.json({"message": "Product updated successfully"});
        } else {
            return res.json({"message": "Failed to update product"});
        }
    }
})
module.exports = dynamicRouter;