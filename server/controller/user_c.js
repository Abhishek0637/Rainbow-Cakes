// import mongoose from 'mongoose';
import User from './../model/userModel.js';
// import express from 'express';

export const Signup= (req,res)=>{
    console.log(req.body);
res.send('Hello from server');
};

export const createUser= async (req,res)=>{console.log("trigered");
try{
    console.log(req.body);
const newUser=await User.create(req.body);

res.status(201).json({status:"success",user:newUser});
 }
 catch(error){
     console.log(error.message);
     res.status(409).json({ message: error.message });
}
};

export const Login=async(req,res)=>{
    const {email,password}=req.body
    try{
        const  user = await User.find({email,password})

         if(user.length >0){
             const currentUser={
                 name:user[0].name,
                 email:user[0].email,
                 isAdmin:user[0].isAdmin,
                 _id:user[0]._id
             }
            res.send(currentUser);
             
         }else{
             return res.status(400).json({message:'user login failed'});
         }
    }catch(error){
            return res.status(400).json({message:'error occured'});
    }
   
};