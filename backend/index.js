import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';

//connection
mongoose.connect("mongodb://127.0.0.1:27017/book_store")
.then(()=>console.log("mongodb connected!"))
.catch(err=>console.log(err));

//schema
const bookSchema=new mongoose.Schema({
    isbn_no:{
        type:String,
        required:true,
        unique:true
    },
    book_name:{
        type:String,
        required:true
    },
    author_name:{
        type:String,
        requird:true
    },
    summary:{
        type:String,
        required:true
    },
    rating:{
        type:String,
        required:true
    }
})

//model
const User=mongoose.model('books',bookSchema);

const port=3000;
const app=express();

app.use(cors());

app.use(bodyParser.json());

app.get("/",async(req,res)=>{
    let users=await User.find();
    res.send(users);
})

app.post("/",async(req,res)=>{
    let book=new User();
    book.isbn_no=req.body.isbn_no;
    book.book_name=req.body.book_name;
    book.author_name=req.body.author_name;
    book.summary=req.body.summary;
    book.rating=req.body.rating;

    await book.save();
})

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})
