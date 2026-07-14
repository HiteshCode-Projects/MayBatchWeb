//Backend Rules To Write Code

//Step 1 : Importing All Required Modules Whatever Needed For Backend Setup, Like Express  , Mongoose , cors , dotenv  , bcrypt , jswonwebtoken , cookie-parser , multer , path etc.
//We Need To Import All Required Modules For Backend Setup

//How To Impport Modules In Nodejs
//By using require('module-name') function we can import modules in nodejs
//Example : const express = require('express');  //Here we are importing express module in our backend setup

const express = require('express');  //Here we are importing express module in our backend setup

//Inbuilt express modules function express() is used to create an express application- Which inside exress module
//Step 2 : Create an express application by using express() function which is inside express module
const app = express();


//Step 3: Define Routes - API Endpoints For communication Between Frontend And Backend
// Synatx  :  app.methodName('Path/Address' , function(req,res){  //code to handle the request and response  } )

//Get Method: It gets The Data From Backend Server To Frontend Client/User

app.get('/', function(req,res){

    res.send('Good Evening User, Welcome To Backend Server');
})

app.get('/login', function(req,res){


    res.send('Good Evening User, Welcome To Login Page');
})


app.get('/register', function(req,res){

    res.send('Good Evening User, Welcome To Register Page');
})

//Step 4: Start The Backend Server By Using app.listen() Function Which Is Inside Express Module
//Synatx : app.listen(portNumber, function(){  //code to run when server is started  } )

//PortNumber : It is a number which is used to identify the backend server in the network
//Example : 3000 , 5000 , 8000 , 9000 etc.

app.listen(3000, function(){
    console.log('Backend Server Is Running On Port Number 3000 http://localhost:3000');

})

