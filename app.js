const express=require('express');
require('./db/conn');
const dotenv=require("dotenv");
const mongoose=require('mongoose');
const cors = require('cors');

const User=require('./model/userSchema');
const Router=require('./router/auth');

const app=express();
// Enable CORS for all origins

app.set("trust proxy", 1);
 // Ensure you have required the 'cors' package

app.use(cors({
    origin: ['https://grievance-frontend.vercel.app', 'http://localhost:3000'], // Allowed origins
    credentials: true, // To allow cookies to be shared between back-end and front-end
    methods: ['GET', 'POST'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Accept'] // Optionally specify headers allowed in requests
}));

const cookieParser=require("cookie-parser");
app.use(cookieParser());
app.use(express.json());
app.use(Router);
dotenv.config({path:'./config.env'});

require('./middleware/authenticate');

const port=process.env.PORT || 8000;
app.use(express.urlencoded({ extended: false }));

app.listen(port,()=>{
    console.log(`Connection setup at ${port}`)
})
