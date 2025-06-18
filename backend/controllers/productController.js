import { request } from "http";
import productModel from "../models/productModel.js";
import fs from 'fs';

// add product items
const addProduct = async (request, response) => {
    let image_filename = `${request.file.filename}`;

    const product = new productModel({
        name:request.body.name,
        price:request.body.price,
        category:request.body.category,
        image: image_filename
    })
    try {
        await product.save();
        response.json({success:true, message: "product added"});
    }
    catch (error) {
        console.log(error);
        response.json({success:false,message: "error"});
    }
}

// all product list
const listProduct = async (request,response) => {
    try {
        const products = await productModel.find({});
        response.json({success:true, data:products});
    }
    catch (error){
        console.log(error);
        response.json({success:false, message: 'error'})
    }
}

// remove product item
const removeProduct = async (request, response) => {
  try {
    const product = await productModel.findById(request.body.id);

    if (!product) {
      return response.json({ success: false, message: 'Product not found' });
    }

    const imagePath = `uploads/${product.image}`;
    fs.unlink(imagePath, (err) => {
      if (err) {
        console.error("❌ Failed to delete image:", imagePath, err.message);
        // Note: don't return here — even if image is missing, proceed to delete from DB
      } else {
        console.log("🗑️ Deleted image:", imagePath);
      }
    });

    await productModel.findByIdAndDelete(request.body.id);
    response.json({ success: true, message: 'Product removed' });

  } catch (error) {
    console.error("❌ Backend error while removing product:", error);
    response.json({ success: false, message: 'Error removing product' });
  }
};

export {addProduct, listProduct, removeProduct}