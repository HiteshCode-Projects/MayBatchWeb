const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bcrypt   = require('bcrypt')

const app = express()

//Middleware
app.use(express.json())
app.use(cors())  //Enable The Cors


//1.Backend - Database connection

//1. Connect : Local DB :  mongodb:localhost:27017/Database_Name

mongoose.connect('mongodb://localhost:27017/StudentMay')

.then(()=>console.log('MongoDB Connected'))

.catch((err)=>console.log(err))


//2.Schema - BluePrint of Data Which you want to Store
const UserSchema =   new  mongoose.Schema({
                //Key:value
                name:String ,
                email:{
                    type:String,
                    unqiue:true
                },
                password:String
             })

   
//3.   Model - Represent Collection in MongoDB
const User  =    mongoose.model('User',UserSchema) 



//API - Routes Frontend - Backend - app.methodName

app.get('/',(req,res)=>{
    res.send("Api Running..")
})

app.post('/register' , async(req,res)=>{

const {username , email , password } = req.body


//1. Basic Validation

if(!username || !email || !password){
    return res.json({message:'All Feilds must be completed'})
}



//Check Existing User

const existingUser =  await  User.findOne({email})

if(existingUser){
    return res.json({
        message:'User Already Exits'
    })
}

//3. Hash Password

const hashPassword = await  bcrypt.hash(password , 10)

//Save the Data in MongodbCollection- User

   const newUser  =   new User({
                username,
                email,
                password:hashPassword
})

    await    newUser.save()  //Store The Data


    res.json({
        message:'User Created Successfully'
    })
})



//Login

app.post('/login', async(req,res)=>{


 const {email,password}  = req.body

 //1.Find User

 const user = await User.findOne({email})

 if(!user){
    return res.json({
        message:'User Not Found - Register First'
    })
 }


 //Comapre password
 const valid = await bcrypt.compare(password , user.password)

 if(valid){
    res.json({
        message:'Login Successfully'
    })
 }else{
    res.json({
        message:'Incorrect password'
    })
 }


})


app.listen(3000,()=>{
    console.log('Server Running http://localhost:3000')
})
