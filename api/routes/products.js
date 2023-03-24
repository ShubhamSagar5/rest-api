const express = require('express')
const router = express.Router()
const mongoose  = require('mongoose')
const Product = require('../model/product')
const productController = require('../controller/product.model')
const product = require('../model/product')

//Handler GET request for products
router.get('/',productController.getProducts)
// (req,res,next)=>{
//     res.status(200).json({
//         msg:"This is a GET Request for Products"
//     })
// })

//Handler Post request for products
router.post('/',productController.createProduct)
// (req,res)=>{

    //body parser will make the following properties available
    // console.log(req.body)
    // console.log(req.body.name)
    // console.log(req.body.price)

    // const tempProduct = {
    //     name:req.body.name,
    //     price:req.body.price
    // }

    //1.create an object of the model

//     const product = new Product({
//         _id:new mongoose.Types.ObjectId(),
//         name:req.body.name,
//         price:req.body.price
//     })

//     //2.save this to the database
//     product.save()
//     .then((res)=>{
//         console.log(res)
//     }) 
//     .catch((err)=>{
//         console.log(err)
//     })

//     const p = req.body
//     console.log("[TYPE]" + typeof req.body)


//     res.status(200).json({
//         msg:"This is post Request for Product",
//         statusMsg:"Product created successfully",
//         product : product
//     })
// })

//Handler GET request for single product
router.get('/:productId',productController.getProduct)
// (req,res)=>{

//     const id = req.params.productId

//     if(id == "7"){
//         res.status(200).json({
//         msg:"Congrats ! You have special id with good cashback" 
//     })
//     }
//     else{
//         res.status(200).json({
//             msg:"oops ! You have regular id with no cashback" 
//         })
//     }

    
// })

//Handle PUT request

router.put('/:productId',productController.updateProduct)
// (req,res)=>{

//     const id = req.params.productId

//     res.status(200).json({
//         msg:"This is PUT request for product",
//         id:id
//     })
// })

//Handle Delete request

router.delete('/:productId',productController.deleteProduct)
// (req,res)=>{

//     const id = req.params.productId

//     res.status(200).json({
//         msg:"This is Delete request for product",
//         id:id
//     })
// })


module.exports = router