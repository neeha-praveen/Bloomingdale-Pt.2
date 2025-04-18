import { request } from "http";
import productModel from "../models/productModel.js";
import fr from 'fs';

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
        const product = await productModel.findById(request.body.id); // to find the product model using the id
        fs.unlink(`uploads/${product.image}`, ()=>{}); // to delete from uploads folder

        await productModel.findByIdAndDelete(request.body.id); // to delete from database
        response.json({success:true, message:'food removed'});
    }
    catch (error) {
        console.log(error);
        response.json({success:false, message: 'error'});
    }
}

export {addProduct, listProduct, removeProduct}