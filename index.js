const express = require("express");
const app=express();
const cors=require("cors");
require('dotenv').config()
app.use(cors());
app.use(express.json());

app.get('/status',(req,res,err)=>{
    return res.status(200).json({
        msg:"Status Retrieved"
    })
})

app.get('/date',(req,res,err)=>{
    return res.status(200).json({
        msg:"Date Retrieved"
    })
})

app.listen(process.env.PORT || 3000);