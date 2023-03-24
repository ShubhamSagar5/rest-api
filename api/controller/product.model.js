const mongoose = require('mongoose')
const Product = require('../model/product')

//R from CURD [GET]
exports.getProducts = async (req,res) =>{

    try{
        const products = await Product.find(); // Get all the document from the collection
        res.status(200).json({
            msg:"All documents fetched successfully",
            data:products
        })
    } catch(err){
        res.status(200).json({
            code:10,
            msg:"Something went wrong ",
            err:err
        })
    }


}

//R from CURD[GET single product]
exports.getProduct = async (req,res) =>{

    try{
        const products = await Product.findById(req.params.productId); // Get all the document from the collection
        res.status(200).json({
            msg:"single documents fetched successfully",
            data:products
        })
    } catch(err){
        res.status(200).json({
            code:10,
            msg:"Something went wrong ",
            err:err
        })
    }


}


//C from CRUD [POST]
exports.createProduct = async (req,res) =>{

    try{
        //create a product object
        const product = new Product ({
            _id:new mongoose.Types.ObjectId(),
            name:req.body.name,
            price:req.body.price
        })
        
        const data = await product.save()//call the saved method and wait for it to return
        
        //if it reaches this point ,means save() was successful

        res.status(200).json({
            msg:"Product created successfully",
            product : data
        })

    }catch(err){
        res.status(501).json({
            code:10,
            msg:"Something went wrong",
            err:err
        })

    }


}

//U from CURD [put]
exports.updateProduct = async (req,res) =>{

    try{
        const data = await Product.findByIdAndUpdate(req.params.productId,req.body);
        res.status(200).json({
            msg:"Product update successfully",
            product:data
        })
    }
    catch(err){
        res.status(501).json({
            code:10,
            msg:"Something went wrong",
            err:err
        })
    }
}



//D from CURD [Delete]
exports.deleteProduct = async (req,res) =>{

    try{
        const data = await Product.findByIdAndDelete(req.params.productId)
        res.status(200).json({
            msg:"Product deleted successfully",
            product:data
        })
    }catch(err){
        res.status(501).json({
            code:10,
            msg:"Something went wrong",
            err:err
        })
    }

}