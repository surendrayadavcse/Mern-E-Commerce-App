require('dotenv').config()
require('./DB_Connection/db')
const express=require('express')
const userModel=require("./Models/UserModel")
const jwt=require('jsonwebtoken')
const productModel = require('./Models/ProductModel')
const CartModel = require('./Models/CartModel')
const app=express()
const cors = require('cors');
const secretkey=process.env.SECRET_KEY 
app.use(express.json())
app.use(cors())
app.post("/register",async(req,res)=>{
    try{
        const user=req.body
        const userData=await userModel.create(user)
        console.log(userData)
        if(userData){
            res.send('user registered')
        }



    }
    catch(err){

        console.log(err)
    }
})


app.post("/login",async(req,res)=>{
    const {email,password}=req.body
    try{
        const user=await userModel.findOne({email:email})
       if(user!==null){
        if(user.password!==password){
            res.send('in correct password')
        }
        else{
          jwt.sign({email:email},secretkey,(err,token)=>{
            if(!err){
                res.send({message:"login success",token:token})
            }
          })
        }
       }
       else{
        res.send('user not found')
       }
    }
    catch(err){
        console.log(err)

    }
})



app.get("/products",async(req,res)=>{
    try
    {
        // let product=req.body
        let doc=await productModel.find()
        res.send(doc)
       
    
    }
    catch(err){
      res.send(err)
    }
})

app.post("/track",async(req,res)=>{
    try{
        let trackdata=req.body
        let doc=await CartModel.create(trackdata)
        res.send("tracked data added")
        console.log(doc)


    }
    catch(err){
   res.send(err)
    }
})
app.listen(3000,()=>{
    console.log("server running at port 3000")
})