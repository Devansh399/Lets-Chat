import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from " C:\Users\Sameer Singh\Documents\java program\.vscode\backend\models\route.js";


// const express = require('express')
const app = express();
dotenv.config();

const PORT = process.env.PORT || 5001;
const URI = process.env.MONGODB_URI;

try{
    mongoose.connect(URI);
    console.log("MongoDB Connected");
}
catch(error){
    console.log(error);
}

app.use("/user", userRoute);
//const port = 5002

// app.get('/', (req, res) => {
//   res.send('sunfire sensei!')
// });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
}); //boiler plate code