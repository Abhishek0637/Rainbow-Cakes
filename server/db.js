import mongoose from "mongoose";

const url='mongodb+srv://RAINBOW_CAKE:abhi0637@cluster0.hickh.mongodb.net/RAINBOW_CAKES?retryWrites=true&w=majority';

mongoose.connect(url,{useUnifiedTopology:true,useNewUrlParser:true})

var db=mongoose.connection

db.on('connected',()=>{
    console.log('connection established successfull');
})

db.on('error',()=>{
    console.log('error occured !');
})

export default mongoose;