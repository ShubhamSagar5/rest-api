const express = require('express')
const app = express()
const morgan = require('morgan')
const productsRouter = require('./api/routes/products')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')


// app.use((req,res)=>{
//     res.status(200).json({
//         msg:"This is simple GET request"
//     })
// })


app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json({extended:true}))

app.use('/products',productsRouter)

app.use(morgan("dev"))

const uri = "mongodb+srv://shubham123:Shubham%40123@cluster0.h7gwfdc.mongodb.net/"

mongoose.connect(uri)

module.exports = app