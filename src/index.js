const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here


app.get('/',(req,res)=>{
    res.send("Hello world!.")

})

let message;
var result;
let status;

app.post('/add',(req,res)=>{
    const num1=req.body.num1
    const num2=req.body.num2   
    message="the sum of given two numbers";
    result=num1+num2;
    status="success"

    if(typeof num1==='string'||typeof num2==='string'){
        status="error"
        message="Invalid data types"                  
    }else 
    if((num1>100000||num2>100000)&& result>100000){
        message="Overflow"
        status="error"
    }else
    if(num1<100000||num2<100000){
        if(result>100000){
            message="Underflow"
            status="error"          
        }  
    }      
    res.json(
        {
            "status":status,
            "message":message,
            "sum":result
        }
    )
    res.end();

})


app.post('/sub',(req,res)=>{
    const num1=req.body.num1
    const num2=req.body.num2   
    message="the difference of given two numbers";
    result=num1-num2;
    status="success"
    
    if(typeof num1==='string'||typeof num2==='string'){
        status="error"
        message="Invalid data types"                  
    }
    
        
    res.json(
        {
            "status":status,
            "message":message,
            "difference":result
        }
    )
    res.end();

})

app.post('/multiply',(req,res)=>{
    const num1=req.body.num1
    const num2=req.body.num2   
    message="The product of given numbers";
    result=num1*num2;
    status="success"

    if(typeof num1==='string'||typeof num2==='string'){
        status="error"
        message="Invalid data types"                  
    }else 
    if((num1>1000000||num2>1000000)&& result>1000000){
        message="Overflow"
        status="error"
    }else
    
    if(num1<1000000&&num2<1000000){
        if(result>1000000){
            message="Overflow"
            status="error"          
        }  
    }      
    res.json(
        {
            "status":status,
            "message":message,
            "result":result
        }
    )
    res.end();

})


app.post('/divide',(req,res)=>{
    const num1=req.body.num1
    const num2=req.body.num2   
    message="The division of given numbers";
    result=num1/num2;
    status="success"

    if(typeof num1==='string'||typeof num2==='string'){
        status="error"
        message="Invalid data types"                  
    }
    if(num1<100000||num2<100000){
        if(result>100000){
            message="Underflow"
            status="error"          
        }  
    } 
    if(num2==0){
        message="Cannot divide by zero"
    }     
    res.json(
        {
            "status":status,
            "message":message,
            "result":result
        }
    )
    res.end();

})









app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;
