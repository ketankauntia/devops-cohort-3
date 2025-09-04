import express from "express";

const app = express;

app.get('/', (req,res)=>{
    res.send("God did!");
})

app.listen(3000);