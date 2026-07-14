//Step 1: Import The Modules
                 
const express   =  require('express')

const app = express()


//Middleware - Security layer
app.use( express.json() )

//1. Fetch Data Fof Restraunt
//get : Get The Data of Restraunts from server - Show on Frontend

app.get('/restraunts' , (req,res)=>{

    res.send('Fetch The Restraunt Data')


})



//2. Place Order
//post : Send The Data To Server from frontend
//frontend - req.body

app.post('/order' , (req,res)=>{
    res.send(`Order Placed Successfully Order Details  ${JSON.stringify(req.body)}`)
})



app.listen(3000,()=>{
    console.log("Server Running http://localhost:3000")
})


