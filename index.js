import express from "express"
import cors from 'cors';
import { DbConnect } from './config/db.js';
import fileUpload from "express-fileupload";
import router from "./route/userRoute.js";
 const app=express();
 app.use(express.json());
 app.use(fileUpload());
 app.use(cors());
 const PORT=8000;
 DbConnect();
 app.use('/api',router);
 app.listen(PORT,()=>{
    console.log("Server running perfectly");
    
 })