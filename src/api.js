const express = require("express");
const app=express();
const serverless=require("serverless-http");
const cors=require("cors");
// require('dotenv').config()
// app.use(cors());
// app.use(express.json());


const router = express.Router();

router.get('/',(req,res,err)=>{
    return res.json({
        msg:"Hello Retrieved"
    })
})

router.get('/status',(req,res,err)=>{
    return res.json({
        msg:"Status Retrieved"
    })
})

router.get('/date',(req,res,err)=>{
    return res.json({
        msg:"Date Retrieved"
    })
})

app.use('/.netlify/functions/api',router);
module.exports.handler=serverless(app);