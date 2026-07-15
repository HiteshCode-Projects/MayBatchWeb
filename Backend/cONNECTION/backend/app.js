const express = require('express')
const cors = require('cors')


const app = express()


//MiddleWare
app.use(express.json())
app.use(cors())  //Enable the cors so we can share resource even though having different address

//Example 1 : 
app.post('/login' , (req,res)=>{


const {name , email} =   req.body      // frontend

console.log(name)

//Simple Validation
if(name && email){
    res.json({ message : `Welcome  ${name}  To Superclicks`})
}else{
    res.status(400).json({message: 'Name and Email are required'})
}



})

app.get('/' , (req,res)=>{
    res.json({
        message:'Backend running'
    })
})


app.listen(3000,()=>{
    console.log("Server running on http://localhost:3000")
})

